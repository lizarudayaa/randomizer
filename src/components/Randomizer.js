import React, {useState} from 'react';
import {Button, Container, Typography , Grid, Box} from "@mui/material";
import Wizard from "./UI/Wizard/Wizard";
import {makeStyles} from "@mui/styles";
import Wand from "./UI/Wand/Wand";
import Firework from './UI/Firework/Firework'

const useStyles = makeStyles({
	flexik:{
		display:'flex',
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center'
	},
	container:{
		width:'500px',
		height:'20px'
	}
})

const questions = [1,2,3,4,5,6,7,8,9,10]

const Randomizer = () => {
	const classes = useStyles()
	const [student, setStudent] = useState(null)
	const [question, setQuestion] = useState(null)
	const [loading , setLoading] = useState(false)
	const [qloading , setQLoading] = useState(false)

	const students = ['student1', 'student2', 'student3', 'student4','student5']


	const selectStudent = () => {
		setLoading(true)
		setTimeout(() => {
			setStudent(students[Math.floor(Math.random()*students.length)])
			setLoading(false)
		}, 1000)

	}

	const selectQuestion = () => {
		setQLoading(true)
		const index = Math.floor(Math.random()*questions.length)
		setTimeout(() => {
			setQuestion(questions[index])
			questions.splice(index,1)
			setQLoading(false)
		}, 2000)


	}

	return (
		<>
				<Grid container mt={'80px'}>
					<Grid item sm={12} md={12} >
            <Typography
							textAlign={'center'}
						>
							JavaScript Basic's. Lesson #1
						</Typography>
					</Grid>
					<Grid item sm={12}
								className={classes.flexik}
					sx={{mt:'20px',
						width:'500px',
						height:'20px'
					}}
					>

							{loading && <Wand/>}
							{student && !loading && questions.length > 0 ? <Typography
								variant={'body'}

							>{student}</Typography> : <Typography></Typography>}


					</Grid>
					<Grid item sm={12} mt='30px' className={classes.flexik}>
						<Button
							variant={'outlined'}
							onClick={selectStudent}
							disabled={questions.length === 0}
						>Select Student</Button>
					</Grid>
					<Grid item sm={12} className={classes.flexik}
								sx={{mt:'20px',
									width:'500px',
									height:'20px'
								}}
					>
						{questions.length === 0 ? <Firework/> : null}
						{qloading && <Wand/>}
						{question && questions.length > 0  && !qloading ? <Typography
							variant={'body'}
						>{question}
						</Typography> : null}
					</Grid>
					<Grid item sm={12} mt='30px' className={classes.flexik}>
						{questions.length !== 0  && <Button
							variant={'outlined'}
							onClick={selectQuestion}
							disabled={questions.length === 0}
						>Select Question</Button>}

					</Grid>
				</Grid>

		</>
	);
};

export default Randomizer;