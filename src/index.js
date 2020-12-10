const axios = require('axios');
const https = require('https')
const fs = require('fs')
//https://static-cdn.jtvnw.net/emoticons/v1/303436380/3.0
//400000

function downloadSingleEmoji(url) {
    const fileName = url.split('/v1/')[1].split("/3.0")[0]
    const file = fs.createWriteStream(`./newEmojis/${fileName}.png`)
    const request = https.get(url, (response) => {
        response.pipe(file)
    })
}

async function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },ms);
    })
}

(async () => {
    for (let i = 2; i < 303500000; i++){
        console.log(`Descargando la imagen : ${i} ...`)
        await sleep(250)
        downloadSingleEmoji(`https://static-cdn.jtvnw.net/emoticons/v1/${i}/3.0`)
    }
})()
