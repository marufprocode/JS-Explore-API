const loadPlayers = () => {
        fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
        .then(res => res.json())
        .then(data => displayPlayers(data.sports))
}

loadPlayers();

const displayPlayers = data => {
    const sportDiv = document.getElementById('player-container');
    data.forEach(sports => {        
        try{
            const {idSport, strSport, strSportDescription, strSportThumb} = sports;
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
            <div class="card bg-dark bg-gradient">
                <img src="${strSportThumb}" class="card-img-top" alt="sports-image" width="100%" style="max-height: 300px">
                <div class="card-body">
                <h5 class="card-title text-warning">${strSport}</h5>
                <p class="card-text text-light">${strSportDescription.slice(0,150)} ...</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                See Details
                </button>
            </div>
        `;
        sportDiv.appendChild(cardDiv);
        }
        catch(err){
            console.log(err);            
        }
    });

}