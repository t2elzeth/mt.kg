import axios from 'axios';

export const tgBotUrl = 'https://api.telegram.org/bot1397404758:AAEBfHXgaxWM0j-FGnsFsUxQjo4sMuyEz5Q/sendMessage'
export const adminChatIDs = [
    399344900,
]

export function sendMessage(text) {
    adminChatIDs.forEach((chat_id) => {
        axios.post(tgBotUrl, {
            chat_id, text
        })
    })
}


