
import styles from './App.module.scss';
import { Provider } from "react-redux";
import {appStore} from "./appStore/appStore";
import Header from './components/Header/Header';
import Routers from './Routers/Routers';
import { BrowserRouter as Router } from "react-router-dom";
import LeftSide from "./components/LeftSide/LeftSide";

// import LeftSide from './components/LeftSide/LeftSide';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
// import BreedsPage from './pages/Breeds/BreedsPage';

function App() {
  return (<Provider store={appStore}>
    <Router>
        
        <div >
          <Header />
          <main className={styles.main}>
          <LeftSide/>
          
          <Routers />
          
          </main>
          {/* <Footer /> */}
          
        </div>
      </Router>
    </Provider>
  );
}



export default App;
