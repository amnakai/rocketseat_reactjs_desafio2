import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: calc(100vh - 10rem);
  margin: 0 auto;
  padding: 0 10rem;

  background: ${(props) => props.theme['background']};
  
  display: flex;
  flex-direction: column;
`
