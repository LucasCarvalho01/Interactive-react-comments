import "./App.css";
import Feed from "./Components/Feed/Feed";
import MainCard from "./Components/MainCard/MainCard.js";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <UserStorage>
      <div className="App max-w-4xl my-8 mx-4">
        <MainCard />
        <Feed />
      </div>
    </UserStorage>
  );
}

export default App;
