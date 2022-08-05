import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../../../../../../Utils/api';
import { toast } from 'react-toastify';

const DeleteAlert = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const AgreeHandler = () =>{
    setOpen(false);
    api
        .delete('examiner/course/'+props.courseID,{headers : {Authorization : `${localStorage.getItem('accessToken')}`}})
        .then((result)=>{
            toast(result.data.message)
            props.setRefresh(current=>!current)
        })
        .catch((err)=>console.log(err,'deleteCourseErr'))

  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
     <DeleteIcon onClick={handleClickOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you Sure ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={AgreeHandler} autoFocus>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteAlert
