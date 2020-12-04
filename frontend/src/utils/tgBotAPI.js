import axios from 'axios';

export const tgBotUrl = 'https://api.telegram.org/bot1328468800:AAEa-IJt7NzCLfIKSBBJ-oohQ3jPV5Hmc4o/sendMessage'
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


