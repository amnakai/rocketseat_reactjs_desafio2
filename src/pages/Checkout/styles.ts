import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  flex: 1;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr fit-content(50%);
  flex-direction: column;
  align-items: flex-start;
`

export const CheckoutLeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-itens: start;
  justify-content: start;
  
  h1 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']}
  }
`

export const CheckoutCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 1rem;


`

export const CheckoutCardHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: fit-content(20%) 1fr;
  align-items: flex-start;
  gap: 0.5rem;

  strong {
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
  }
`

export const CheckoutAddressCardForm = styled.form`
  flex-wrap: wrap;
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
  width: 100%;

  .col-full {
    width: 100%;
  }

  .col-fill {
    flex: 1;
  }

  .col-small {
    width: 10%;
  }
`

export const CheckoutAddressCardInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 0.875rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  
  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &:placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const CheckoutPaymentCardForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  margin-top: 1rem;
`

export const CheckoutCardButton = styled.button`
  display: flex;
  gap: 0.5rem;
  font-size: 0.75rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 1rem;
  border: none;

  &.selected {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple']};
  }

  &:hover{
    background-color: ${(props) => props.theme['base-hover']};
  }


`
export const CheckoutRightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-itens: start;
  justify-content: start;
  width: 450px;

  h1 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']}
  }
  `

export const CheckoutConfirmationCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
  margin-top: 1rem;

  hr {
    margin: 1.5rem 0 1.5rem 0;
    border: 1px solid ${(props) => props.theme['base-button']};
  }

`

export const CheckoutConfirmationButton = styled.button`
  background-color: ${(props) => props.theme['yellow']};
  border: none;
  border-radius: 6px;
  padding: 0.75rem;
  color: ${(props) => props.theme['white']};
  font-size: 0.875rem;
  font-weight: 700;
  margin-top: 1rem;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }
`

export const CheckoutConfirmationCardSubtotalPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 0;

  .text-small {
    font-size: 0.875rem;
  }

  .text-emph {
    font-size: 1.33rem;
    font-weight: 700;
  }

  .col-right {
    display: flex;
    justify-content: end;
  }

`

export const HeaderNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem;
`