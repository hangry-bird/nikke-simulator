import styled from 'styled-components'
import Characters from './pages/characters/index'

function App() {

  return (
    <AppContainer>
      <Characters />
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: black;
`