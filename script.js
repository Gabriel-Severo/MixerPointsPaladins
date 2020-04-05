function getStreamers(newWindow){
	streams = newWindow.document.getElementsByClassName('container_ZqIuE cardStyle_8PoHy')
	return streams
}

async function openStream(num){
	let streamWindow
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
				streamWindow = window.open(streams[num].href)
				newWindow.close()
				clearInterval(intervalo)
			}catch(e){
				streams = getStreamers(newWindow)
			}
			resolve()
		}, 1000)			
	})
	return streamWindow
}

async function setOnlyAudio(streamWindow){
	await new Promise((resolve, reject) => {		
		streamWindow.onload = () => {
			let intervalo = setInterval(() => {
				resultado = streamWindow.document.getElementsByClassName('_2YmB_I5OliPyB7_rs748W3 _1kIlUXtgizhBW5Drjbvqmm')
				try{
					streamWindow.document.getElementsByClassName('_2YmB_I5OliPyB7_rs748W3 _1kIlUXtgizhBW5Drjbvqmm')[1].click()
					clearInterval(intervalo)
					resolve()
				}catch(e){
					console.log(e)
				}
			}, 1000)
		}
	})
}

function hasLoot(stream){
	let cont = stream.document.getElementsByClassName('subTitle_2Lhiz').length
	if (cont == 0){
		return false
	}else{
		return true
	}
}


async function main(){
	let num = 0
	while(true){
		let streamWindow = await openStream(num)
		await setOnlyAudio(streamWindow)
		let loot = hasLoot(streamWindow)
		if(loot){
			break
		}else{
			streamWindow.close()
		}
		num++
	}
}

main()