// https://github.com/17teen
// Discord: 7teen#3868
// https://github.com/Vissage

const RPC = require("discord-rpc");
const browser = typeof window !== 'undefined';
const rpc = new RPC.Client({ transport: browser ? 'websocket' : 'ipc' });

const chalk = require('chalk');
const settings = require('./settings.json');
const details = settings.details;
const state = settings.state;
const LIK = settings.largeImageKey;
const LIT = settings.largeImageText;
const SIK = settings.smallImageKey;
const SIT = settings.smallImageText;
const ID = settings.clientID;
// Party / Join Mode
const partymode = require('../Party Mode/party.json');
const partyS =  partymode.partySize;
const partyM = partymode.partyMax;
const partySecret = partymode.partySecret;



rpc.on("ready", () => {

  setInterval(function () {

    let Detail = details[Math.floor(Math.random() * details.length)];
    let State = state[Math.floor(Math.random() * state.length)];
    let LargeIK = LIK[Math.floor(Math.random() * LIK.length)];
    let LargeIT = LIT[Math.floor(Math.random() * LIT.length)];
    let SmallIK = SIK[Math.floor(Math.random() * SIK.length)];
    let SmallIT = SIT[Math.floor(Math.random() * SIT.length)];

    rpc.setActivity({
        details: `${Detail}`,
        state: `${State}`,
        startTimestamp: new Date(),
        largeImageKey: `${LargeIK}`,
        largeImageText: `${LargeIT}`,
        smallImageKey: `${SmallIK}`,
        smallImageText: `${SmallIT}`,
        partySize: partyS,
        partyMax: partyM,
        joinSecret: `${partySecret}`
    });

}, 10000) // 10 Seconds

    const title = String.raw`
                                                              
                                        ░░▓▓▓▓████▓▓▒▒░░░░    
        17                     ▒▒██████▓▓██████▒▒░░░░▒▒▒▒▒▒
                              ░░██████████▓▓████▒▒        ░░░░
                          ░░██████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓          ░░
                        ▓▓████████▓▓▓▓▓▓▓▓████████░░      ░░░░
                      ██████▓▓▓▓▓▓▓▓▓▓████▒▒      ░░░░░░░░░░  
                  ▒▒████████▓▓████▓▓                          
            ▒▒██████████████▓▓  ░░                    17        
            ░░▓▓▓▓████████▓▓                                  
          ░░░░██▓▓▓▓▓▓████▒▒                                  
        ░░░░░░██▓▓▒▒▓▓▓▓▓▓▓▓   17                               
        ░░░░░░░░▒▒▒▒▒▒▓▓████                                  
      ░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒             Made by 7teen#3868                       
      ░░░░░░▒▒▒▒▓▓▒▒░░                                        
    ░░░░▒▒▒▒▒▒▒▒▒▒                                            
    ░░░░▒▒▒▒▒▒▒▒                                          
    ░░▒▒▒▒▒▒▒▒                                                
  ░░░░▒▒▒▒▒▒                                                    
  ░░▒▒▒▒▒▒░░          17         >>> | Cycle Party Mode Innitiated | <<<                     
  ░░▒▒▒▒▒▒                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^                    
    ▒▒▒▒░░                                                    
    ░░▒▒                                                      
17  ▒▒▒▒                                                      
    ░░░░                             
    ▒▒░░                                                      
    ▒▒                                                        
    ▒▒                                                        
    ▒▒         17                                               
    ░░                                                        
    ░░                                                        
                
    Logged in as: ${rpc.user.username}#${rpc.user.discriminator}                                                                                       
                                                                                                                                              
`;

console.log(chalk.yellowBright(title))

});


rpc.login({
    clientId: `${ID}`,
})
