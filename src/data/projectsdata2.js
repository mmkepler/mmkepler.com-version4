import weather2 from "../assets/projects/weather3.png";
import sickFits from "../assets/sick-fits.png";
import exercise from "../assets/projects/exercise.webp";
import abstract from "../assets/projects/image-ab.webp";
import shortener from "../assets/projects/shortener.jpg";
import header from "../assets/projects/header.jpg";
import timestamp from "../assets/projects/timestamp.jpg";
import metadata from "../assets/projects/metadata.jpg";


const projectsData2 = [
{id: 2,
  name: "Weather App",
  image: weather2,
  altText: "The forecast for Bartow County Georgia, on a teal card, from 8/8/19",
  text: "Your current locations weather forecast",
  gitLink: "https://github.com/mmkepler/open-weather-sass-redo",
  },
  {id: 6,
  name: "Sick-Fits",
  image: sickFits,
  altText: "The Sick-Fits Logo, white letters on a red background",
  text: "Wes Bos' course, an ecommerce site",
  gitLink: "https://github.com/mmkepler/sick-fits-frontend",
  },
{id: 9,
name: "URL Shortener",
image: shortener,
altText: "A screenshot of the instructios for using the URL shortener",
text: "Shorten Urls",
gitLink: "https://github.com/mmkepler/fcc-url-shortener",
},
{id: 10,
name: "Exercise Tracker",
image: exercise,
altText: "A screenshot of a form for creating exercises in the exercise tracker",
text: "Create users and enter exercises",
gitLink: "https://github.com/mmkepler/boilerplate-project-exercisetracker",
},
{id: 11,
name: "Image Search",
image: abstract,
altText: "A screenshot of instructions for using the image search",
text: "Google API image search",
gitLink: "https://github.com/mmkepler/fcc-imageSearch",
},
{id: 14,
  name: "Header Parser",
  image: header,
  altText: "A screenshot of instructions on how to use the header parser microservice",
  text: "Returns your header information",
  gitLink: "https://github.com/mmkepler/fcc-request-header-parser",
  },
  {id: 15,
  name: "Time Stamp",
  image: timestamp,
  altText: "A screenshot of instructions on how to use the time stamp microservice",
  text: "If a date is input, a unix time stamp is returned",
  gitLink: "https://github.com/mmkepler/fcc-timestamp",
  },
  {id: 17,
  name: "Meta Data",
  image: metadata,
  altText: "A screenshot of instructions on how to use the meta data microservice",
  text: "Reads submitted file's size",
  gitLink: "https://github.com/mmkepler/file-metadata",
  }
];

export default projectsData2;