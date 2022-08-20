import React from 'react'

import Menu from './Menu'
import UserInfo from './UserInfo'
import { StyledHeader, Logo } from './styled/Header.styled'

const Header: React.FC = () => (
  <StyledHeader>
    <Logo src="" alt="Logo" />
    <Menu />
    <UserInfo />
  </StyledHeader>
)

export default Header
