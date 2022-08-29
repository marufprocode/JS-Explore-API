const loadUsers = () => {
    fetch("https://randomuser.me/api/?results=20")
    .then(res => res.json())
    .then(data => displayUsers(data)) 
}


const displayUsers = data => {
    const usersArr = data.results;
    const maleUsersArr = usersArr.filter(x => x.gender === 'male');
    const userContainer = document.getElementById('users-conatiner');
    maleUsersArr.forEach(element => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('bg-primary', 'rounded-3', 'p-3', 'm-2')
        userDiv.innerHTML = `
                <h3>User Name: ${element.name.first} ${element.name.last}</h3>
                <h6>Gender: ${element.gender}</h6>
                <p>User Email: ${element.email}</p>
                <p>User Contact: ${element.cell}</p>
                <p>User Location: ${element.location.country}</p>
        `;
        userContainer.appendChild(userDiv);
    });
    
    
}

loadUsers();