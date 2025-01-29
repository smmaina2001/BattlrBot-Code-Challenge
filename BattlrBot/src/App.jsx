import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [inArmy, setInArmy] = useState([]);
  const [page, setPage] = useState("Bots");

  //GET bots data from database
  useEffect(() => {
    fetch("https://bot-battlr-backend.onrender.com/bots")
      .then((response) => response.json())
      .then((bData) => setBots(bData))
      .catch((error) => console.error("Failed to GET BOT data" + error));
  }, [bots]);       //Re-render component when there is change in 'bots' state i.e. when a bot is deleted
  //Display message while data is being fetched
  if (!bots) return <h1>Loading ...</h1>;

  function handleChangeView() {
    page === "Bots" ? setPage("Army") : setPage("Bots");
  }
  return (
    <>
      <h1>Welcome to Bot Battlr</h1>
      <button
        style={{ color: "white", backgroundColor: "blue" }}
        onClick={handleChangeView}
      >
        {page === "Bots" ? "View Bot Army" : "View Bot Collection"}
      </button>
      <div>
        {page === "Bots" ? (
          <BotCollection bots={bots} inArmy={inArmy} setInArmy={setInArmy} />
        ) : (
          <YourBotArmy inArmy={inArmy} setInArmy={setInArmy} />
        )}
      </div>
    </>
  );
}

export default App;