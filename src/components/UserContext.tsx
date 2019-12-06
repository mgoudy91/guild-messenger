import React from "react";
import { MessengerContainer } from "./MessengerContainer";

type Props = {};
type State = {};

export class UserContext extends React.Component<Props, State> {
    render() {
        return (
            <div className='userContext'>
                <div>A user</div>
                <MessengerContainer />
            </div>
        );
    }
}