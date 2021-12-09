import React, {useState} from 'react';
import {Button, Container, Box, Typography} from "@mui/material";
import  {useHistory} from "react-router-dom";
import Wizard from "./UI/Wizard/Wizard";

const Home = () => {
	const history = useHistory()
	const [loading , setLoading] = useState(false)

	const onClickHandler = () => {
		setLoading(true)
		setTimeout(() => {
			history.push('/randomizer')
			setLoading(false)
		}, 3000)
	}


	if(loading){
		return <Wizard/>
	}
	return (
   <Container
		 maxWidth="lg"
		 sx={{
			 display:'flex',
			 flexDirection:'column',
			 alignItems:'center',
			 justifyContent:'center',
			 width: '100vw',
       height: '100vh'
 }}
>
<Box
sx={{
display:'flex',
flexDirection:'column',
alignItems:'center',
justifyContent:'center',
border:'1px solid #373F41',
padding:'45px',
borderRadius:'20px'
}}
>
<Typography
variant={'h1'}
color={'primary'}
textAlign={'center'}

>
JS Randomizer
</Typography>
<Button
variant="outlined"
onClick={onClickHandler}
sx={{marginTop:'10px'}}
>
Start
</Button>
</Box>


</Container>
);
};

export default Home;