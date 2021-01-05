// https://github.com/17teen
// Discord: thug angel#3868
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
      ░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒             Made by 7teen#1464                        
      ░░░░░░▒▒▒▒▓▓▒▒░░                                        
    ░░░░▒▒▒▒▒▒▒▒▒▒                                            
    ░░░░▒▒▒▒▒▒▒▒                                          
    ░░▒▒▒▒▒▒▒▒                                                
  ░░░░▒▒▒▒▒▒                                                    
  ░░▒▒▒▒▒▒░░          17         >>> | Cycle Mode Innitiated | <<<                     
  ░░▒▒▒▒▒▒                             ^^^^^^^^^^^^^^^^^^^^^                    
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

    console.log(chalk.greenBright(title))

});


rpc.login({
    clientId: `${ID}`,
})
