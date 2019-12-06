import React from "react";
import { MessageList } from "./MessageList";


type Props = {};
type State = {};

export class MessengerContainer extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <div>Message Container</div>
                <MessageList/>
            </div>
        );
    }
}