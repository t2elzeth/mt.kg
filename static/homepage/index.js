const url = 'https://api.telegram.org/bot1397404758:AAEBfHXgaxWM0j-FGnsFsUxQjo4sMuyEz5Q/sendMessage'
const form = document.querySelector('.form')
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

bntSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    var formData = new FormData(form)

    var text = `
Full name: ${formData.get('first_name') + formData.get('last_name')}
Phone: ${formData.get('phone')}
Email: ${formData.get('email')}
Tel: ${formData.get('tel')}
Comment: ${formData.get('comment')}
`

    postData(url, {
        chat_id: 399344900,
        text: text
    })
})