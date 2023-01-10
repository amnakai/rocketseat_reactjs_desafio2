import styled from 'styled-components'


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