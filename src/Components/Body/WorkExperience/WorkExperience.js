import PropTypes, { string } from 'prop-types';
import './WorkExperience.css';

const WorkExperience = ({ position, company, timePeriod, roles = [] }) => (
  <div className="mb-5">
    <p className="no-margin">
      <strong>{position}</strong>
    </p>
    <p className="no-margin">
      <strong>{company}</strong>
    </p>
    <p className="no-margin mb-2">
      <small>{timePeriod}</small>
    </p>
    <ul>
      {roles.map((role, i) => (
        <li key={i}>{role}</li>
      ))}
    </ul>
  </div>
);

WorkExperience.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  timePeriod: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(string.isRequired),
};

WorkExperience.defaultProps = {
  roles: [],
};

export default WorkExperience;
