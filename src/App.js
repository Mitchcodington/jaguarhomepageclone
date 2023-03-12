import styles from "./style";
import {  Footer, Navbar, Hero, Pace, Fpace, Ftype, Power, Service } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} `}>
      <div className={`${styles.boxWidth}`}>
      <Pace/>
        <Fpace />
        <Ftype />
        <Power/>
        <Service />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;