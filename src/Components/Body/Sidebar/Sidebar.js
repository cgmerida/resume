import SectionTitle from '../SectionTitle/SectionTitle';
import IconList from '../../IconList/IconList';
import Education from '../Education/Education';

const CONTACT_INFORMATION = [
  {
    icon: 'pin',
    text: 'Santa Catarina Pinula, GU, Guatemala',
  },
  {
    icon: 'email',
    text: 'cgemerida@gmail.com',
  },
  {
    icon: 'phone',
    text: '(502) 5930 3056',
  },
  {
    icon: 'linkedin',
    text: '/cjeronimogt',
  },
];

const EDUCATION = [
  {
    title: 'MBA',
    institution: 'Universidad Internacional de La Rioja. ',
    years: '2022 - 2023',
  },
  {
    title: 'Computer Science Engineer',
    institution: 'Universidad Mariano Gálvez.',
    years: '2015 - 2021',
  },
];

const Sidebar = () => (
  <>
    <div className="separation">
      <SectionTitle title="Personal Profile" />
      <p>
        Professional with 6 years of expertise in web and mobile development.
        Enterprise Integration Engineer. Focused on developing optimal solutions
        and passionate about continuous learning.
      </p>
    </div>
    <div className="separation">
      <SectionTitle title="Contact" />
      <ul className="custom">
        {CONTACT_INFORMATION.map((info, i) => (
          <IconList key={i} {...info} />
        ))}
      </ul>
    </div>
    <div className="separation">
      <SectionTitle title="Education" />
      {EDUCATION.map((info, i) => (
        <div key={i} className="mb-5">
          <Education {...info} />
        </div>
      ))}
    </div>
  </>
);

export default Sidebar;
