import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { data } from './Data/data';

function App() {
  return (
    <div className="App">
      <Header data={data.header} />
      <Footer data={data}/>
    </div>
  );
}

export default App;
