const pageno = Math.floor(Math.random() * 604)
fetch(`http://api.alquran.cloud/v1/page/${pageno}/quran-uthmani`)
    .then(response => {const data = response.json()
        return data
    })
    .then(data =>{
        const page = data.data.ayahs
        .map(ayah => `${ayah.text} (${ayah.numberInSurah})`)
        .join(' ');;
        document.getElementById("quran-verse").innerHTML = page
    })
