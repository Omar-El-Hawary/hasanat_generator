function main(){
    const params = new URLSearchParams(window.location.search)
    if (params.get("daily") == 1){
        getRandomPage()
    }
    // else if (hi){

    // }
}

function getRandomPage(){
    const pageno = Math.floor(Math.random() * 604)
    fetch(`https://api.alquran.cloud/v1/page/${pageno}/quran-uthmani`)
    .then(response => {const quranData = response.json()
        return quranData
    })
    .then(quranData =>{
        const page = quranData.data.ayahs
        const parsedPage = parsePage(page)
        document.getElementById("quran-verse").innerHTML = parsedPage
    })
}


function parsePage(ayahs){
    let element = "";
    let lastSurahNo = 0;

    for (let i of ayahs) {
        if (i["surah"]["number"] !== lastSurahNo) {
            lastSurahNo = i["surah"]["number"];
            element += `<br><strong>${i["surah"]["name"]}</strong><br>`;
        }

        // Properly format verse number and ensure correct order
        element += ` ${i["text"]} <span class="ayah-number">﴿${i["numberInSurah"]}﴾</span> `;
    }

    return element.trim()
}
main()