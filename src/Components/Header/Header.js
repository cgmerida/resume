import './Header.css';
import photo from '../../assets/img/photo.png';

const Header = () => (
  <div className="header-bg row header">
    <div className="circle">
      <img src={photo} alt="Digital img" />
    </div>
    <div className="title-container">
      <h1>Carlos Gerardo Jeronimo</h1>
      <h2 className="sub-title">Software Engineer</h2>
    </div>
  </div>
);

export default Header;
