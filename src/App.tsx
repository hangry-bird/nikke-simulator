import styled from 'styled-components'
import Router from './Router';

function App() {

  return (
    <AppContainer>
      <Router />
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: black;
`