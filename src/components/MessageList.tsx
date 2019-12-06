import React from "react";
import { Message } from "./Message";

type Props = {};
type State = {};

export class MessageList extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <div>Here's a list of Messages</div>
                <Message/>
                <Message/>
                <Message/>
            </div>
        );
    }
}