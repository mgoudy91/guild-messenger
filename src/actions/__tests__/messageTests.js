import { sendMessage, startTyping, stopTyping } from "../messageActions";
import { START_TYPING, STOP_TYPING, SEND_MESSAGE } from "../messageActions";
import { createNewMessage } from "../../util/MessageUtil";

describe("message actions", () => {
  it("should create an action to send a message", () => {
    const expectedAction = {
      type: SEND_MESSAGE,
      message: createNewMessage("test", "Alice", "Bob")
    };
    expect(
      sendMessage({
        messageText: "test",
        recipientId: "Bob",
        senderId: "Alice"
      })
    ).toEqual(expectedAction);
  }),
    it("should create an action to start typing", () => {
      const expectedAction = {
        type: START_TYPING,
        sender: "Alice"
      };
      expect(startTyping("Alice")).toEqual(expectedAction);
    }),
    it("should create an action to stop typing", () => {
      const expectedAction = {
        type: STOP_TYPING,
        sender: "Bob"
      };
      expect(stopTyping("Bob")).toEqual(expectedAction);
    })
});
