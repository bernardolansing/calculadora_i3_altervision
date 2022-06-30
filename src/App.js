import './App.css';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';

function App() {
	return (
		<div className="App">
			
			<header>
				<img id='ufrgs-logo' src={require('./assets/ufrgs-logo.png')}></img>
				<p>Calculadora de I3 da UFRGS</p>
			</header>

			<div id='sec-container'>
				<section id='sec-inputs'>
					<TextField id='field-A' name='input-conceito' label='Conceitos A' variant='outlined' margin='normal' inputProps={{style: {backgroundColor: 'white'}}}></TextField>
					<TextField id='field-B' name='input-conceito' label='Conceitos B' variant='outlined' margin='normal' inputProps={{style: {backgroundColor: 'white'}}}></TextField>
					<TextField id='field-C' name='input-conceito' label='Conceitos C' variant='outlined' margin='normal' inputProps={{style: {backgroundColor: 'white'}}}></TextField>
					<TextField id='field-D' name='input-conceito' label='Conceitos D' variant='outlined' margin='normal' inputProps={{style: {backgroundColor: 'white'}}}></TextField>
					<TextField id='field-FF' name='input-conceito' label='Conceitos FF' variant='outlined' margin='normal' inputProps={{style: {backgroundColor: 'white'}}}></TextField>
					<TextField id='field-TRANC' name='input-conceito' label='Disciplinas trancadas' variant='outlined' margin='normal' inputProps={{style: {backgroundColor: 'white'}}}></TextField>				
				</section>

				<section id='sec-results'>
					<p>O seu índice 3 vale:</p>
					<p id='i3-display'>0.0</p>
					<p id='conceito-geral'>Preencha os campos ao lado para calcular o conceito</p>
				</section>

				<br></br>
				<Fab id='botao-limpar' variant='extended'>Limpar</Fab>

			</div>

			<div className='blank'></div>
		</div>
	);
}

export default App;
