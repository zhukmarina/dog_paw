
import styles from './App.module.scss';
import { Provider } from "react-redux";
import {appStore} from "./appStore/appStore";
import Header from './components/Header/Header';
import Routers from './Routers/Routers';
import { BrowserRouter as Router } from "react-router-dom";
import LeftSide from "./components/LeftSide/LeftSide";
import { UserAuthContextProvider } from "../src/context/UserAuthContext"



function App() {
  return (<Provider store={appStore}>
    <Router>
      <UserAuthContextProvider>
        
        <div className={styles.app}>
        
          <Header />
          <main className={styles.main}>
          <div className={styles.leftSide}>
            
          
          <LeftSide/>
          </div>
          <div className={styles.rightSide}>
          
          <Routers />
          
          </div>
          </main>
        
        </div>
        </UserAuthContextProvider>
      </Router>
    </Provider>
  );
}



export default App;
