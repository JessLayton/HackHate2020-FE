import { makeObservable, observable, action } from 'mobx';

class Store {
  open = false;

  message = '';

  variant = 'success';

  duration = Number(localStorage.getItem('snackbarHideDuration')) || 3;

  constructor() {
    makeObservable(this, {
      open: observable,
      message: observable,
      variant: observable,
      duration: observable,
      showError: action,
      showSuccess: action,
      closeCurrentMessage: action,
      setDuration: action,
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

  setDuration(duration) {
    this.duration = duration;
    localStorage.setItem('snackbarHideDuration', duration);
  }
}

const SnackbarStore = new Store();
export default SnackbarStore;
