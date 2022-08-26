import React from 'react'

import UserInfo from './UserInfo'
import { StyledHeader, Logo } from './styled/Header.styled'

const Header: React.FC = () => (
  <StyledHeader>
    <Logo src="" alt="Trade Journal" />
    <UserInfo />
  </StyledHeader>
)

export default Header
