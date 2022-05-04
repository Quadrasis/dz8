const url = 'https://jsonplaceholder.typicode.com/users'
const name = document.getElementById('name')
const surname = document.getElementById('surname')
const email = document.getElementById('email')
const btn = document.getElementById('btn')
async function postResponse (){
    const data = {
        name: name.value,
        surname: surname.value,
        email: email.value
    }
    const post = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, post)
    const userData = await response.json()
    console.log(userData)
}
btn.addEventListener('click', postResponse)