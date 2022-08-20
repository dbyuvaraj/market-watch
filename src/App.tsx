import React from 'react'

import RouteConfig from './components/Routes'
import Header from './components/Header'
import GlobalStyle from './components/styled/GlobalStyles.styled'
import PageWrapper from './components/styled/PageWrapper.styled'

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <PageWrapper>
      <Header />
      <RouteConfig />
    </PageWrapper>
  </>
)

export default App
