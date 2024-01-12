import { Link } from 'react-router-dom'

import { styled } from 'styled-components'
import { cores } from '../../GlobalStyles'

export const TagContainer = styled.div`
  display: inline-block;
  text-align: center;
  padding: 6px 4px;
  max-height: 26px;
  width: auto;
  height: 100%;
  background-color: ${cores.rosa};
  color: ${cores.creme};
  font-size: 12px;
  font-weight: bold;
`

export const TagLink = styled(Link)`
  display: inline-block;
  text-align: center;
  padding: 6px 4px;
  max-height: 26px;
  width: auto;
  height: 100%;
  background-color: ${cores.rosa};
  color: ${cores.creme};
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
`
