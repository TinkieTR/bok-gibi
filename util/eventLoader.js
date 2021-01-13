const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', reqEvent('ready'));
  client.on('message', reqEvent('message'));
};
