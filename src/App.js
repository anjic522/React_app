import logo from './logo.svg';
import './App.css';
import Cname from './components/sample';

import { Image } from './11/7/24/card 2file';
import Dataobjects from './11/7/24/card';
import { Heading } from './11/7/24/card 2file';
import { Headding2 } from './11/7/24/card 2file';
import { Headding3 } from './11/7/24/card 2file';
import { Headding4 } from './11/7/24/card 2file';
import Objdata from './11/7/24/cardobj';
import "./style.css"
function App() {
  return (
    <div> 
      <div className='navbar'> 
<p>HOME</p>
<p>IPL</p>
<p>PLAYERS</p>
<p>RUNNERS</p>
<p>ABOUT</p>
<p>SPORTS</p>




      </div>
      <div className='iplcards'>

{
  Objdata.map((eachdata)=>(
    <div key={eachdata.team} className='cars'>
<Heading title={eachdata.team}/>
<Image html={eachdata.jerseyimg} css="image" js={200} react={200}/>a
<Headding2 cups={eachdata.cups}/>
<Headding3 players={eachdata.players}/>
<Headding4 runners={eachdata.runners}/>


      </div>

  ))
}

</div>


<div className='footer'>
  <p> About Ipl Match</p>

</div>

    </div>
  )
    
}

export default App;
