process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
// const translate = require('extended-google-translate-api');
const debug = require('./helpers');
const TOKEN = '808615413:AAH-isfi1X1nzpalYtHF-3NGuZxeGqdn_64';
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

bot.on('message', msg => {
    const markdown = `
    *Hello, ${msg.from.first_name}!🖐*`;
    bot.sendMessage(msg.chat.id, markdown, {
        parse_mode: 'Markdown'
    })
});


 const inline_keyboard = [
            [{text: 'Русский 🇷🇺', callback_data:'rus'},
                {text: 'English 🏴󠁧󠁢󠁥󠁮󠁧󠁿', callback_data:'eng'},
                {text: 'CN 🇨🇳', callback_data:'cn'}],
            [{text: 'IN 🇮🇳', callback_data:'in'},
                {text: 'KR 🇰🇷󠁧󠁢󠁥󠁮󠁧󠁿', callback_data:'kr'},
                {text: 'JP 🇯🇵', callback_data:'jp'}],
            [{text: 'DE 🇩🇪', callback_data:'de'},
                {text: 'Arab 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿', callback_data:'arab'},
                {text: 'ES 🇪🇸', callback_data:'es'}]
        ];

bot.on('callback_query', query =>{
// , message_id, text - to const
    const {chat} = query.message;
   switch (query.data) {
       case 'rus':

           bot.sendMessage(chat.id, 'Вы выбрали русский язык!');
           setTimeout(() =>{
           bot.deleteMessage(chat.id, message_Id);
           },2000);
           break
       case 'eng':
           bot.sendMessage(chat.id, `You selected english language!`);
           break
       case 'cn':
           bot.sendMessage(chat.id, `你選擇了中文`);
           break
       case 'in':
           bot.sendMessage(chat.id, `Apakah kamu memilih bahasa indonesia`);
           break
       case 'kr':
           bot.sendMessage(chat.id, `너는 한국어를 선택했다.`);
           break
       case 'jp':
           bot.sendMessage(chat.id, `あなたは日本語を選んだ`);
           break
       case 'de':
           bot.sendMessage(chat.id, `Sie haben die deutsche Sprache gewählt`);
           break
       case 'arab':
           bot.sendMessage(chat.id, `لقد اخترت اللغة العربي!`);
           break
       case 'es':
           bot.sendMessage(chat.id, `¿Escogiste el idioma español?`);
           break
   }
   bot.answerCallbackQuery({
       callback_query_id: query.id
   })
});
// , [source,match]
bot.onText(/\/start/,(msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Keyboard', {
        reply_markup:{
            inline_keyboard
        }
    })
});





//
// const opt = {
//     parse_mode: 'markdown',
//     disable_web_page_preview: false,
//     reply_markup: JSON.stringify({
//         inline_keyboard: [
//             [{text: 'Русский 🇷🇺', callback_data:'rus'},
//                 {text: 'English 🏴󠁧󠁢󠁥󠁮󠁧󠁿', callback_data:'eng'},
//                 {text: 'CN 🇨🇳', callback_data:'cn'}],
//             [{text: 'IN 🇮🇳', callback_data:'in'},
//                 {text: 'KR 🇰🇷󠁧󠁢󠁥󠁮󠁧󠁿', callback_data:'kr'},
//                 {text: 'JP 🇯🇵', callback_data:'jp'}],
//             [{text: 'DE 🇩🇪', callback_data:'de'},
//                 {text: 'Arab 🇸🇦󠁧󠁢󠁥󠁮󠁧󠁿', callback_data:'arab'},
//                 {text: 'ES 🇪🇸', callback_data:'es'}]
//         ]
//     })
// };
// bot.onText(/\/start/, function (msg){
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Select language: ',opt);
// });
//
// bot.on('message', msg=>{
//     const chatId = msg.chat.id;
//     if (msg.data === 'rus'){
//         console.log("Russian");
//         bot.sendMessage(chatId, 'Its work');
//     }
//     if (msg.data === 'eng'){
//         console.log("English");
//     }
// });
//
// bot.onText(/\/activation/, msg=>{
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Select ');
// });
//

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

