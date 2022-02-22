import { Component } from "react";

export class GroceryList extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      groceryList: [],
    };
  }
  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="What do you want to buy?"
          onChange={(e) => {
            this.onChangeEvent(e.target.value);
          }}
          value={this.userInput}
        />
      </div>
    );
  }
}
