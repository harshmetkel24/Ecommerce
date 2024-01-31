import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Kitchenitems from '../KitchenWare';
import InnerSlider from './InnerSlider';
import InnerVideo from './InnerVideo';
import myMap from '../MyMap';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

type TProps = {
  mainIndex:number;
  index: number,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const SingleItem = ({mainIndex, index, open, setOpen}:TProps)=> {
  
   if(myMap.has(mainIndex)){
    var item = myMap.get(mainIndex)![index];
   }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {item.title} - Rs. {item.price}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
       <DialogContent dividers>
        <InnerSlider cardData={item} />
        <Typography variant='body1'> {item.description} </Typography>
        <InnerVideo videoLink={item.innerVideo} />
       </DialogContent>
        
      </BootstrapDialog>
    </>
  );
}

export default SingleItem;
