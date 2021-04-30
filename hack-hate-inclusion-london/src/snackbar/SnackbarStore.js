import { makeObservable, observable, action } from 'mobx';

class Store {
  open = false;

  message = '';

  variant = 'success';

  constructor() {
    makeObservable(this, {
      open: observable,
      message: observable,
      showError: action,
      showSuccess: action,
      closeCurrentMessage: action,
    });
  }

  closeCurrentMessage() {
    this.open = false;
  }

  showError(error) {
    this.closeCurrentMessage();
    this.message = error;
    this.open = true;
    this.variant = 'error';
  }

  showSuccess(messageText) {
    this.closeCurrentMessage();
    this.message = messageText;
    this.open = true;
    this.variant = 'success';
  }
}

const SnackbarStore = new Store();
export default SnackbarStore;
