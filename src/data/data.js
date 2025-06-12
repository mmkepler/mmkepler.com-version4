import puplanta from "../assets/projects/corgi4.webp";
import weather2 from "../assets/projects/weather3.png";
import zap from "../assets/projects/zap.jpg";
import simon from "../assets/projects/simon.jpg";
import tictactoe from "../assets/projects/tictactoe.jpg";
import sickFits from "../assets/sick-fits.png";
import exercise from "../assets/projects/exercise.webp";
import abstract from "../assets/projects/image-ab.webp";
import pomodoro from "../assets/projects/pomo.jpg";
import mmkepler from "../assets/projects_logo.webp";
import shortener from "../assets/projects/shortener.jpg";
import tetris from "../assets/projects/tetris.jpg";
import header from "../assets/projects/header.jpg";
import timestamp from "../assets/projects/timestamp.jpg";
import calc from "../assets/projects/calc.jpg";
import metadata from "../assets/projects/metadata.jpg";
import wiki from "../assets/projects/wiki.jpg";

const projectData = [
{id: 1,
name: "Puplanta",
image: puplanta,
altText: "The state of Georgia colored orange, with a corgi head, a heart and a corgi butt on it",
text: "Dog Park and Shop voting app",
gitLink: "https://github.com/mmkepler/puplanta2",
webLink: "https://puplanta.com/"
},
{id: 2,
  name: "Weather App",
  image: weather2,
  altText: "The forecast for Bartow County Georgia, on a teal card, from 8/8/19",
  text: "Your current locations weather forecast",
  gitLink: "https://github.com/mmkepler/open-weather-sass-redo",
  webLink: "https://warm-cliffs-12741.herokuapp.com/"
  },
{id: 3,
name: "Tic Tac Toe",
image: tictactoe,
altText: "A game of tic tac toe",
text: "Tic Tac Toe & webgl effects",
gitLink: "https://github.com/mmkepler/fcc-tictactoe",
webLink: "https://mmkepler.github.io/fcc-tictactoe/"
}, 
{id: 4,
name: "Simon",
image: simon,
altText: "An interface made to look like the Simon matching game, with 4 buttons of different colors around the outside.",
text: "A fun matching game",
gitLink: "https://github.com/mmkepler/fcc-simon",
webLink: "https://mmkepler.github.io/fcc-simon/"
},
{id: 5,
  name: "Zapier 'Zap'",
  image: zap,
  altText: "Zapier's logo in red text",
  text: "Zapier's API sends form data to a google doc",
  gitLink: "https://github.com/mmkepler/Email-to-GoogleSheets-Zap",
  webLink: "https://brave-curie-83cf49.netlify.app/"
  },
  {id: 6,
  name: "Sick-Fits",
  image: sickFits,
  altText: "The Sick-Fits Logo, white letters on a red background",
  text: "Wes Bos' course, an ecommerce site",
  gitLink: "https://github.com/mmkepler/sick-fits-frontend",
  webLink: "https://www.sick-fits.com"
  },
  {id: 7,
  name: "Tetris",
  image: tetris,
  altText: "A screen shot of a tetris gameboard with a space background",
  text: "A React version of Tetris",
  gitLink: "https://github.com/mmkepler/FCC-React-Tetris",
  webLink: "https://mmkepler.github.io/FCC-React-Tetris/"
  },
{id: 8,
name: "mmkepler.com",
image: mmkepler,
altText: "The logo for this website: Melissa Kepler, Full Stack Developer in front of a small moon orbiting a planet",
text: "The code for this site",
gitLink: "https://github.com/mmkepler/mmkepler.com",
webLink: "none"
},
{id: 9,
name: "URL Shortener",
image: shortener,
altText: "A screenshot of the instructios for using the URL shortener",
text: "Shorten Urls",
gitLink: "https://github.com/mmkepler/fcc-url-shortener",
webLink: "https://momentous-trick.glitch.me/"
},
{id: 10,
name: "Exercise Tracker",
image: exercise,
altText: "A screenshot of a form for creating exercises in the exercise tracker",
text: "Create users and enter exercises",
gitLink: "https://github.com/mmkepler/boilerplate-project-exercisetracker",
webLink: "https://fcc-exercise-app.herokuapp.com/"
},
{id: 11,
name: "Image Search",
image: abstract,
altText: "A screenshot of instructions for using the image search",
text: "Google API image search",
gitLink: "https://github.com/mmkepler/fcc-imageSearch",
webLink: "https://corgi.glitch.me/"
},
{id: 12,
name: "Kartoffel",
image: pomodoro,
text: "A potato version of a pomodor timer",
altText: "A cartoon potato with a timer display inside of it",
gitLink: "https://github.com/mmkepler/fcc-pomodoro",
webLink: "https://mmkepler.github.io/fcc-pomodoro/"
},
{id: 13,
  name: "Wikipedia Viewer",
  image: wiki,
  text: "Wikipedia API project",
  altText: "A screenshot with instructions for using the Wikipedia viewer",
  gitLink: "https://github.com/mmkepler/fcc-wikipedia-viewer",
  webLink: "https://mmkepler.github.io/fcc-wikipedia-viewer/"
  },
{id: 14,
  name: "Header Parser",
  image: header,
  altText: "A screenshot of instructions on how to use the header parser microservice",
  text: "Returns your header information",
  gitLink: "https://github.com/mmkepler/fcc-request-header-parser",
  webLink: "https://header-parser-mmk.herokuapp.com/"
  },
  {id: 15,
  name: "Time Stamp",
  image: timestamp,
  altText: "A screenshot of instructions on how to use the time stamp microservice",
  text: "If a date is input, a unix time stamp is returned",
  gitLink: "https://github.com/mmkepler/fcc-timestamp",
  webLink: "https://timestamp-mmk.herokuapp.com/"
  },
  {id: 16,
  name: "Calculator",
  image: calc,
  altText: "An interface created to look like an oldschool solar hand-held calculator",
  text: "A handheld calculator",
  gitLink: "https://github.com/mmkepler/fcc-calculator",
  webLink: "https://mmkepler.github.io/fcc-calculator/"
  },
  {id: 17,
  name: "Meta Data",
  image: metadata,
  altText: "A screenshot of instructions on how to use the meta data microservice",
  text: "Reads submitted file's size",
  gitLink: "https://github.com/mmkepler/file-metadata",
  webLink: "https://kepler.glitch.me/"
  }
];

export default projectData;