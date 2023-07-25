export const scrollToBottom = () => {
  if (!document.querySelector('.messages')) return

  const messagesContainer = document.querySelector('.messages')
  if (!messagesContainer) return

  const images = Array.from(messagesContainer.getElementsByTagName('img'))
  if (!images.length) {
    scrollToBottomFunc()
    return
  }

  Promise.all(images.map(img => {
    if (img.complete) return Promise.resolve()
    return new Promise((resolve, reject) => {
      img.onload = resolve
      img.onerror = reject
    })
  }))
  .then(() => scrollToBottomFunc())
  .catch(err => console.error('Problem loading an image:', err))

  const scrollToBottomFunc = () => {
    const lastMessage = messagesContainer.lastElementChild
    if (!lastMessage) return
    lastMessage.scrollIntoView()
  }
}
