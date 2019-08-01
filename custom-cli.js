const fs = require('fs')
const chalk = require('chalk');
const commander = require('commander');

const log = (word, status) => {
    if(status == 'success'){
        console.log(chalk.green.inverse(word))
    }else if(status == 'error'){
        console.log(chalk.red.inverse(word))
    }else{
        console.log(word)        
    }
    
};

const pageName = commandInput => {
    let getPageName = commandInput;
        getPageName = getPageName.split('/');
        getPageName = getPageName[getPageName.length - 1];
    return getPageName;
}

const Cli = () => {
    commander
  .option('-a, --add <file>', `specify the file's name`)
  .option('-r, --remove <file>', `specify the file's name`)
  .action(() => {
    if (commander.add) {
        fs.readFile(__dirname + `/${commander.add}.js`, (err, res) => {
            let getPageName = commander.add;
            if(getPageName.includes('/')){
               getPageName = pageName(getPageName);
            }
            if(err){
                fs.writeFile(__dirname + `/${commander.add}.js`, `//${getPageName} works!`, (error) => {
                    if(error){
                        log(`There is no such directory.`, 'error')
                    }else{
                        log(`${getPageName}.js is created.`, 'success')
                    }
                })
            }else{
                log(`${getPageName}.js already exists in the directory.`, 'error')
            }
        })
    }

    if (commander.remove) {
        fs.readFile(__dirname + `/${commander.remove}.js`, (err, res) => {
            let getPageName = commander.remove;
            if(getPageName.includes('/')){
               getPageName = pageName(getPageName);
            }
            if(err){
                log(`There is no such file or directory.`, 'error')
            }else{                
                fs.unlink(__dirname + `/${commander.remove}.js`, (error) => {
                    if(error) {
                        log(`There is no such directory.`, 'error')
                    }else{
                        log(`${getPageName}.js is removed.`, 'success')
                    }
                    
                })
            }
        })
    }
  })

  return commander.parse(process.argv)
}




module.exports = Cli;