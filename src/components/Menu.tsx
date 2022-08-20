import React from 'react'
import { Link } from 'react-router-dom'

import { StyledMenu } from './styled/Menu.styled'

const Menu: React.FC = () => (
  <StyledMenu>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/stock">Stock</Link>
      </li>
      <li>
        <Link to="/forex">Forex</Link>
      </li>
      <li>
        <Link to="/coin">Coin</Link>
      </li>
    </ul>
  </StyledMenu>
)

export default Menu
