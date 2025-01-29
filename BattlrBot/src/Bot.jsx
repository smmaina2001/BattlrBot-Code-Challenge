import React, { useState } from "react";

function Bot({
  id,
  avatar_url,
  name,
  health,
  damage,
  armor,
  bot_class,
  catchphrase,
  created_at,
  updated_at,
  addToArmy,
  inArmy,
  setInArmy,
}) {
  //Delete a bot from the Database (db.json)
  function dischargeBot(event) {
    //Filter Array of Your Army to remove deleted bot 
    if (confirm(`Do you want to Remove Bot ${id} from the collection?`)) {
      const withoutBot = inArmy.filter((x) => x.id !== id);
      setInArmy(withoutBot);
    fetch(`https://bot-battlr-backend.onrender.com/bots/${id}`, {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    });
      alert("Bot Removed from the Database");
    }
  }
  //Bot is Added to Army via a callback function from BotCollection

  return (
    <tr>
      <td>
        <img src={avatar_url} alt={name} width={90} height={90} />
      </td>
      <td>{name}</td>
      <td>{health}</td>
      <td>{damage}</td>
      <td>{armor}</td>
      <td>{bot_class}</td>
      <td>{catchphrase}</td>
      <td>{created_at}</td>
      <td>{updated_at}</td>
      <td>
        <button
          style={{ color: "white", backgroundColor: "blue" }}
          value={id}
          onClick={addToArmy}
        >
          Add
        </button>
      </td>
      <td>
        <button
          style={{ color: "white", backgroundColor: "red" }}
          value={id}
          onClick={dischargeBot}
        >
          X
        </button>
      </td>
    </tr>
  );
}
export default Bot;