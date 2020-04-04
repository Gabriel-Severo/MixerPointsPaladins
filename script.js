var janelas = []
var cont = 2
async function getStreamers(){
	var streams = ''
	var newWindow = window.open('https://mixer.com/browse/games/1386')
	await new Promise((resolve, reject) => {
        setTimeout(() => {
            streams = newWindow.document.getElementsByClassName('container_ZqIuE cardStyle_8PoHy')
			newWindow.close()
			resolve()
        }, 3000);
    });
	return streams
}

async function openStream(num){
	var streams;
    streams = await getStreamers()
	pos = 0
	while (pos < num){
		janela = window.open(streams[pos].href)
		janelas.push(janela)
		pos += 1
	}
}

async function setOnlyAudio(num){
	await openStream(num)
	pos = 0
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			while (pos < num){
				janelas[pos].document.getElementsByClassName('_2YmB_I5OliPyB7_rs748W3 _1kIlUXtgizhBW5Drjbvqmm')[1].click()
				pos += 1
			}
		resolve()
		}, 20000)
	})
}

setOnlyAudio(cont)