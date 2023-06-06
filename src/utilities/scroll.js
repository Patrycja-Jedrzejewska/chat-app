export const scrollToBottom = () => {
  if (!document.querySelector('.messages')) return
  const messagesContainer = document.querySelector('.messages')
  if (!messagesContainer) return
  const lastMessage = messagesContainer.lastElementChild
  if (!lastMessage) return
  lastMessage.scrollIntoView()
}
