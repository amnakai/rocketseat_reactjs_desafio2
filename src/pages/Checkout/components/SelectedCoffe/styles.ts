import styled from 'styled-components'


export const CheckoutItemContainer = styled.div`
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 4rem  1fr 5rem;
    align-items: flex-start;

    img {
        width: 4rem
    }

    .col_sub {
        display: flex;
        justify-content: end;
        font-weight: 700;
    }
`

export const CheckoutItemForm = styled.div`
    margin-top 0.5rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`

export const CheckoutItemInput = styled.input`
  background: transparent;
  width: 4rem;
  border: 0;
  border-radius: 6px;
  font-size: 0.75rem;
  padding: 0.5rem 0.5rem;
  color: ${(props) => props.theme['base-title']};
  background-color: ${(props) => props.theme['base-button']};
  text-align: center;

  &[type=number]::-webkit-inner-spin-button, 
  &[type=number]::-webkit-outer-spin-button {  
   opacity: 1;
  }
 
`

export const CheckoutItemButton = styled.button`
  display: flex;
  gap: 0.2rem;
  font-size: 0.75rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem  1rem;
  border: none;

  &.selected {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple']};
  }

  &:hover{
    background-color: ${(props) => props.theme['base-hover']};
  }


`