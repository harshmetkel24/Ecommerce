import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SingleItem } from '.';
import { Box } from '@mui/material';

type TProps = {mainIndex:number, id:number, title:string, content:string, price:number}
const MediaCard = ({mainIndex, id,title,content,price} :TProps )=> {

  const [openSingleItem,setOpenSingleItem] = React.useState<boolean>(false);
  const handleClick = ()=> {
    setOpenSingleItem(true);
  }
  return (
    <Card sx={{ maxWidth: 300}}>
      <CardMedia
        sx={{ height: 200 }}
        image="/image/img1.webp"
        title="green iguana"
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Button size="small" variant='contained'> Rs.{price} </Button>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" sx={{alignItems:"center"}} onClick={handleClick}>More Photos & Videos</Button>
        {openSingleItem && <SingleItem mainIndex = {mainIndex} index={id} open={openSingleItem} setOpen={setOpenSingleItem}/> }
      </CardActions>
    </Card>
  );
}
export default MediaCard;