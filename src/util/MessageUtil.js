export function createNewMessage(text, senderId, recipientId){
    return {
        messageText: text,
        senderId,
        recipientId
    };
}