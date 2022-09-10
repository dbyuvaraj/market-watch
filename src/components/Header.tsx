import React from 'react'

import UserInfo from '@components/UserInfo'
import { StyledHeader, Logo } from '@components/styled/Header.styled'

const Header: React.FC = () => (
  <StyledHeader>
    <Logo src="" alt="Trade Journal" />
    <UserInfo />
  </StyledHeader>
)

export default Header
