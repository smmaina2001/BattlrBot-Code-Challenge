import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Soldiers from "./Soldiers";

function YourBotArmy({ inArmy, setInArmy }) {
  //Discharge bot from YourBotArmy Array
  function dischargeBot(event) {
    const dischargeId = Number(event.target.value);
    const withoutBot = inArmy.filter((x) => x.id !== dischargeId);
    if (confirm(`Remove Bot ${dischargeId} from Your Army?`)) {
      setInArmy(withoutBot);
       alert("Bot Removed from Your Army");
    }

  }
  return (
    <>
      <h1>Your Bot Army</h1>
      <table>
        <thead>
          <tr className="light">
            <th>Avatar</th>
            <th>Name</th>
            <th>Health</th>
            <th>Damage</th>
            <th>Armor</th>
            <th>Bot Class</th>
            <th>Catchphrase</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Discharge</th>
          </tr>
        </thead>
        <tbody>
          {inArmy.map((bot) => {
            return (
              <Soldiers
                key={bot.id}
                id={bot.id}
                avatar_url={bot.avatar_url}
                name={bot.name}
                health={bot.health}
                damage={bot.damage}
                armor={bot.armor}
                bot_class={bot.bot_class}
                catchphrase={bot.catchphrase}
                created_at={bot.created_at}
                updated_at={bot.updated_at}
                dischargeBot={dischargeBot}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default YourBotArmy;