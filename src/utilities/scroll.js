export const scrollToBottom = () => {
    const messagesContainer = document.querySelector('.messages');
    const lastMessage = messagesContainer.lastElementChild;
    if (lastMessage) {
      lastMessage.scrollIntoView();
    }
};