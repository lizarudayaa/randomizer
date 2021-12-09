import React from 'react';
import { Fireworks } from 'fireworks-js/dist/react'
import {Typography} from "@mui/material";

const Firework = () => {
	const options = {
		speed: 3
	}

	const style = {
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		position: 'fixed',
		background: '#fff'
	}

	return (<>
		<Fireworks options={options} style={style} />
		<Typography
		sx={{
			color:'#000',
			position:'absolute',
			left:'50%',
			transform:" translate(-50%, 0)",
			textTransform:'uppercase',
			fontSize:'32px',
			letterSpacing:'3px'

		}}
		>
			🎉congratulations🎉
		</Typography>
		</>)
};

export default Firework;