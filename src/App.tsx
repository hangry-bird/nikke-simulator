import { useEffect } from 'react';
import styled from 'styled-components'
import ReactGA from "react-ga4";
import Router from './Router';


const App = () => {
  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(import.meta.env.VITE_GA_ID);
      ReactGA.send("pageview");
    }
  }, [])
  
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
`

