import { HeaderContainer, HeaderNavCart, HeaderNavCartCounter, HeaderNavLocation } from './styles'
import {  MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { CoffesContext } from '../../contexts/CoffesContext';

export function Header() {
  const {coffe_list} = useContext(CoffesContext);

  const itemCount = coffe_list.filter(
    coffe => {
      return (coffe.amount && coffe.amount > 0);
    }
  ).length;

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <span>
          <img src={logo} />
        </span>
      </NavLink>
      <nav>
        <NavLink to="/" title="Home">
          <HeaderNavLocation>
            <MapPin size={22} />
            Campinas, SP
          </HeaderNavLocation>
        </NavLink>
        <NavLink to="/checkout" title="Carrinho">
          <HeaderNavCart>
            <ShoppingCart size={22} />
            <HeaderNavCartCounter itemCount={itemCount}>
                {itemCount}
            </HeaderNavCartCounter>
          </HeaderNavCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
