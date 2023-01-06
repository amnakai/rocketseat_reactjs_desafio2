import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomeIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr 29rem;
  gap: 2rem;
  background-image: url("src/assets/intro_background.png");
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat; 
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const HomeIntroTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  strong {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 2.8rem;
    line-height: 2.8rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-bottom: 3rem;
    font-size: 1.12rem;
  }

`

export const HomeIntroTextList = styled.div`

  display: grid;
  grid-template-columns: fit-content(50%) 1fr;
  gap: 1rem;

  i {
    display: inline-block;
    padding: 6px;
    margin-right: 0.5rem;
    border-radius: 1000px;
  }

  .item1 {
    background: ${(props) => props.theme['yellow-dark']};
  }

  .item2 {
    background: ${(props) => props.theme['base-text']};
  }

  .item3 {
    background: ${(props) => props.theme['yellow']};
  }

  .item4 {
    background: ${(props) => props.theme['purple']};
  }
`

export const HomeIntroImage = styled.div`
  img {
    width: 100%;
  }
`
export const HomeMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  margin-top: 2rem;
`

export const HomeMainTitle = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  font-family: 'Baloo 2', 'Roboto', sans-serif;
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 3rem;
  color: ${(props) => props.theme['base-text']};
`

export const HomeMainCatalog = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  gap: 2rem 1rem;

  @media (min-width: 33rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 50rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 67rem) {
    grid-template-columns: repeat(4, 1fr);
  }
`

