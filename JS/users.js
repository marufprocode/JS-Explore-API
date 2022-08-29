const loadUsers = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUsers(data.results[0]))
}

loadUsers()

const displayUsers = (data) => {
    console.log(data.location);
    let {gender, cell, email, name, dob, location, picture} = data;
    const {age, date: dateofB} = dob;
    name = `${name.title} ${name.first} ${name.last}`;
    const {city, street, coordinates, timezone} = location;

    const userDiv =document. getElementById('card-sec');
    userDiv.innerHTML = `
        <div class="card text-center d-flex justify-content-center align-items-center">
        <div class="card-header mt-3">
        <img src="${picture.large}" alt="profile-image">
        </div>
        <div class="card-body w-50 text-start">
        <p class="fw-bold">Name: <span class="fw-normal">${name}</span></p>
        <p class="fw-bold">Email: <span class="fw-normal">${email}</span></p>
        <p class="fw-bold">Age: <span class="fw-normal">${age}</span></p>
        <p class="fw-bold">BirthDay: <span class="fw-normal">${dateofB}</span></p>
        <p class="fw-bold">Phone: <span class="fw-normal">${cell}</span></p>
        <div>
            <p class="fw-bold text-center">Address</p>
            <p class="fw-bold">Street: <span class="fw-normal">${street.name}</span></p>
            <p class="fw-bold">City: <span class="fw-normal">${city}</span></p>
            <p class="fw-bold">Co-ordinates: <span class="fw-normal">latitude: ${coordinates.latitude}, longitude: ${coordinates.longitude}</span></p>
            <p class="fw-bold">TimeZone: <span class="fw-normal">${timezone.description}</span></p>
        </div>
        
        </div>
    </div>
    `;

    
    
}