


let BtnForm = document.querySelector('.form-btn');
let tel = document.querySelector('#tel').value;
let email = document.querySelector('#Email').value;
let name = document.querySelector('#name').value;
let comment = document.querySelector('#comment').value;



const url = 'https://api.telegram.org/bot1397404758:AAEBfHXgaxWM0j-FGnsFsUxQjo4sMuyEz5Q/sendMessage'
const form = document.querySelector('.form-group')
const bntSubmit = document.querySelector('#btnSubmit')

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

BtnForm.addEventListener('click', (e) => {
    e.preventDefault()
    var formData = new FormData(form)

    var text = `
Username: ${formData.get('name')}
email: ${formData.get('email')}
tel: ${formData.get('tel')}
comment: ${formData.get('comment')}
`

    postData(url, {
            chat_id: 742038093 ,
            text: text
        })
})