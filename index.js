// https://github.com/17teen
// Discord: 7teen#3868
// https://github.com/Vissage

// Discord Rich Presence

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
    rpc.setActivity({
        details: `${details}`,
        state: `${state}`,
        startTimestamp: new Date(),
        largeImageKey: `${LIK}`,
        largeImageText: `${LIT}`,
        smallImageKey: `${SIK}`,
        smallImageText: `${SIT}`
    });
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
  ░░▒▒▒▒▒▒░░          17         >>> | Rich Presence Innitiated | <<<                     
  ░░▒▒▒▒▒▒                             ^^^^^^^^^^^^^^^^^^^^^^^^                    
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

console.log(chalk.cyan(title))

});


rpc.login({
    clientId: `${ID}`,
})
