const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(mealData => displayMeals(mealData.meals))
}

loadMeals('fish');

const displayMeals = (mealsArr) => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = "";
    mealsArr.forEach(meals => {
        const {idMeal, strMeal: mealName, strArea, strInstructions : description, strMealThumb : image} = meals;
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
            <div class="card bg-dark bg-gradient">
                <img src="${image}" class="card-img-top" alt="meal-Image-${idMeal}" width="100%" style="max-height: 300px">
                <div class="card-body">
                <h5 class="card-title text-warning">${mealName}</h5>
                <p class="card-text text-light">${description.slice(0,150)} ...</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = "seeDetailsByID(${idMeal})">
                See Details
                </button>
            </div>
        `;
        mealContainer.appendChild(cardDiv); 
    });
}

const searchMeal = () => {
    const searchValue = document.getElementById('search-meal').value;

    loadMeals(searchValue); 
}

const seeDetailsByID = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch (url)
    .then (res => res.json())
    .then (data => loadModals(data.meals[0]))
}

const loadModals = (data) => {
    console.log(data);
    const {strMeal: name, strArea, strInstructions, strMeasure1: weight, strCategory, strMealThumb: image, idMeal} = data;
    const modalTitle = document.getElementById('exampleModalLabel');
    const modalDetail = document.getElementById('modal-detail');
    modalTitle.innerText = `${name}`;
    modalDetail.innerHTML = `
            <div class="bg-light bg-gradient">
            <img src="${image}" class="card-img-top" alt="meal-Image-${idMeal}" width="100%" style="max-height: 300px">
            <div class="card-body">
            <h5 class="card-title">${strArea}</h5>
            <h6 class="text-warning">Weight: ${weight}</h6>
            <h6 class="text-danger">Meal ID: ${idMeal}</h6>
            <h6>Category: ${strCategory}</h6>
            <p class="card-text ">${strInstructions}</p>
        </div>
    `;  
}

