import React from 'react'
import userpic from './userpic.JPG'

const styles = {
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		margin: '0 auto',
		width: '1100px',
		height: '900px',
	},
	sidebar: {
		backgroundColor: '#293e49',
		color: 'white',
		padding: '40px',
		width: '30%',
		paddingTop: '100px'
	},
	main: {
		backgroundColor: 'lightgrey',
		color: 'black',
		padding: '50px',
		width: '70%',
		paddingTop: '100px'
	},
	img: {
		borderRadius: '50%',
	}
}

function App() {


	return (
		<div style={styles.wrapper} >
			<div style={styles.sidebar}>
				<img src={userpic} alt='userpic' width='100px' style={styles.img} />
				<h2>Contacts</h2>
				<p>maxsaveskul@gmail.com</p>
				<a href='https://www.linkedin.com/in/maxsaveskul/'>linkedin.com/in/maxsaveskul/</a>
				<h2>Top Skills</h2>
				<p>HTML</p>
				<p>CSS</p>
				<p>JavaScript</p>
				<h2>Languages</h2>
				<p>Ukrainian <span>(Native)</span></p>
				<p>English <span>(Intermediate)</span></p>
			</div>
			<div style={styles.main}>
				<h1>Maksym Saveskul</h1>
				<h3>Front-end developer</h3>
				<span>Chernivtsi, Ukraine</span>
				<h2>Summary</h2>
				<p>I have practiced with technologies such as HTML, CSS, JavaScript. My English level - B1. In 2021 I graduated from Chernivtsi National University with a bachelor degree in Computer Engineering. I am sociable, non-confrontational, like to work in a team, creative, learning on the fly, adaptive and stress-resistant.</p>
				<h2>Education</h2>
				<p>Front-End Online Program at EPAM University Program</p>
				<span>12.2021-03.2022</span>
				<p>Interchange B1+ English Course at Chernivtsi Native Speaker School "Americana"</p>
				<span>9.2020-02.2021</span>
				<p>Bachelor's degree in Computer Engineering at Yuriy Fedkovych Chernivtsi National University
				</p>
				<span>2019-2021</span>
				<p>Junior Specialist's degree in Software development at Chernivtsi Polytechnical College</p>
				<span>2015-2019</span>
			</div>
		</div >
	)
}

export default App;
