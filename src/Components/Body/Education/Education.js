import PropTypes from 'prop-types';

const Education = ({ title, institution, years }) => (
  <>
    <p className="no-margin">
      <strong>{title}</strong>
    </p>
    <p className="no-margin">{institution}</p>
    <p className="no-margin">
      <small>{years}</small>
    </p>
  </>
);

Education.propTypes = {
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
};

export default Education;
