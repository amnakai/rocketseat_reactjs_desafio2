import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  img {
    height: 40px
  }

  nav {
    display: flex;
    gap: 0.75rem;
  }

  a {
    text-decoration: none;
  }
`
export const HeaderNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem;
`

export const HeaderNavLocation = styled(HeaderNavItem)`
  background-color: ${(props) => props.theme['purple-light']};
`

export const HeaderNavCart = styled(HeaderNavItem)`
  background-color: ${(props) => props.theme['yellow-light']};
`

export const HeaderNavCartCounter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white']};
  border-radius: 1000px;
  height: 1.25rem;
  width: 1.25rem;
  
  margin-top: -2rem;
  margin-right: -1rem;
`
