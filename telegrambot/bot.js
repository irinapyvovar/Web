process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');

const token = '1183080631:AAHOcxe3YXC8JARJDyCA-F4vhtM7Axf8rjI';

const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/start/, (msg, match) => {
    var message =  'Hello '
    bot.sendMessage(msg.chat.id, message);
});

  bot.getMe().then(function(me)
{
    console.log('Good Day! My name %s!', me.first_name);
    console.log('My id %s.', me.id);
    console.log('My username @%s.', me.username);
});
 
bot.on('text', function(msg)
{
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
 
    if (messageText === '/keys') {
        var opts = {
            reply_to_message_id: msg.message_id,
            reply_markup: JSON.stringify({
                keyboard: [
                    ['Yes'],
                    ['No']
                ]
            })
        };
        bot.sendMessage(messageChatId, 'Are you in good mood?', opts);
    }
 
    if (messageText === 'Yes') {
        bot.sendMessage(messageChatId, 'I\'m also in good mood!', { caption: 'I\'m bot!' });
    }
 
    if (messageText === 'No') {
        bot.sendMessage(messageChatId, ':(', { caption: 'I\'m bot!' });
    }
});