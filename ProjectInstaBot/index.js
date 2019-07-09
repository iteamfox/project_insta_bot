process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
// const translate = require('extended-google-translate-api');
const debug = require('./helpers');
var schedule = require('node-schedule');
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


// forever start main.js  # запуск приложения
// forever restart main.js # перезапуск приложения
// forever stop main.js # остановка приложения
// forever list # посмотреть список запущенных приложений
// forever restartall # перезапуск всех приложений
// forever stopall # остановка всех приложений
// https://lonelyelk.ru/posts/57/


var cron = require('cron');
var cronJob = cron.job("0 */1 * * * *", function(){
    // perform operation e.g. GET request http.get() etc.
    console.info('cron job completed');
});
cronJob.start();


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
const activation_keyboard = [
    [{text: 'Да✅', callback_data:'yes'},
        {text: 'Нет❌󠁧󠁢󠁥󠁮󠁧󠁿', callback_data:'no'}]
];

bot.on('callback_query', query =>{
// , message_id, text - to const
    const {chat} = query.message;
    switch (query.data) {
        case 'rus':
            bot.sendMessage(chat.id, 'Вы выбрали русский язык❗️');
            // setTimeout(() =>{
            // bot.deleteMessage(chat.id, message_Id);
            // },2000);
            break
        case 'eng':
            bot.sendMessage(chat.id, `You selected english language❗️`);
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
    const chat_Id = msg.chat.id;
    const markdown = `*Hello, ${msg.from.first_name}!🖐* \n_Select language: _`;
    bot.sendMessage(chat_Id, markdown, {
        parse_mode: 'Markdown',
        reply_markup:{
            inline_keyboard
        }
    } );

});

bot.onText(/\/activation/, msg=>{
    const chat_Id = msg.chat.id;
    bot.sendMessage(chat_Id, 'Введите ваш ник в инстаграм ✏️...');
    bot.on('text', (msg)=>{
        if (msg.text!==null){
            bot.sendMessage(chat_Id, "Это Ваш инстаграм? https://www.instagram.com/"+msg.text,{
                reply_markup:{
                    inline_keyboard: activation_keyboard
                }
            });
        }
    });
});
bot.on('callback_query', query =>{
    const {chat} = query.message;
    switch (query.data) {
        case 'yes':
            bot.sendMessage(chat.id, 'Excellent👌');
            break
        case 'no':
            bot.sendMessage(chat.id, `Введите ваш ник корректнее⚠️`);
            bot.on('text', (msg)=>{
                if (msg.text!==null){
                    bot.sendMessage(chat_Id, "Это Ваш инстаграм? https://www.instagram.com/"+msg.text,{
                        reply_markup:{
                            inline_keyboard: activation_keyboard
                        }
                    });
                }
            });
            break
    }
    bot.answerCallbackQuery({
        callback_query_id: query.id
    })
});
