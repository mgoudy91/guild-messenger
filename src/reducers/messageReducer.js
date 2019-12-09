// Grab any messages in local storage
const initialState = {
  messages: JSON.parse(localStorage.getItem('messageLog')) || [],
  presence: {
    Alice: { isTyping: false },
    Bob: { isTyping: false }
  }
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE": {
      let newPresence = Object.assign({}, state.presence);
      newPresence[action.message.senderId].isTyping = false;

      // I believe this is what you would call a redux side-effect, and
      // is not great form :(. In an actual messaging client, I believe I would want
      // to use an API backend for all data validation, and sockets to handle the faster-updating nature
      // of a messaging application
      localStorage.setItem('messageLog', JSON.stringify(state.messages.concat([action.message])) );

      return {
        ...state,
        messages: state.messages.concat([action.message]),
        presence: newPresence
      };
    }
    case "START_TYPING": {
      let newPresence = Object.assign({}, state.presence);
      newPresence[action.sender].isTyping = true;
      return {
        ...state,
        presence: newPresence
      };
    }
    case "STOP_TYPING": {
      let newPresence = Object.assign({}, state.presence);
      newPresence[action.sender].isTyping = false;
      return {
        ...state,
        presence: newPresence
      };
    }
    default:
      return state;
  }
};

export default messages;
