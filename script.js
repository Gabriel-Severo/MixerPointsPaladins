let janela = ''
async function getStreamers(){
	let streams = ''
	const newWindow = window.open('https://mixer.com/browse/games/1386')
	await new Promise((resolve, reject) => {
		newWindow.onload = () => {
			streams = newWindow.document.getElementsByClassName('container_ZqIuE cardStyle_8PoHy')
			newWindow.close()
			resolve()
		}		
	})
	return streams
}

async function openStream(){
    const streams = await getStreamers()
	janela = window.open(streams[0].href)
}

async function setOnlyAudio(){
	await openStream()
	janela.onload = () => {
		while (true){
			resultado = janela.document.getElementsByClassName('_2YmB_I5OliPyB7_rs748W3 _1kIlUXtgizhBW5Drjbvqmm')
			if (resultado != null){
				break
			}
		}
		janela.document.getElementsByClassName('_2YmB_I5OliPyB7_rs748W3 _1kIlUXtgizhBW5Drjbvqmm')[1].click()
	}
}

setOnlyAudio()