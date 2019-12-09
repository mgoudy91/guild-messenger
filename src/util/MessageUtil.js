export function createNewMessage(text, senderId, recipientId){
    return {
        messageText: text,
        timeSent: Date.now(),
        senderId,
        recipientId
    };
}