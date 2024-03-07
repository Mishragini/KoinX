import './App.css'
import { Appbar } from './components/Appbar'

import {
  RecoilRoot,
} from 'recoil';
import { MiddleComponent } from './components/MiddleComponent';
import { Footer } from './components/Footer';


function App() {
  return (
    <RecoilRoot>
      <div className='felx flex-col'>
      <Appbar />
      <div className='text-xs text-slate-500 mx-4 mt-4'>Cryptocurrencies {'>>'} <span className='text-black'>Bitcoin</span></div>
      <MiddleComponent />
      <Footer />
      </div>

    </RecoilRoot>
  )
}

export default App
