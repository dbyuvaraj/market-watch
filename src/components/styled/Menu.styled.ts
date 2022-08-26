import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledMenu = styled.nav`
  ul {
    li {
      list-style: none;
      cursor: pointer;
      line-height: 40px;

      &:hover {
        background-color: #4152bd;
      }
    }
  }
`

export const StyledNavLink = styled(NavLink)`
  line-height: 40px;
  width: 100%;
  display: block;
  padding: 0 20px;
  
  &.active {
    font-weight: bold;
    color: #333333;
    background-color: #7652bd;
  }
`
