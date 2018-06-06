module.exports.ls = () => {
};

const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
     return `${acc} ${file} `;
   }, '');

   console.log(filesToString);

 });
};

var fs = require('fs');

module.exports.touch = () => {
  fs.writeFile('terminal-commands.js', (err) {
  if (err) throw err;
  console.log('Saved!');
});
};


module.exports.mkdir = () => {
  fs.mkdir('./terminal-commands',function(err){
   if (err) {
       return console.error(err);
   }
   console.log("Directory created successfully!");
};
