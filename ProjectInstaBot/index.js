process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '808615413:AAGUWZLW3FY9iWntsPgGbkcmoStTAIJ85Rw';
console.log('Bot has been started ...');

const bot = new TelegramBot(TOKEN,{
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});
const opt = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({

        inline_keyboard: [
            [{text: `Русский `, callback_data:'rus'}],
                {text: `English ${emoji.get('gb')}`, callback_data:'eng'}
        ]
    })
}
bot.on('callback_query', function (msg) {
    if (msg.data === 'rus'){
        console.log("Russian");
    }
    if (msg.data === 'eng'){
        console.log("English");
    }
});
//
//
//
// bot.on('message', msg => {
//     const markdown = `
//     *Hello, ${msg.from.first_name}!🖐*`;
//     bot.sendMessage(msg.chat.id, markdown, {
//         parse_mode: 'Markdown'
//     })
// });
//
// const inline_keyboard = [
//     [{
//             text:'RU',
//             callback_data:'ru'
//     }],
//     [{
//             text:'EN',
//             callback_data:'en'
//     }],
//     [{
//             text:'CN',
//             callback_data:'cn'
//     }],
//     [{
//             text:'IN',
//             callback_data:'in'
//     }],
//     [{
//             text:'KR',
//             callback_data:'kr'
//     }],
//     [{
//             text:'JP',
//             callback_data:'jp'
//     }],
//     [{
//             text:'DE',
//             callback_data:'de'
//     }],
//     [{
//             text:'Arab',
//             callback_data:'arab'
//     }],
//     [{
//             text:'ES',
//             callback_data:'es'
//     }]
// ];
// bot.on('callback_query', query =>{
//     const {chat, message_id, text} = query.message;
//    switch (query.data) {
//        case 'ru':
//            //куда, откуда, что
//            bot.answerCallbackQuery(query.id,`You selected ` + `${query.data}` + ` language`);
//            break
//        case 'en':
//            bot.answerCallbackQuery(query.id,`You selected ` + `${query.data}` + ` language`);
//            break
//        case 'cn':
//            bot.editMessageText(`${text} (edited)`, {
//                chat_id: chat.id,
//                message_id: message_id,
//                reply_markup: {inline_keyboard}
//            });
//            break
//        case 'in':
//            bot.deleteMessage(chat.id, message_id)
//            break
//    }
//    bot.answerCallbackQuery({
//        callback_query_id: query.id
//    })
// });
// bot.onText(/\/start/,(msg, [source,match]) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Select language:', {
//         reply_markup:{
//             inline_keyboard
//         }
//     })
// });
//
//


//
//
// bot.on('message', msg => {
//     bot.sendMessage(msg.chat.id, `Choose language`, {
//         disable_web_page_preview: false,   //превью запарсить
//         disable_notification: false,    //оповещение со звуком
//         })
//     });

