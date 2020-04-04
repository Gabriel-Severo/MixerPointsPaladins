let janela = ''
async function getStreamers(){
	let streams = ''
	const newWindow = window.open('https://mixer.com/browse/games/1386')
	await new Promise((resolve, reject) => {
        setTimeout(() => {
            streams = newWindow.document.getElementsByClassName('container_ZqIuE cardStyle_8PoHy')
			newWindow.close()
			resolve()
        }, 3000);
    });
	return streams
}

async function openStream(){
    const streams = await getStreamers()
	janela = window.open(streams[0].href)
}

async function setOnlyAudio(){
	await openStream()
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			janela.document.getElementsByClassName('_2YmB_I5OliPyB7_rs748W3 _1kIlUXtgizhBW5Drjbvqmm')[1].click()
			resolve()
		}, 20000)
	})
}

setOnlyAudio()