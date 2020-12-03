const submitBtn = document.querySelector('#submitBtn');
const url = 'https://api.telegram.org/bot1397404758:AAEBfHXgaxWM0j-FGnsFsUxQjo4sMuyEz5Q/sendMessage'
const form = document.querySelector('.form')
const adminChatIDs = [
    399344900,
]

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

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let formData = new FormData(form)

    let text = `
Full name: ${formData.get('first_name') + formData.get('last_name')}
Phone: ${formData.get('phone')}
Email: ${formData.get('email')}
Comment: ${formData.get('comment')}
`
    adminChatIDs.forEach((chat_id) => {
        postData(url, {chat_id, text: text}).then(() => {
            let alert = window.confirm('Ваша форма была успешно отправлена')

            if (alert) {
                location.reload();
            } else {
                location.reload();
            }
        }).catch((err) => console.log(err))
    })

})