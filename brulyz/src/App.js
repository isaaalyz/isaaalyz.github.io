import logo from './logo.svg';
import './App.css';
import Welcome from './componentes/welcome';
import Link from './componentes/welcome/link';
import Counter from './componentes/welcome/counter';
import List from './componentes/list';
import Mega from './componentes/mega';
import Clients from './componentes/clients';


function App() {
  return (
    <div className="App">
    <Welcome text="BruLyz" cor="pink"/>
    <Link url="https://isaaalyz.github.io" text="Site Pessoal"/>
    <Counter val="1430"/>
    <List/>
    <Mega/>
    <Clients/>
    </div>
  );
}

export default App;
