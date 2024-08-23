import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { featuredDocAPI } from '../Api/Functions/featuredDoc.api';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { baseURL, myproduct } from '../Api/Axios/axiosInstance';
// import { myproduct } from '../Api/Axios/axiosInstance';


export default function FeaturedDoctors() {

  // const queryClient = useQueryClient();
  const {
    data:featuredData,
    isLoading:landingpageLoading,
    isError:landingpageError
  }=useQuery({
     queryKey:["landing-page-details"],
     queryFn:()=>featuredDocAPI()
  })
  console.log(featuredData,"featuredDocdata");
  return (
    <>
      <Box mt={3} mb={2} p={2} border={1} borderRadius={1} borderColor="grey.300">
        <Typography sx={{color:"blue"}} variant='h4' textAlign="center">Meet with our specialized Doctors
        </Typography>
       <Grid container mt={2} spacing={3}>
        {Array.isArray(featuredData) && featuredData.map((list,index)=>(
        <Grid item md={4} key={index}  >
            
        <Card sx={{ maxWidth: 345 }}>
  <CardMedia
    sx={{ height: 345 }}
    
    title="green iguana"
    component='img'
    image={myproduct(list?.image)}
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {list.name}
    </Typography>
    <Typography variant="body1" color="text.secondary">
    {list.description.slice(0,150)}
    </Typography>
  </CardContent>
 
</Card>


      </Grid>
        
        )) }

       </Grid>
      </Box>
    </>
  )
}























