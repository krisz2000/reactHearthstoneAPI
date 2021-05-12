import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import CardRow from "./cardRow";

export default function CardsTable(props) {
  const history = useHistory();
  const onCreate = useCallback(() => {
    history.push("/create/");
  }, [history]);

  return (
    <div>
      <button className="btn btn-primary btn-md btn-light" onClick={onCreate}>
        Create new card
      </button>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Card Id</th>
            <th scope="col">Name</th>
            <th scope="col">Cost</th>
            <th scope="col">Type</th>
            <th scope="col">Attack</th>
            <th scope="col">Health</th>
            <th scope="col">Durability</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.cards.map((c) => (
            <CardRow key={c.cardId} card={c} onDelete={props.onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
