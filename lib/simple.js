module.exports = (client, config) => {
  client.onMessage(async message => {
    const msg = message.body.toLowerCase();

    if(msg === 'hi' || msg === 'hello') {
      await client.sendText(message.from, `Hello! I'm ${config.botName}`);
    }

    if(msg === 'menu') {
      await client.sendText(message.from, `🤖 ${config.botName} Commands:
1. hi / hello
2. menu
3. group
4. channel
5. owner`);
    }

    if(msg === 'group') {
      await client.sendText(message.from, `Join my group: ${config.groupLink}`);
    }

    if(msg === 'channel') {
      await client.sendText(message.from, `Check my channel: ${config.channelLink}`);
    }

    if(msg === 'owner') {
      await client.sendText(message.from, `Owner: ${config.ownerNumber}`);
    }
  });

  // Set profile picture
  client.setProfilePic(config.profileImage);
};
