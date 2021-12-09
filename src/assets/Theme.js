import {createTheme} from "@mui/material";


const theme = createTheme({

	palette: {
		primary: { main: '#373F41' },
		secondary: { main: '#5C5E60' },
		white: { main: '#FFFFFF' },
		error: { main: '#8C8C8C' },
		success: { main: '#388e3c' },
		neutral: {
			main: '#fff',
			contrastText: '#fff',
		},
	},
	typography: {
		fontFamily: 'Space Mono, monospace',
		fontSize: 16,
		h1:{
			fontSize: 32,
			textTransform: "uppercase"
		},
		body:{
			fontSize: 18,
			textTransform: "uppercase"
		}
	},

	components:{
		MuiButton: {
			variants: [
				{
					props: { variant: 'outlined' },
					style: {
						fontSize:'12px',
						"&:hover":{
							backgroundColor: '#373F41',
							color:'#fff'
						}
					}}
			]
		}
	}

})


export default theme