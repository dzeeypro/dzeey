const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = 'didarzarubekov';
var password = 'Facemannpro1097';
var shared_secret = '';

var games = [730, 440, 570, 1962663];
var status = 7;


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});