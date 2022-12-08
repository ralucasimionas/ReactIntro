import "./App.css";
import "./styles.css";
import { Navigation, ExtraCmp } from "./Components/Navigation.jsx";
import UserClass from "./Components/UserClass";
import User from "./Components/User";
import FootballClub from "./Components/FootballClub";
function App() {
  return (
    <div className="App">
      <Navigation />
      <FootballClub name={"PSG"} country={"Franta"} />
      <UserClass
        nume={"XAA-23"}
        varsta={29}
        gender="alien baby of E. Musk"
        address="On the moon"
      />
      <User nume="Vasile" varsta={20} gender="baiat" address="Bucuresti" />
      <User nume="Ana" varsta={23} gender="fata" address="Oradea" />
      <User
        nume="Ion"
        varsta={99}
        gender={"masculin"}
        // adresa={{ strada: "principala", oras: "mare" }}
        address="Cluj-Napoca"
        callback={() => {
          console.log("Salut din callback!");
        }}
      />
    </div>
  );
}

export default App;
