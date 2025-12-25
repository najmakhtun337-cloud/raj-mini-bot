const { create, Client } = require('@open-wa/wa-automate');
const config = require('./config');
const simple = require('./lib/simple');

create({
  sessionId: "RAJMINIBOT",
  multiDevice: true,
  authTimeout: 60
}).then(client => start(client));

function start(client) {
  console.log(`${config.botName} started!`);
  simple(client, config);
}
