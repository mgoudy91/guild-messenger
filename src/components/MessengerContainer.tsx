import React from "react";
import { connect } from "react-redux";
import MessageList from "./MessageList";
import { Message } from "./Message";
import { Input } from "@material-ui/core";
import {
  sendMessage,
  startTyping,
  stopTyping
} from "../actions/messageActions";
import { createNewMessage } from "../util/MessageUtil";

type Props = {
  sendMessage: Function;
  startTyping: Function;
  stopTyping: Function;
  userName: string;
  target: string;
  presence: any;
};
type State = { messageText: string };

class MessengerContainer extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      messageText: ""
    };
  }

  onInputChange = (e: any) => {
    const { presence, userName, startTyping, stopTyping } = this.props;

    this.setState({ messageText: e.target.value });

    // Not quite correct. As coded it will wait 1 second after first keystroke, instead of
    // the last. This would need a smarter timing system.
    if (!presence[userName].isTyping) {
      setTimeout(() => {
        stopTyping(userName);
      }, 1000);
    }

    startTyping(userName);
  };

  handleSubmit = (e: any) => {
    const { userName, target, sendMessage } = this.props;

    e.preventDefault();
    const newMessage = createNewMessage(
      this.state.messageText,
      userName,
      target
    );
    sendMessage(newMessage);
    this.setState({ messageText: "" });
  };

  isTargetTyping = () => {
    const { presence, target } = this.props;
    return presence[target] && presence[target].isTyping;
  };

  render() {
    return (
      <div>
        <span>
          Hello, {this.props.userName}! Send a message to {this.props.target}
        </span>
        <MessageList userName={this.props.userName} />
        {this.isTargetTyping() ? (
          <Message
            senderId={this.props.target}
            recipientId={this.props.userName}
            isSelf={false}
            messageText={"Typing..."}
          />
        ) : null}

        <form onSubmit={this.handleSubmit}>
          <Input
            placeholder="Send a message..."
            value={this.state.messageText}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    presence: state.messageReducer.presence
  };
}

const mapDispatchToProps = {
  sendMessage,
  startTyping,
  stopTyping
};

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
