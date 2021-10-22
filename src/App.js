
import './App.css';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';
import Adress from './component/profile/Adress';
import AboutMe from './component/profile/AboutMe';

function App() {
  return (
    <div className="App">
      <FullName/>
      <div className="profile"> 
      <div className="a">
      <Adress/>
      </div>
      <div className="a">
      <ProfilePhoto/>
      </div>
     <div className="a">
      <AboutMe/>
      </div>
      </div>
    </div>
  );
}

export default App;
