import React from 'react'

import RouteConfig from '@components/Routes'
import Header from '@components/Header'
import GlobalStyle from '@components/styled/GlobalStyles.styled'
import Wrapper from '@components/styled/Wrapper.styled'
import PageContainer from '@components/styled/PageContainer.styled'
import Sidebar from '@components/Sidebar'

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Header />
      <article style={{ display: 'flex' }}>
        <Sidebar />
        <PageContainer>
          <RouteConfig />
        </PageContainer>
      </article>
    </Wrapper>
  </>
)

export default App
