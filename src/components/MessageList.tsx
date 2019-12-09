import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";

import { Message } from "./Message";

type Props = { messages: any[]; userName: string };
type State = {};

class MessageList extends React.Component<Props, State> {
  render() {
    const messages = this.props.messages;
    return (
      <List>
        {messages
          ? messages.map(message => {
              return (
                <Message
                  senderId={message.senderId}
                  recipientId={message.recipientId}
                  isSelf={message.recipientId !== this.props.userName}
                  messageText={message.messageText}
                />
              );
            })
          : null}
      </List>
    );
  }
}

function mapStateToProps(state: any) {
  return { messages: state.messageReducer.messages };
}

export default connect(mapStateToProps)(MessageList);
