const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios')

client.on('message', message => {
    if(message.content.startsWith(`${prefix}한강`)){
        function Hangang(){
            axios
            .get(
                `http://hangang.dkserver.wo.tc/`
            )
            .then(function (response) {
                try{
                    const embed = new Discord.MessageEmbed()
                    .setTitle('한강 물 온도')//kr : 한강 물 온도 en : Korea Han River(hangang) temperature
                    .setColor('BLUE')
                    //kr : 온도 en : temperature
                    .addField('**온도**', `${response.data.temp}도`, true)
                    //kr : 날짜 en : data
                    .addField('**날짜**', JSON.stringify(response.data.time).split('"')[1].split(" ")[0], true)
                    //kr : 시간 en : time
                    .addField('**시간**', JSON.stringify(response.data.time).split(' ')[1].split('"')[0], true)
                    message.channel.send(embed)
                    console.log(response.data.temp);
                }
                catch(error){
                    message.reply('Error');
                };
            })
            .catch(function (error, response) {
                message.reply('Error');
            });
        };
        Hangang();
    };
});

client.login('TOKEN');