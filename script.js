async function getStreams(){
    const newWindow = window.open('https://mixer.com/browse/games/1386')
    await new Promise((resolve, reject) => {
        newWindow.onload = () => {
            let intervalo = setInterval(() => {
                streams = newWindow.document.getElementsByClassName('container_ZqIuE cardStyle_8PoHy')
                if (streams.length != 0){
                    newWindow.close()
                    clearInterval(intervalo)
                    resolve()
                }
            }, 1000)
        }
    })
    return streams
}

function openStream(num, streams){
    streamWindow = window.open(streams[num].href)
    return streamWindow
}

async function setOnlyAudio(streamWindow){
    await new Promise((resolve, reject) => {        
        streamWindow.onload = () => {
            let intervalo = setInterval(() => {
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

function hasLoot(streamWindow){
    let cont = streamWindow.document.getElementsByClassName('subTitle_2Lhiz').length
    if (cont == 0){
        return false
    }else{
        return true
    }
}

function isOnline(streamWindow){
    let result = streamWindow.document.getElementsByClassName('offline-message bui-text-align-center').length
    if (result == 0){
        return true
    }else{
        return false
    }
}


async function main(){
    let num = 0
    let oldStream
    let timeOn = 0
    while(true){
        let streams = await getStreams()
        if (oldStream == streams[0].href){
            num++
        }else{
            num = 0
        }
        while(true){
            if(num == 32){
                streams = await getStreams()
                num = 0
                continue
            }
            let streamWindow = await openStream(num, streams)
            await setOnlyAudio(streamWindow)
            let loot = hasLoot(streamWindow)
            if(loot){
                break
            }else{
                streamWindow.close()
            }
            num++
        }
        while(true){
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`You have earned approximately ${Math.trunc(timeOn/60/12)} points`)
                    resolve()
                }, 3000)
            })
            if(isOnline(streamWindow)){
                timeOn+=3
            }else{
                oldStream = streams[num].href
                streamWindow.close()
                break
            }
        }
    }
}

main()