import logo from './logo.svg';
import './App.css';

import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Address';
function App() {
  return (

    <div className="App" style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red"><FullName/></h1>
          <br />
    
     
     
   

   <ProfilePhoto/>
   <br />
   <Address/>
    </div>
  );
}

export default App;
