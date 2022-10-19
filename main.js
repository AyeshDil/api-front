/*
let posts = [];
const getAllPosts = () => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(response => {
        posts = response.json();
        posts.then(e => {
            console.log(e);
        })
        // console.log(response);
    }).catch(error => {
        console.log(error);
    })
}*/

//========using async and wait===============
// data load function
let posts = [];

async function getAllPosts() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    posts = await res.json();

    let dataset = '';
    posts.forEach(element => {
        // console.log(e);
        dataset += `<tr>
        <td>${element.userId}</td>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.body}</td>
        <td><button onclick="deleteComment(${element.id})" class="btn btn-danger">Delete</button></td>
        </tr>`;
    })
    $('tbody').html(dataset);
    console.log(posts);
}

// delete function
async function deleteComment(value) {
    if (confirm('are you sure?')) {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + value, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        const result = await res.json();
        console.log(result);
    }
}

// save function
async function saveComment() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body:JSON.stringify({
            userId:Number($('#userId').val()),
            id:Number($('#id').val()),
            title:$('#title').val(),
            body:$('#comment').val()
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    const result = await res.json();
    console.log(result);
}

//update function
async function updateComment() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+$('#id').val(), {
        method: 'PUT',
        body:JSON.stringify({
            userId:Number($('#userId').val()),
            id:Number($('#id').val()),
            title:$('#title').val(),
            body:$('#comment').val()
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    const result = await res.json();
    console.log(result);
}

/*
//======jquery ajax============
const getAllPosts=()=>{
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/posts',
        type:'GET',
        dataType:'json',
        success:(response)=>{
            console.log(response);
        }
    });
}
*/



