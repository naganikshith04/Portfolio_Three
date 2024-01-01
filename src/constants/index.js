import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  S2C,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  TCS,
  CPP,
  carrent,
  Pre,
  threejs,
  snap,
  clt,
  svit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "System Engineer",
    company_name: "TATA Consultancy Systems ",
    icon: TCS,
    iconBg: "#383E56",
    date: "Jul. 2021 – Jul. 2022",
    points: [
      "In my role as a developer, I was responsible for the development of the projects codebase, which encompassed both backend and frontend development. This involved the use of NodeJS for the backend, and ReactJS for the frontend,as these technologies were deemed the most suitable for the projects needs.",
      "Throughout my tenure, I was able to leverage my expertise in natural language processing and NodeJS to successfully develop three standalone applications. These applications were an integral part of the project’s success, providing key functionalities that were crucial to achieving the project’s objectives",
    ],
  },
  {
    title: "Full Stack Developer ",
    company_name: "CPP SECRETS",
    icon: CPP,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Oct 2019",
    points: [
      "During my 2-month tenure, I was responsible for developing multiple small features for the website, which included designing and implementing a quiz application, structuring the website to enhance its usability and functionality,and integrating all features into the website seamlessly",
      "In developing the quiz application, I leveraged my expertise in frontend development and database management to create a user- friendly and engaging experience for the website’s users. I also worked diligently to structure the website in a way that was intuitive and easy to navigate, allowing users to find what they need quickly and easily",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "University of North Carolina at Charlotte",
    name: "",
    designation: "Master's degree",
    company: "Computer Science",
    image: clt,
  },
  {
    testimonial:
      "Swami Vivekananda Institute of Technology",
    name: "",
    designation: "Bachelor's",
    company: "Information Technology",
    image: svit,
  },
];

const projects = [
  {
    name: "Snapgram - a insta clone",
    description:
      "Snapgram is a feature-rich Instagram clone application developed to showcase proficiency in modern web development technologies. Leveraging cutting-edge tools and frameworks, the project offers a comprehensive set of functionalities akin to the popular social media platform, Instagram.Developed an Instagram clone web application with features including feed, posts, likes, comments, user profiles, follows, etc.",
    tags: [
      {
        name: "React - Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
    ],
    image: snap,
    source_code_link: "https://snapgram-lovat.vercel.app/",
  },
  {
    name: "Converting hand drawn wireframes to HTML code",
    description:
      "In this project, I utilized deep learning techniques to convert hand-drawn wireframes to HTML code. To accomplish this, I first created a dataset for training and testing purposes. I then used LSTM and CNN algorithms to develop models that could accurately recognize the various elements of the wireframes and convert them into HTML code. By leveraging my expertise in deep learning and web development, I was able to successfully deliver a solution that streamlined the wireframing process and enabled designers to create and modify web pages more efficiently.",
    tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: S2C,
    source_code_link: "https://github.com/",
  },
  {
    name: "Smart Attendance USING FACE RECOGNITION",
    description:
      "The objective of this project was to develop a smart attendance system using face recognition technology. The system would be able to identify students in a classroom setting and automatically record their attendance. The project was developed using Python3 and the OpenCV library. Python3 is a general-purpose programming language that is well- suited for machine learning applications. OpenCV is a library of computer vision algorithms that can be used to process images and videos.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: Pre,
    source_code_link: "https://github.com/naganikshith04/face_rec",
  },
];

export { services, technologies, experiences, testimonials, projects };
