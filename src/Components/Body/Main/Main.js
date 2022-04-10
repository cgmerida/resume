import SectionTitle from '../SectionTitle/SectionTitle';
import WorkExperience from '../WorkExperience/WorkExperience';

const SKILLS = [
  'Backend: NodeJs, Java, PHP.',
  'Frontend: Javascript, Angular, ReactJs.',
  'General knowledge in SQL/noSQL Databases.',
  'Hybrid Mobile Development (Ionic/Cordova).',
  'General knowledge in Docker, Kubernetes, OpenShift & AWS.',
  'Self-taught and analytical thinking.',
];

const EXPERIENCE = [
  {
    position: 'Software Specialist',
    company: 'GBM Guatemala',
    timePeriod: 'June 2019 - Present',
    roles: [
      'IBM API Connect, DataPower Gateway, Sterling B2B/File Gateway and ITX Specialist.',
      'Software development with Java, NodeJs, XSLT, JavaScript.',
      'Development of Web Services and REST APIs.',
      'AWS Development Lambda, API Gateway, EC2, ELB, ECS.',
      'EDI & Integration Engineer.',
    ],
  },
  {
    position: 'Systems Administrator',
    company: 'Regencia Norte, Municipalidad de Guatemala',
    timePeriod: 'Jan 2018 - June 2019',
    roles: [
      'Administration of internal systems such as Pasalo, Call Center, SAP, Torre de Control, among others.',
      'Innovation and modernization of internal processes.',
      'Development of engagement measurement system.',
      'Systems Reporting.',
    ],
  },
  {
    position: 'Systems Operator',
    company: 'Regencia Norte, Municipalidad de Guatemala',
    timePeriod: 'Jan 2016 - Dec 2018',
    roles: [
      'Monitoring, follow-up and operation of Pasalo, Call Center, Torre de Control of zones 17, 18, 24 and 25 of the capital city of Guatemala.',
      'Development of Municipal (local council) Information maps in ArcGIS System.',
      'Web & Mobile Development.',
    ],
  },
];

const Main = () => (
  <>
    <SectionTitle title="Skills" />
    <ul>
      {SKILLS.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </ul>
    <SectionTitle title="Work experience" />
    {EXPERIENCE.map((exp, i) => (
      <WorkExperience key={i} {...exp} />
    ))}
  </>
);

export default Main;
