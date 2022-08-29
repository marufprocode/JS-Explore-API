fetch ('https://jsonplaceholder.typicode.com/posts')
.then (res => res.json())
.then (data => displayData(data))


function displayData(data){
    console.log(data);
    const postConatiner = document.getElementById('post-conatiner');
    for (user of data){
        const postsDiv = document.createElement('div');
        postsDiv.classList.add('bg-danger', 'rounded-3', 'p-3', 'm-3')
        postsDiv.innerHTML = `
                <h4>User: ${user.id}</h4>
                <h5>Title: ${user.title}</h5>
                <p>Description: ${user.body}</p>
        `
        postConatiner.appendChild(postsDiv);
    }
    
}