import { useState } from "react";
import "./App.css";
import Bot from "./Bot";

function BotCollection({ bots, inArmy, setInArmy }) {
  //Add a bot to 'YourBotArmy'
  function addToArmy(ev) {
    const btnID = Number(ev.target.value);

    //Check if bot is already in the Army before adding
    const locateBot = inArmy.find((army) => {return army.id === btnID});
console.warn(locateBot);

    if (!locateBot) {
      const newArmyBot = bots.find((b) => b.id === btnID); //find the bot in the database with the same id as the one clicked
console.warn(newArmyBot);

      //Check if newArmyBot has a value
      if (newArmyBot) {
        setInArmy((bot) => [...bot, newArmyBot]); //add that bot to the army
      } else {
        alert("Bot not found in the database!");
      }
    } else {
      alert("Bot is Already in the Army");
    }
  }

  return (
    <>
      <table>
        <thead>
          <tr className="dark">
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
            <th>Add to Army</th>
          </tr>
        </thead>
        <tbody>
          {bots.map((bot) => {
            return (
              <Bot
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
                addToArmy={addToArmy}
                inArmy={inArmy}
                setInArmy={setInArmy}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BotCollection;