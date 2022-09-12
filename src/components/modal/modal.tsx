import React, { ReactElement } from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { Modal as MaterialModal } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backdrop: {
      background: theme.palette.background.default,
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      outline: 0,
      zIndex: 2,
      borderRadius: 5,
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export interface ModalProps {
  open: boolean;
  title: string;
  handleClose: any;
  children: ReactElement;
}

const Modal: React.FC<ModalProps> = ({ open, handleClose, title, children }) => {
  const classes = useStyles();

  return (
    <MaterialModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 250,
        classes: {
          root: classes.backdrop,
        },
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          {title && <h2 id="transition-modal-title">{title}</h2>}
          {children}
        </div>
      </Fade>
    </MaterialModal>
  );
};

export default Modal;
