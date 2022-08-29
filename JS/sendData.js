function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => receiveData(data));
}

function receiveData(data) {
  const ul = document.getElementById('users-list');
    for (user of data){
        console.log(user);
        
        const li = document.createElement('li');
        li.innerText = `User id: ${user.id}`;
        ul.appendChild(li);
    }
}




