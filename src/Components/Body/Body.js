import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import './Body.css';

const Body = () => (
  <div className="body-container row content">
    <div className="sidebar">
      <Sidebar />
    </div>

    <div className="main">
      <Main />
    </div>
  </div>
);

export default Body;
