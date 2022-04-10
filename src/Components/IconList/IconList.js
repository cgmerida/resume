import './IconList.css';
import PropTypes from 'prop-types';

const IconList = ({ icon, text }) => (
  <li className={`icon-list li-${icon}`}>{text}</li>
);

IconList.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconList;
