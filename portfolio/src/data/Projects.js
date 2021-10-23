import css1 from '../img/portImages/cv_css.png';
import css2 from '../img/portImages/ms.png';
import react1 from '../img/portImages/react_styled.png';
import img2 from '../img/portImages/maya-4.jpg';
import img3 from '../img/portImages/maya-3.jpg';
import onn from '../img/portImages/onnBikes.PNG';
import onn1 from '../img/portImages/onnBikes1.PNG'
import ixigo from '../img/portImages/ixigo.PNG';
import html5 from "../img/skills/html5.png";
import css3 from "../img/skills/css3.png";
import nodejs from "../img/skills/nodejs.png";
import node from "../img/skills/node.jpg";
import javascript from "../img/skills/javascript.png";
import materialui from "../img/skills/materialui.png";
import react from "../img/skills/react.png";
import redux from "../img/skills/redux.png";
import mongodb from "../img/skills/mongodb.png";
const Projects = [
  {
    id: 1,
    category: "CSS js html",
    image: onn1,
    link1: "https://github.com/shivam-singh-au17/project_oonbikes",
    link2: "https://onnbikes.herokuapp.com/home",
    title: "onnbikes.com clone",
    text: "A collaborative project where our goal was to clone the website onnbikes.com.Implemented OTP authentication,fitering funtionality based on bookings page and checkout system.",
    techStack: [html5, css3, javascript],
  },
  {
    id: 2,
    category: "React mongodb",
    image: ixigo,
    link1: "https://github.com/ananthu-asokkumar/ixigo-clone",
    link2: "https://www.google.com",
    title: "ixigo.com clone",
    text: "Clone of an Indian online travel portal,ixigo.Implemented flights page where all the details of the flighs are displayed and user will be able to filter the flights based on airlines. ",
    techStack: [css3, react, mongodb, materialui, node],
  },
];

export default Projects;