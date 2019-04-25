import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ScoreBoard from "./components/Scoreboard"; // Added my navbar component
import friends from "./friends.json";  // I left this friends, I know. I'll switch this eventually.

class App extends Component {
  // Setting this.state.friends to the friends json array(I know, gotta change, )
  state = {
    friends
    // I think I need to add the things such as score, top score, etc, here?
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  // Obviously have to change this
  render() {
    return (
      <Wrapper>
        <Title>Star Wars Clicky Game!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend} // Needs to be removed/changed to randomizing function
            id={friend.id}
            key={friend.id}
            name={friend.name} // Legacy from imported code
            image={friend.image}
            occupation={friend.occupation} // Legacy from imported code
            location={friend.location} // Legacy from imported code
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
