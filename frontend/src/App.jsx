import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './views/core/Index';
import MainWrapper from './layouts/MainWrapper'


function App() {

  return (
    <>
    <MainWrapper>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
          </Routes>
        </BrowserRouter>
    </MainWrapper>
    </>
  )
}

export default App
