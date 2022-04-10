import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => (
  <>
    <h1 className="section-title">{title}</h1>
    <hr className="section-title-hr" />
  </>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
