const name=document.getElementById('name')
const sur=document.getElementById('sur')
const email=document.getElementById('email')
const password=document.getElementById('password')
const form=document.getElementById('form')
const submit=document.getElementById('submit')
const logIn=document.getElementById('logIn')

logIn.addEventListener('click',()=>{
    location.replace('http://3.82.230.183:3000/logIn/login.html')
})

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    axios.post('http://3.82.230.183:3000/user',{
        name: name.value,
        sur: sur.value,
        email: email.value,
        password: password.value
    }).then((result) => {
        alert('Successfully Signed Up')
        location.replace('http://3.82.230.183:3000/logIn/login.html')
    }).catch((err) => {
        const error=document.createElement('p')
        error.appendChild(document.createTextNode('USER ALREADY EXISTS'))
        form.append(error)
    });
})