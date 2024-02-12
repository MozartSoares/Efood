import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import * as Yup from 'yup'

import { close, clear } from '../../store/reducers/cart'

import * as S from './styles'
import Cart from '../../components/Cart'

import { Button } from '../../GlobalStyles'
import { getTotalPrice, parseToBrl } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const [displayCart, setDisplayCart] = useState(true)
  const [displayAdress, setDisplayAdress] = useState(false)
  const [displayPayment, setDisplayPayment] = useState(false)
  const [orderFinished, setOrderFinished] = useState(false)

  const form = useFormik({
    initialValues: {
      recipientName: '',
      adressStreet: '',
      adressCity: '',
      adressCode: '',
      adressNumber: '',
      adressComplement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      recipientName: Yup.string().required('O campo é obrigatório'),
      adressStreet: Yup.string().required('O campo é obrigatório'),
      adressCity: Yup.string().required('O campo é obrigatório'),
      adressCode: Yup.string().required('O campo é obrigatório'),
      adressNumber: Yup.string().required('O campo é obrigatório'),
      adressComplement: Yup.string(),

      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((prato: Prato) => ({
          id: prato.id,
          price: prato.preco as number
        })),
        delivery: {
          recipientName: values.recipientName,
          adress: {
            street: values.adressStreet,
            city: values.adressCity,
            code: values.adressCode,
            number: values.adressNumber,
            complement: values.adressComplement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (inputName: string) => {
    const isChanged = inputName in form.touched
    const isInvalid = inputName in form.errors
    const hasError = isChanged && isInvalid

    return hasError
  }

  const dispatch = useDispatch()

  const closeCheckout = () => {
    dispatch(close())
  }

  const finishCart = () => {
    setDisplayCart(false)
    setDisplayAdress(true)
  }

  const returnToCart = () => {
    setDisplayCart(true)
    setDisplayAdress(false)
  }

  const finishAdress = () => {
    const inputs = [
      'recipientName',
      'adressStreet',
      'adressCity',
      'adressCode',
      'adressNumber'
    ]

    let allFieldsFilled = true

    inputs.forEach((input) => {
      if (!form.values[input]) {
        allFieldsFilled = false
      }
    })

    if (allFieldsFilled) {
      setDisplayAdress(false)
      setDisplayPayment(true)
    } else {
      alert(`Preencha todos os campos corretamente antes de prosseguir`)
    }
  }

  const finishOrder = () => {
    const inputs = [
      'cardName',
      'cardNumber',
      'cardCode',
      'expiresMonth',
      'expiresYear'
    ]

    let allFieldsFilled = true

    inputs.forEach((input) => {
      if (!form.values[input]) {
        allFieldsFilled = false
      }
    })

    if (allFieldsFilled) {
      setOrderFinished(true)
      setDisplayPayment(false)
    } else {
      alert(`Preencha todos os campos corretamente antes de prosseguir`)
    }
  }

  const returnToAdress = () => {
    setDisplayPayment(false)
    setDisplayAdress(true)
  }

  const conclude = () => {
    setDisplayCart(true)
    setOrderFinished(false)
    dispatch(clear())
    closeCheckout()
  }

  return (
    <S.CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCheckout} />
      <S.Sidebar>
        {displayCart && (
          <>
            <Cart />
            {items.length > 0 ? (
              <Button onClick={finishCart}>Continuar com a entrega</Button>
            ) : (
              <></>
            )}
          </>
        )}
        <S.Form onSubmit={form.handleSubmit}>
          <div className={displayAdress ? '' : 'display-none'}>
            <h4>Entrega</h4>
            <S.InputGroup>
              <label htmlFor="recipientName">Quem irá receber</label>
              <input
                required
                name="recipientName"
                id="recipientName"
                type="text"
                value={form.values.recipientName}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                className={checkInputHasError('recipientName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="adressStreet">Endereço</label>
              <input
                required
                name="adressStreet"
                id="adressStreet"
                type="text"
                value={form.values.adressStreet}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                className={checkInputHasError('adressStreet') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="adressCity">Cidade</label>
              <input
                name="adressCity"
                required
                id="adressCity"
                type="text"
                value={form.values.adressCity}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                className={checkInputHasError('adressCity') ? 'error' : ''}
              />
            </S.InputGroup>
            <div className="flex-container">
              <S.InputGroup>
                <label htmlFor="adressCode">CEP</label>
                <InputMask
                  name="adressCode"
                  required
                  id="adressCode"
                  type="text"
                  value={form.values.adressCode}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  className={checkInputHasError('adressCode') ? 'error' : ''}
                  mask={'99999-999'}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="adressNumber">Número</label>
                <input
                  name="adressNumber"
                  required
                  id="adressNumber"
                  type="text"
                  value={form.values.adressNumber}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  className={checkInputHasError('adressNumber') ? 'error' : ''}
                />
              </S.InputGroup>
            </div>
            <S.InputGroup className="last-item">
              <label htmlFor="adressComplement">Complemento (opcional)</label>
              <input
                name="adressComplement"
                id="adressComplement"
                type="text"
                value={form.values.adressComplement}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                className={
                  checkInputHasError('adressComplement') ? 'error' : ''
                }
              />
            </S.InputGroup>
            <Button type="button" onClick={finishAdress}>
              Continuar com o pagamento
            </Button>
            <Button type="button" onClick={returnToCart}>
              Voltar para o carrinho
            </Button>
          </div>
          <div className={displayPayment ? '' : 'display-none'}>
            <h4>
              Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
            </h4>
            <S.InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                required
                name="cardName"
                id="cardName"
                type="text"
                value={form.values.cardName}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
            </S.InputGroup>
            <div className="grid-container">
              <S.InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  required
                  name="cardNumber"
                  id="cardNumber"
                  type="text"
                  value={form.values.cardNumber}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  mask={'9999 9999 9999 9999'}
                />
              </S.InputGroup>
              <S.InputGroup className="cvv">
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  required
                  name="cardCode"
                  id="cardCode"
                  type="text"
                  value={form.values.cardCode}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                  mask={'999'}
                />
              </S.InputGroup>
            </div>
            <div className="flex-container last-item">
              <S.InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <InputMask
                  required
                  name="expiresMonth"
                  id="expiresMonth"
                  type="text"
                  value={form.values.expiresMonth}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
                  mask={'99'}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <InputMask
                  required
                  name="expiresYear"
                  id="expiresYear"
                  type="text"
                  value={form.values.expiresYear}
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  className={checkInputHasError('expiresYear') ? 'error' : ''}
                  mask={'99'}
                />
              </S.InputGroup>
            </div>
            <Button type="submit" onClick={finishOrder}>
              Finalizar pagamento
            </Button>
            <Button type="button" onClick={returnToAdress}>
              Voltar para a edição de endereço
            </Button>
          </div>
        </S.Form>
        {isLoading && <h4>Realizando pedido...</h4>}
        {orderFinished && isSuccess && (
          <div>
            <h4>Pedido realizado - {data.orderId}</h4>
            <p className="last-item">
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button onClick={conclude}>Concluir</Button>
          </div>
        )}
      </S.Sidebar>
    </S.CheckoutContainer>
  )
}
export default Checkout
