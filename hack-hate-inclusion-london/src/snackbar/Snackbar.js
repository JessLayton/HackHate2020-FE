import React from 'react';
import { observer } from 'mobx-react-lite';
import MuiSnackbar from '@material-ui/core/Snackbar';
import { Alert as MuiAlert, AlertTitle } from '@material-ui/lab';

import SnackbarStore from './SnackbarStore';

const getTitle = (severity) => {
  switch (severity) {
    case 'error':
      return 'Error';
    case 'success':
      return 'Success';
    default:
      return 'Success';
  };
};

const Alert = ({ severity, onClose, message }) => (
  <MuiAlert
    elevation={6}
    variant='filled'
    severity={severity}
    onClose={onClose}
  >
    <AlertTitle>{getTitle(severity)}</AlertTitle>
    {message}
  </MuiAlert>
);

const Snackbar = observer(() => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    SnackbarStore.closeCurrentMessage();
  };

  return (
    <MuiSnackbar open={SnackbarStore.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        severity={SnackbarStore.variant}
        message={SnackbarStore.message}
        onClose={handleClose}
      />
    </MuiSnackbar>
  );
});

export default Snackbar;
