const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = data => {
    const countryContainer = document.getElementById('country-container');
    data.forEach(element => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('bg-info', 'rounded-3', 'm-3', 'p-3');
        newDiv.innerHTML = `
                <h4>Country Name: ${element.name.common}</h4>
                <h6>Capital: ${element.capital ? element.capital[0] : 'No Capital'}</h6>
        `;
        countryContainer.appendChild(newDiv); 
    });
}

loadCountry()