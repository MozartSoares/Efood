import ProfileList from '../../components/ProfileList'
import Header from '../../components/HeaderHome'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  return (
    <>
      <Header />
      <div className="container">
        {restaurantes ? (
          <ProfileList profiles={restaurantes} />
        ) : (
          <h4>carregando...</h4>
        )}
      </div>
    </>
  )
}

export default Home
