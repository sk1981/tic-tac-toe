const messageOverlayElement = document.getElementsByClassName('message-overlay')[0];
const messageElement = document.querySelectorAll('.message-overlay .message-text')[0];
const MESSAGE_VISIBLE_CLASS = 'message-overlay--visible';
const parentElement = messageOverlayElement.parentElement;

export default {
  display(message) {
    const parentRect = parentElement.getBoundingClientRect();
    const {height, width} = parentRect;
    messageOverlayElement.classList.add(MESSAGE_VISIBLE_CLASS);
    messageOverlayElement.setAttribute('style', `width: ${width}px; height: ${height}px`);
    messageElement.textContent = message;
  },

  hide() {
    messageOverlayElement.classList.remove(MESSAGE_VISIBLE_CLASS);
    messageOverlayElement.setAttribute('style', '');

    messageElement.textContent = '';
  }
}