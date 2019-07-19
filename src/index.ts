import { Client } from 'eris';
import { token } from './secrets';

const bot = new Client(token);

const replies = [
  {
    test: /\bsweet\b/i,
    reply: 'schweet*'
  },
  {
    test: /^(?:yes|y e s|Ｙ ?Ｅ ?Ｓ|ｙ ?ｅ ?ｓ|ja|ye(?:ah?|[hp])?)$/gimu,
    reply: 'https://i.imgur.com/HoBrz4b.png'
  },
  {
    test: /^(?:good ?)?night$/i,
    reply: 'https://i.imgur.com/1OLyFtS.png'
  },
  {
    test: /^mercy$/i,
    reply: 'https://i.imgur.com/h3WAFke.png'
  },
  {
    test: /^grr$/i,
    reply: 'https://i.imgur.com/IKWwe3Z.jpg'
  }
];

bot.on('ready', () => console.log('Ready!'));

bot.on('messageCreate', msg => {
  replies.forEach(reply => {
    if (reply.test.test(msg.content)) {
      bot.createMessage(msg.channel.id, reply.reply);
    }
  });
});

bot.connect();
