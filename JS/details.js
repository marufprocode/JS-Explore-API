
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => loadCountryData(data));

const loadCountryData = data => {
    const cardsCountry = document.getElementById('cards-sec');
    data?.forEach(country => {
        const cardsDiv = document.createElement('div');
        cardsDiv.classList.add('cards')
        cardsDiv.innerHTML = `
            <h4>Name: ${country.name.common}</h4>
            <h6>Code: ${country.cca2}</h6>
            <button class="btn-detail" onclick="getCountryDetails('${country.cca2}')">Details</button>
        `;
        cardsCountry.appendChild(cardsDiv);
    });
    
}
loadCountryData()

const getCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch (url)
    .then (res => res.json())
    .then (country => displayDetails(country))
}

const displayDetails = data => {
    const detailsDiv = document.getElementById('country-details');
    detailsDiv.innerHTML = `
        <h3>Country: ${data[0].name.common}</h3>
        <img src="${data[0].flags.png}" alt="flag" width="200px" height="120px">
        <p>Code: ${data[0].cca2}</p>
        <p>Capital: ${data[0].capital}</p>
        <p>Region: ${data[0].region}</p>
        <p>Currency: ${Object.keys(data[0].currencies)[0]}</p>
    `;
}