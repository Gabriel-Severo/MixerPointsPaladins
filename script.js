let janela = ''
function getStreamers(newWindow){
	streams = newWindow.document.getElementsByClassName('container_ZqIuE cardStyle_8PoHy')
	return streams
}

async function openStream(){
	const newWindow = window.open('https://mixer.com/browse/games/1386')
	await new Promise((resolve, reject) => {
		newWindow.onload = () => {
			resolve()
		}
	})
    let streams = getStreamers(newWindow)
	await new Promise((resolve, reject) => {
		let intervalo = setInterval(() => {
			try{
				janela = window.open(streams[0].href)
				newWindow.close()
				clearInterval(intervalo)
			}catch(e){
				streams = getStreamers(newWindow)
			}
			resolve()
		}, 1000)			
	})
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