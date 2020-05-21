async function spam(){
	let i = 0
	do{
		document.getElementsByClassName('msg_2guN1')[0].click()
		await new Promise((resolve, reject) => {
			const intervalo = setInterval(() => {
				try{
					document.getElementsByClassName('list-tile-button')[7].click()
					i++
					resolve()
					clearInterval(intervalo)
					console.log('A')
				}catch(e){
					console.log(e)
				}
			}, 3000)
		})
	}while(i!=10);

}
spam()