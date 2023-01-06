import styled from 'styled-components'


export const CatalogItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  padding: 0 1rem 1rem 1rem;

  img {
    height: 120px;
    width: 120px;
    margin-top: -20px;
  }

  strong {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 1rem;
  }
`

export const CatalogTagList = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 0.5rem;

`

export const CatalogItemTag = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.625rem;
  border-radius: 1000px;
  padding: 0.5rem 1rem;

`

export const CatalogItemForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  label {
    font-size: 0.875rem
  }

  span {
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'Baloo 2', 'Roboto', sans-serif;
  }

`

export const CatalogItemButton = styled.button`
    background-color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    padding: 0.5rem;
    cursor: pointer;
    border: transparent;

    &:hover {
        background-color: ${(props) => props.theme['purple']};
    }

    &:click {
        background-color: ${(props) => props.theme['purple-light']};
    }
`

export const CatalogItemInput = styled.input`
  background: transparent;
  width: 4rem;
  border: 0;
  border-radius: 6px;
  font-size: 1.125rem;
  padding: 0.5rem 0.5rem;
  color: ${(props) => props.theme['base-title']};
  background-color: ${(props) => props.theme['base-button']};
  text-align: center;

  &[type=number]::-webkit-inner-spin-button, 
  &[type=number]::-webkit-outer-spin-button {  
   opacity: 1;
  }
`

