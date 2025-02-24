const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'XyR1xA6L#gll0D0dzeZMMbXYp5wNrOJGlIQssDSMR5f5zG4IKBT4'
};
