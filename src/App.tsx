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
      <Appbar />
      <MiddleComponent />
      <div className="footer" >
      <Footer />
      </div>

    </RecoilRoot>
  )
}

export default App
