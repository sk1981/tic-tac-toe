const resetButtonElement = document.getElementsByClassName('game-reset')[0];
const callbacks = [];

resetButtonElement.addEventListener('click', () => {
  callbacks.forEach((callback) => {
    callback();
  });
});

export default {
  addCallback(callback) {
    callbacks.push(callback);
  }

}
