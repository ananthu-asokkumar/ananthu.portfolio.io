import css1 from '../img/portImages/cv_css.png';
import css2 from '../img/portImages/ms.png';
import react1 from '../img/portImages/react_styled.png';
import img2 from '../img/portImages/maya-4.jpg';
import img3 from '../img/portImages/maya-3.jpg';
import onn from '../img/portImages/onnBikes.PNG';
import onn1 from '../img/portImages/onnBikes1.PNG'
import ixigo from '../img/portImages/ixigo.PNG';
import quora from '../img/portImages/quora.PNG'
import html5 from "../img/skills/html5.png";
import css3 from "../img/skills/css3.png";
import nodejs from "../img/skills/nodejs.png";
import node from "../img/skills/node.jpg";
import javascript from "../img/skills/javascript.png";
import materialui from "../img/skills/materialui.png";
import react from "../img/skills/react.png";
import redux from "../img/skills/redux.png";
import mongodb from "../img/skills/mongodb.png";

import {
  IconName,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiNodejsSmall,
  DiMongodb,
  DiReact,
} from "react-icons/di";

import { SiRedux, SiGit } from "react-icons/si";

const html1 = <DiHtml5 />;
const css = <DiCss3 />;
const javascript1 = <DiJavascript />;
const node1 = <DiNodejsSmall />;
const mongo1 = <DiMongodb />;
const react11 = <DiReact />;
const redux1=<SiRedux/>

const Projects = [
  {
    id: 1,
    category: "CSS js html",
    image: onn1,
    link1: "https://github.com/shivam-singh-au17/project_oonbikes",
    link2: "https://onnbikes.herokuapp.com/home",
    title: "onnbikes.com clone",
    text: " Clone of  a web application which rent two-wheelers on a monthly and daily basis. Implemented fitering funtionality on bookings page and checkout system.",
    techStack: [html1, css, javascript1],
  },
  {
    id: 2,
    category: "React mongodb",
    image: ixigo,
    link1: "https://github.com/ananthu-asokkumar/ixigo-thugs",
    link2: "https://ixigo-frondend.vercel.app/",
    title: "ixigo.com clone",
    text: "Clone of an Indian online travel portal, ixigo. Implemented flights page where all the details of the flighs are displayed and added filters and implemented flights booking. ",
    techStack: [css, react11, redux1, mongo1],
  },
  {
    id: 3,
    category: "React mongodb firebase",
    image: quora,
    link1: "https://github.com/santoshmcode/quora-clone",
    link2: "https://quora-app.netlify.app/",
    title: "quora.com clone",
    text: "Clone of website quora.com which is a place to gain and share knowledge. Implemented questions answer pages where user can ask or post answers and implemented search functionality for particular questions",
    techStack: [css, react11, redux1, mongo1],
  },
];

export default Projects;