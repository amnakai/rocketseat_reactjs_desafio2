import { HeaderContainer, HeaderNavCart, HeaderNavCartCounter, HeaderNavLocation } from './styles'
import {  MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} />
      </span>
      <nav>
        <NavLink to="/" title="Home">
          <HeaderNavLocation>
            <MapPin size={22} />
            Porto Alegre, RS
          </HeaderNavLocation>
        </NavLink>
        <NavLink to="/checkout" title="Carrinho">
          <HeaderNavCart>
            <ShoppingCart size={22} />
            <HeaderNavCartCounter>
                3
            </HeaderNavCartCounter>
          </HeaderNavCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
