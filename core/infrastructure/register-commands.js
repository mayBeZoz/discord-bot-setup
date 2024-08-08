const fs = require('fs');
const path = require('path');

const commandsDirectoryPath = path.join(__dirname, '../../commands')

module.exports = function (clientInstance) {

    const commandsFiles = fs.readdirSync(commandsDirectoryPath);
    
    commandsFiles.forEach((file) => {
        const filePath = path.join(commandsDirectoryPath, file);
        
        if (path.extname(file) === '.js') {

            const commandObject = require(filePath);

            if (Boolean(commandObject?.data) && Boolean(commandObject?.execute)){
                clientInstance?.commands?.set(commandObject.data.name,commandObject)
            }
            else {
                console.log(`WARNING THE COMMAND AT (${filePath}) IS MISSING DATA OR EXECUTE PROPERTY`)
            }
        }
    });
   
}