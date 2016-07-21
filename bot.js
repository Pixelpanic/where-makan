var SlackBot = require('slackbots');

console.log("Running");

//var user = 'USERNAME'; //Only required if you wants to send to a user

//Array of the eat place.
var arrayMessage1 = ['Wenton Noodles Stall', 'Coffee Shop at the Stadium', 'Pig Organ Soup','The coffee shop next to prime','The coffee shop behind NTUC', 'Ayam Penyet'];

//function for Random array
function randArray (msgArray){
  var randMsg = msgArray[Math.floor(Math.random() * msgArray.length)]; //Random array
  return randMsg;
}
 
// create a bot 
var bot = new SlackBot({
    token: 'YOUR TOKEN HERE', // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: 'Lunchtime! Where-Makan?'
});
 
bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage 
    var params = {
        icon_emoji: ':knife_fork_plate:'
    };
    
   	var msgRandomise = randArray(arrayMessage1);
   	bot.postMessageToChannel('eat', "It's lunchtime!! Shall we set off for lunch?", params);
   	bot.postMessageToChannel('eat', 'How about ' + msgRandomise + '?', params);
    //bot.postMessageToUser(user, 'Let me decide where to eat...' , params);
    //bot.postMessageToUser(user, 'How about ' + msgRandomise + '?' , params);
    
console.log("Result" + msgRandomise);
    
});
​
