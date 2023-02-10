import styled from 'styled-components'
import Main from './pages/Main/index'

function App() {

  return (
    <AppContainer>
      <Main />
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: black;
`