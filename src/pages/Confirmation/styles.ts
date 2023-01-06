import styled from 'styled-components'

export const ConfirmationContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;
  margin
`

export const ConfirmationDataPanel = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1rem;
  }
`

export const ConfirmationDataItem = styled.div`
  display: grid;
  grid-template-columns: 2.1rem 1fr;
  align-items: center;
  gap: 0.5rem;
  margin-top 2rem;

  :first-child {
    margin:0;
  }

  i{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;
  }

  i.purple {
    background-color: ${(props) => props.theme['purple']};
  }

  i.yellow {
    background-color: ${(props) => props.theme['yellow']};
  }

  i.yellow-dark {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1rem;
    line-height: 1.2rem;
  }

  .text-bold {
    font-weight: 700;
  }
  

`

export const ConfirmationDataCard = styled.div`
  display: flex;
  flex-direction: column;
  background: 
    linear-gradient(
      ${(props) => props.theme['background']}, 
      ${(props) => props.theme['background']}
    ) padding-box,
    linear-gradient(
      to right, 
      ${(props) => props.theme['yellow']}, 
      ${(props) => props.theme['purple']}
    ) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  padding: 2.5rem;
  margin-top: 2rem;
`

export const ConfirmationImagePanel = styled.div`
  display:flex;
  justify-content: center;

  img {
    margin-bottom: -0.5rem;
  }
`