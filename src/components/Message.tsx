import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

type Props = {
  messageText: string;
  senderId: string;
  recipientId: string;
  isSelf: boolean;
};
type State = {};

export class Message extends React.Component<Props, State> {
  render() {
    const { senderId, messageText, isSelf } = this.props;
    return (
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                align="right"
                color={isSelf ? "primary" : "secondary"}
              >
                {senderId + ": "}
              </Typography>
              {messageText}
            </React.Fragment>
          }
        />
      </ListItem>
    );
  }
}
