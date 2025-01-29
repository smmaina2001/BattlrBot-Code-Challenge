import React, { useState } from "react";

function Soldiers({
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
  dischargeBot,
}) {


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
export default Soldiers;