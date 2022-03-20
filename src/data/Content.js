
export const skills = [
  { id: '001', title: 'Front end', icon: 'code', file: '', items: ['HTML', 'CSS', 'Javascript', 'React|Redux'] },
  { id: '002', title: 'Server', icon: 'share', file: '', items: ['NodeJS', 'Express', '\u00A0', '\u00A0'] },
  { id: '003', title: 'Database', icon: 'cloud_queue', file: '', items: ['mySQL', 'MongoDB', '\u00A0'] },
  { id: '004', title: 'Mobile', icon: 'apps', file: '', items: ['Xamarin forms', 'React Native', '\u00A0', '\u00A0'] },
];

export const articles = [
  { id: '001', skillid:'002', title: 'ToDo List Server', detail: 'A RESTful API ToDo list server using Node.js/ Express.', file: 'article001.txt'},
  { id: '002', skillid:'001', title: 'React: Calculator', detail: 'Calculator developed using React.', file:'article002.txt'},
  // eslint-disable-next-line no-script-url
  { id: '003', skillid:'999', title: 'Javascript: ToDo List', detail: 'ToDo List using Javascript.', file:'JavaScript001.txt' },
  { id: '004', skillid:'002', title: 'NodeJS: ToDo List', detail: 'Provides a ToDo List using a ToDoList API Server.', file:'NodeJS001.txt' },
  { id: '005', skillid:'001', title: 'CSS: Examples', detail: 'Examples of CSS', file:'CSS001.txt' },
  
  { id: '006', skillid:'003', title: 'MySql', detail: 'MySql implementations', file:'MYSQL001.txt' },
  { id: '007', skillid:'003', title: 'MongoDB', detail: 'MongoDBs implementations', file:'Mongo001.txt' },
 
  { id: '009', skillid:'004', title: 'Xamarin: ToDoList client', detail: 'Example of a ToDo list developed using Xamarin.', file:'xamarin001.txt'},
  { id: '010', skillid:'004', title: 'React Native: ToDoList client', detail: 'Example of a ToDo list developed using React Native.', file:'ReactNative001.txt'},
  { id: '011', skillid:'004', title: 'Xamarin: tymr247', detail: 'A productivity App (Android) developed using Xamarin.', file:'xamarin002.txt'},
  
  { id: '012', skillid:'001', title: 'React/Redux: Sender-Receiver', detail: 'Example of using React / Redux.', file:'ReactRedux001.txt'},
  { id: '013', skillid:'001', title: 'Text2Doc', detail: 'React.js component to processes a txt file and creates a formatted web page.', file:'Text2Doc.txt'},
   // eslint-disable-next-line no-script-url
  { id: '014', skillid:'001', title: 'Javascript: Product Search/Filter', detail: 'Search/Filter on a simple Product list using Javascript', file:'JSProductSearch.txt'},
  { id: '015', skillid:'001', title: 'IssueJ', detail: 'A task/issue manager', file:'issueJ002.txt'},
  { id: '016', skillid:'001', title: 'UIKit', detail: 'A React based UIKit', file:'UIKit002.txt'},

];


export const experience = [
  { id: '001', title: 'MSXi - Jaguar Landrover', role:'Project Manager', dates: '2017 - 2020', text: 'Project manager for the replacement of the Global Retailer Portal (GRP). Working with 3rd party suppliers and internal departments, using Agile, to deliver a cloud based global system based on Liferay. In addition, I managed a number of upgrades/fixes on the existing systems.' },
  { id: '002', title: 'TFL', dates: '2016 - 2020', role:'Trainer',text: 'Delivered training and support for station staff in the use of new mobile Applications.' },
  { id: '003', title: 'Hobbs', dates: '2014 - 2016', role:'Technical Project Manager',text: 'Managed the delivery of a number of initiatives to replace the existing Hobbs eCommerce platform, which increased revenue in the first year. Also, project managed the delivery of a complex CRM lifecycle programme improving both engagement and revenue across all CRM activity. Improved internal processes to ensure accurate delivery.' },
  { id: '004', title: 'Data Lateral', dates: '2013 - 2014',  role:'Project Manager', text: 'Delivered Single Customer View(SCV) systems for both Dominoes Pizza and Hobbs.' },
  { id: '005', title: 'dunnhumby UK', dates: '2008-2012',  role:'Project Manager', text: 'Managed a range of projects including process change (Increasing Tesco statements from four per year to six) and development (Project Workbench, a performance reporting tool), infrastructure (Embedding teams in South America).' },
  { id: '006', title: 'Transport for London (TfL)', dates: '1994-2008',  role:'Project Manager/Manager/Developer', 
                     text: "Owner of several products and manager of a team of Developers, Business Analysts and Testers to deliver a number of company wide projects." },
];

export const education = [
  { id: '001', title: 'Agile Project Management - Foundation and Practitioner', role:'', dates: '' },
  { id: '002', title: 'Managing Successful Programmes (MSP) - Foundation and Practitioner', dates: '' },
  { id: '003', title: 'Prince 2 - Foundation and Practitioner', dates: ''},
  { id: '004', title: 'MSc Information Management & Finance @Westminster University', dates: '' },
];


export const getArticle = (id) => {

  const record = articles.find(article => article.id === id);
  // console.log("getArticle: " + record.file);
  return record
}

export const getArticlesForSkill = (id) => {

  //
  // Return all of the articles associated with the skillid(id)
  //
  const articleList = articles.filter(article => article.skillid === id);
  console.log(articleList);
  return articleList

}

export const getSkill = (id) => {

  const record = skills.find(skill => skill.id === id);
  return record
}

export const getExperience = (id) => {

  const data = experience.find(item => item.id === id);
  return data
}

