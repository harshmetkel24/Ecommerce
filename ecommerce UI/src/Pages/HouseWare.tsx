import { Typography } from '@mui/material';
import { FrontTabs } from '../Components/FrontTabs'
import Houseitems from '../HouseWare'
import { Navbar,GeneralAlert } from '../Components';

const HouseWare = () => {
  return (
    <>
    <Navbar />
    <GeneralAlert />
    <Typography variant="h5" sx={{textAlign:"center", py:1}}>House Ware</Typography>
    <FrontTabs cardData={Houseitems} mainIndex={3}/>
    </>
  )
}

export default HouseWare;