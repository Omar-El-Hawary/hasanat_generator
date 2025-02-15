function main(){
    const params = new URLSearchParams(window.location.search)
    if (params.get("daily") === 1){
        console.log("hi")
        getRandomPage()
    }
    // else if (hi){

    // }
}

function getRandomPage(){
    const pageno = Math.floor(Math.random() * 604)
    fetch(`https://api.alquran.cloud/v1/page/${pageno}/quran-uthmani`)
    .then(response => {const data = response.json()
        return data
    })
    .then(data =>{
        const page = data.data.ayahs
        document.getElementById("quran-verse").innerHTML = page
    })
}
main()
