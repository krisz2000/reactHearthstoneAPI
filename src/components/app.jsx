import React, { Component } from "react";
import axios from "axios";
import Card from "./card";
import Login from "./login";
import PrivateRoute from "./privateRoute";
import CardsTable from "./cardsTable";
import CreateCard from "./createCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {
  state = {
    isAuthenticated: false,
  };

  constructor() {
    super();
    this.handleLogin.bind(this);
    this.handleCreate.bind(this);
    this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (this.state.cards !== null) {
      this.fetchData().then((data) => {
        this.setState({ cards: data.data });
      });
    }
  }

  fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Forged%20in%20the%20Barrens",
      params: { collectible: "1" },
      headers: {
        "x-rapidapi-key": "44be04a9fdmsha8f954d5269b088p1b5ea7jsn26ee55368d30",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  getFirstCard = () => {
    if (this.state.cards !== undefined) {
      return this.state.cards[0];
    } else {
      return "No cards";
    }
  };

  handleLogin = () => {
    this.setState({ isAuthenticated: true });
  };

  handleCreate = (card) => {
    if (this.state.cards.filter((c) => c.cardId === card.cardId).length > 0) {
      return false;
    }
    const cards = [card, ...this.state.cards];
    this.setState({ cards });
    return true;
  };

  handleDelete = (cardId) => {
    const cards = this.state.cards.filter((card) => card.cardId !== cardId);
    this.setState({ cards });
  };
  handleUpdtate = (id, card) => {
    if (
      id !== card.cardId &&
      this.state.cards.filter((c) => c.cardId === card.cardId).length > 0
    ) {
      return false;
    }
    const cards = [...this.state.cards];
    const originalCardIndex = cards.findIndex((c) => c.cardId === id);
    cards[originalCardIndex] = { ...cards[originalCardIndex], ...card };
    this.setState({ cards });
    return true;
  };

  render() {
    if (this.state.cards === undefined || this.state.cards === null) {
      return <p>Waiting for API response</p>;
    }
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route
            exact
            path="/login"
            render={() => <Login onLogin={this.handleLogin} />}
          />

          <PrivateRoute
            exact
            path="/list"
            isAuthenticated={this.state.isAuthenticated}
            render={() => {
              return (
                <CardsTable
                  cards={this.state.cards}
                  onDelete={this.handleDelete}
                />
              );
            }}
          />

          <PrivateRoute
            path="/create"
            isAuthenticated={this.state.isAuthenticated}
            render={(props) => {
              return <CreateCard onCreate={this.handleCreate} />;
            }}
          />

          <PrivateRoute
            exact
            path="/cards/:cardId"
            isAuthenticated={this.state.isAuthenticated}
            render={(props) => {
              return (
                <Card
                  card={
                    this.state.cards.filter(
                      (c) => c.cardId === props.match.params.cardId
                    )[0]
                  }
                  onUpdate={this.handleUpdtate}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
