let conceitos = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'FF': 0, 'TRANC': 0};

window.onload = () => {
	
	// a página não carregou devidamente
	if (!document.getElementsByName('input-conceito') || !document.getElementById('botao-limpar')) {
		window.location.reload();
	}

	// adicionar evento input a cada TextBox
	for (let textField of document.getElementsByName('input-conceito')) {
		textField.oninput = e => {
			const newValue = Number(e.target.value);
			const recipient = {
				'field-A': 'A',
				'field-B': 'B',
				'field-C': 'C',
				'field-D': 'D',
				'field-FF': 'FF',
				'field-Tranc': 'TRANC'
			}[e.target.id];

			if (!e.target.value)
				conceitos[recipient] = 0;

			else if (isNaN(newValue)) {
				e.target.value = '';
				conceitos[recipient] = 0;
				alert('Digite apenas números!');
			}

			else
				conceitos[recipient] = newValue;
			
			exibirMedia();
		}
	}

	// adicionar evento para o clique do botão de limpar
	document.getElementById('botao-limpar').onclick = () => {
		for (let textField of document.getElementsByName('input-conceito'))
			textField.value = '';
		
		conceitos = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'FF': 0, 'TRANC': 0};
		exibirMedia();
	}
}

function calcularMedia() {
	let numerador = Object.values(conceitos).reduce((a, b) => a + b);
	let denominador = (
		0.1 * conceitos.A + 
		0.125 * conceitos.B +
		0.166667 * conceitos.C +
		0.333333 * conceitos.D +
		0.5 * conceitos.TRANC +
		conceitos.FF
	)

	if (!denominador)
		return 0;

	return numerador / denominador;
}

function exibirMedia() {
	const media = calcularMedia();
	const pConceito = document.getElementById('conceito-geral');
	let pDisplay = document.getElementById('i3-display');
	pDisplay.innerText = media.toFixed(1);

	if (!media) {
		pConceito.innerText = 'Preencha os campos ao lado para calcular o conceito';
		pDisplay.style.color = '#000';
		return;
	}

	pConceito.innerText = 'Seu conceito geral é';

	if (media >= 9)
		pConceito.innerText += ' A!';
	else if (media >= 7.5) 
		pConceito.innerText += ' B';
	else if (media >= 6) 
		pConceito.innerText += ' C';
	else 
		pConceito.innerText += ' D...';
	
	// adicionar cor associada à média
	const greenChannel = 100 + media * 15;
	const redChannel = 180 + (10 - media) * 7;
	pDisplay.style.color = `rgba(${redChannel}, ${greenChannel}, 0)`;
}
