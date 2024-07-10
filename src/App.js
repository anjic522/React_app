import logo from './logo.svg';
import './App.css';
import Cname from './components/sample';
import But from './components/btn';
import Main ,{Second as Secondory,Third as Tird,Fifth} from './components/headding/head';
import { Tabname } from './components/table';
import { Cardname } from './components/card';
function App() {
  return (
    <div >
            <But></But>

      <Cname><h1>hello</h1></Cname>
      <But><h1>hi</h1></But>
      <But></But>

      <But></But>

      <But></But>


      <Main></Main>
      <Secondory></Secondory>
      <Tird></Tird>
      <Fifth></Fifth>

      



      <Tabname></Tabname>

      <Cardname></Cardname>
    </div>
      

  );
}

export default App;
