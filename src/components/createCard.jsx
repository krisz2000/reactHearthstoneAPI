import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CreateCard(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [type, setType] = useState("Spell");
  const [attack, setAttack] = useState("");
  const [health, setHealth] = useState("");
  const [durability, setDurability] = useState("");
  const history = useHistory();

  const handleCreate = (event) => {
    event.preventDefault();
    let card = null;
    if (type === "Minion") {
      card = {
        cardId: id,
        name: name,
        cost: cost,
        type: type,
        attack: attack,
        health: health,
      };
    } else if (type === "Weapon") {
      card = {
        cardId: id,
        name: name,
        cost: cost,
        type: type,
        attack: attack,
        durability: durability,
      };
    } else {
      card = { cardId: id, name: name, cost: cost, type: type };
    }

    if (props.onCreate(card)) {
      history.push("/list/");
    } else {
      alert("Card id already in use");
    }
  };
  const renderAdditionalInputFields = () => {
    if (type === "Minion") {
      return (
        <React.Fragment>
          <div className="form-group">
            <label for="cardAttack">Attack</label>
            <input
              type="number"
              className="form-control"
              id="cardAttack"
              placeholder="Enter minion attack"
              min="0"
              max="30"
              onChange={handleAttackChange}
              required="required"
              value={attack}
            />
          </div>
          <div className="form-group">
            <label for="cardHealth">Health</label>
            <input
              type="number"
              className="form-control"
              id="cardHealth"
              placeholder="Enter minion health"
              min="0"
              max="30"
              onChange={handleHealthChange}
              required="required"
              value={health}
            />
          </div>
        </React.Fragment>
      );
    } else if (type === "Weapon") {
      return (
        <React.Fragment>
          <div className="form-group">
            <label for="cardAttack">Attack</label>
            <input
              type="number"
              className="form-control"
              id="cardAttack"
              placeholder="Enter weapon attack"
              min="0"
              max="30"
              onChange={handleAttackChange}
              required="required"
              value={attack}
            />
          </div>
          <div className="form-group">
            <label for="cardHealth">Durability</label>
            <input
              type="number"
              className="form-control"
              id="cardHealth"
              placeholder="Enter weapon durability"
              min="0"
              max="30"
              onChange={handleDurabilityChange}
              required="required"
              value={durability}
            />
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  };
  const handleIdChange = (event) => {
    setId(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCostChange = (event) => {
    if (event.target.value <= 10 && event.target.value >= 0) {
      setCost(event.target.value);
    } else {
      setCost("");
    }
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
    if (event.target.value === "Minion") {
      setDurability("");
    } else if (event.target.value === "Weapon") {
      setHealth("");
    } else {
      setHealth("");
      setDurability("");
      setAttack("");
    }
  };
  const handleAttackChange = (event) => {
    if (event.target.value <= 30 && event.target.value >= 0) {
      setAttack(event.target.value);
    } else {
      setAttack("");
    }
  };
  const handleHealthChange = (event) => {
    if (event.target.value <= 30 && event.target.value >= 0) {
      setHealth(event.target.value);
    } else {
      setHealth("");
    }
  };
  const handleDurabilityChange = (event) => {
    if (event.target.value <= 30 && event.target.value >= 0) {
      setDurability(event.target.value);
    } else {
      setDurability("");
    }
  };
  return (
    <div className="row h-100 justify-content-center align-items-center">
      <div class="col-lg-3">
        <form onSubmit={handleCreate}>
          <div className="form-group">
            <label for="cardId">Id</label>
            <input
              type="text"
              className="form-control"
              id="cardId"
              placeholder="Enter card id"
              onChange={handleIdChange}
              required="required"
              value={id}
            />
          </div>
          <div className="form-group">
            <label for="cardName">Name</label>
            <input
              type="text"
              className="form-control"
              id="cardName"
              placeholder="Enter card name"
              onChange={handleNameChange}
              required="required"
              value={name}
            />
          </div>
          <div className="form-group">
            <label for="cardCost">Cost</label>
            <input
              type="number"
              className="form-control"
              id="cardCost"
              placeholder="Enter card cost"
              min="0"
              max="10"
              onChange={handleCostChange}
              value={cost}
            />
          </div>
          <div className="form-group">
            <label for="cardType">Type</label>
            <select
              type="text"
              className="form-control"
              id="cardType"
              onChange={handleTypeChange}
              value={type}
            >
              <option value="Spell">Spell</option>
              <option value="Minion">Minion</option>
              <option value="Weapon">Weapon</option>
            </select>
          </div>
          {renderAdditionalInputFields()}
          <button type="submit" className="btn btn-primary btn-lg btn-light">
            Create card
          </button>
        </form>
      </div>
    </div>
  );
}
