const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'LEZWRRCK#6O2ySoxiDjM_VodBUC-azesAUf9XdlwKI_n5OkY5Vfw'
};
