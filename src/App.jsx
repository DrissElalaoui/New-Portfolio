import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import Skilles from './Skilles';
import Services from './Services';
import MyProjects from './MyProjects';
import Contact from './Contact';
import Footer from './Footer';
import NavBar from './NavBar';

// Dark Mode
import { ThemeProvider} from "next-themes";
import NavBarMobile from "./NavBarMobile";


function App() {
  return (
    <ThemeProvider attribute="class">
      <div style={{ position: 'relative', maxWidth: '100vw', overflow: 'hidden' }}>
        <NavBar />
        <HomePage />
        <AboutMe />
        <Skilles />
        <Services />
        <MyProjects />
        <Contact />
        <Footer />
        <NavBarMobile />
      </div>
    </ThemeProvider>
  );
}

export default App;

