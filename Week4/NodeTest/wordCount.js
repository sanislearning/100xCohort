//Create a CLI that lets the user specify a file path and the nodejs process count the number of words in it

const { Command } = require('commander');
const fs=require('fs');
const program = new Command();

program
  .name('wordCounter')
  .description('CLI to check the number of words in a text file')
  .version('0.7.0');

program.command('fileloc')
  .description('Tells how many words exist in said file')
  .argument('<string>', 'filepath')
  .action((str) => {
    fs.readFile(str,'utf-8',function(err,data){
      let val=data;
      let words=data.trim().split(/\s+/).filter(Boolean);
      // Okay so /\s+/ means that wherever there is one or more whitespace characters, split
      // Removes empty strings from the array
      console.log(words.length);
    })
  });

program.parse();