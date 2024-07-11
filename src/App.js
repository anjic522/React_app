import logo from './logo.svg';
import './App.css';
import Cname from './components/sample';
import But from './components/btn';
import Main ,{Second as Secondory,Third as Tird,Fifth} from './components/headding/head';
import { Tabname } from './components/table';
import { Cardname } from './components/card';
import { Iterate } from './10.7.24/map iterate ';
import { Twoiterate } from './10.7.24/map iterate ';
import { Bag } from './10.7.24/map iterate ';
import First from './components/headding/head';
import { Name } from './10.7.24/map iterate ';
import { Image } from './10.7.24/map iterate ';
import Data from './10.7.24/listparent';
import { Heading } from './10.7.24/map iterate ';
import { Headding2 } from './10.7.24/map iterate ';
import { Headding3 } from './10.7.24/map iterate ';
import { Headding4 } from './10.7.24/map iterate ';
function App() {
  return (
    <div> 

      {
        Data.map((eachdata)=>(
          <div key={eachdata.team}>
  
          <Heading title={eachdata.team}/>
          <Image html={eachdata.jerseyimg} css = "image" js={200} react={200}/>
          <Headding2 cups={eachdata.cups}/>
          <Headding3 players={eachdata.players}/>
          <Headding4 runners={eachdata.runners}/>
          </div>
        ))
      }

    </div>
  )
    
}

export default App;
