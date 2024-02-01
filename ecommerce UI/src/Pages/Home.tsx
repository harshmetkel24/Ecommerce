import { Navbar, GeneralAlert } from '../Components'
import { Typography } from '@mui/material'

const Home = () => {
  return (
    <>
    <Typography width="100%" variant="h4" textAlign="center" sx={{backgroundColor:"#f73378"}} color="white">
      VALAM VARIETY SHOP
    </Typography>
    <Navbar />
    <GeneralAlert />
    <img src="/image/ecommerce home.jpeg" style={{width:'100vw', objectFit:'contain'}}/>
    </>
  )
}

export default Home