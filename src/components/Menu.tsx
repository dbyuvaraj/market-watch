import React from 'react'
import { NavLink } from 'react-router-dom'

import { StyledMenu, StyledNavLink } from './styled/Menu.styled'

const Menu: React.FC = () => (
  <StyledMenu>
    <ul>
      <li>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/watchlist">Watchlist</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/forex">Forex</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/coin">Coin</StyledNavLink>
      </li>
    </ul>
  </StyledMenu>
)

export default Menu
