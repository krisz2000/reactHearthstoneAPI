import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

export default function CardRow(props) {
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/cards/" + props.card.cardId),
    [history, props]
  );

  return (
    <tr>
      <th className="clickable" scope="row" onClick={handleOnClick}>
        {props.card.cardId}
      </th>
      <td className="clickable" onClick={handleOnClick}>
        {props.card.name}
      </td>
      <td className="clickable" onClick={handleOnClick}>
        {props.card.cost}
      </td>
      <td className="clickable" onClick={handleOnClick}>
        {props.card.type}
      </td>
      <td className="clickable" onClick={handleOnClick}>
        {props.card.attack}
      </td>
      <td className="clickable" onClick={handleOnClick}>
        {props.card.health}
      </td>
      <td className="clickable" onClick={handleOnClick}>
        {props.card.durability}
      </td>
      <td>
        <button
          className="btn btn-md btn-danger"
          onClick={() => {
            props.onDelete(props.card.cardId);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
