
import './App.css';
import Items from './components/items';
import Header from './components/header';
function App() {
  return (
    <div>
      <Header/>
      <div className="container pt-3">
        <Items/>
      </div>
    </div>
  );
}

export default App;
