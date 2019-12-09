export const SEND_MESSAGE = "SEND_MESSAGE";
export const START_TYPING = "START_TYPING";
export const STOP_TYPING = "STOP_TYPING";


export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message
});

export const startTyping = (sender) => ({
  type: START_TYPING,
  sender
});

export const stopTyping = (sender) => ({
  type: STOP_TYPING,
  sender
});