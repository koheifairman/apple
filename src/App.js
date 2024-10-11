import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
 
export const App = ()=> {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
