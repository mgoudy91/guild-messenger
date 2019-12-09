import React from "react";
import MessengerContainer from "./MessengerContainer";

type Props = { userName: string, target:string };
type State = {};

export class UserContext extends React.Component<Props, State> {
  render() {
    return (
      <div className="userContext">
        <MessengerContainer userName={this.props.userName} target={this.props.target} />
      </div>
    );
  }
}
