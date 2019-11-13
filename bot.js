const Discord=require('discord.js'); 
const client =new Discord.Client()

client.on('ready',()=>{
    console.log("connected as " + client.user.tag) 

    //client.user.setActivity("with js")  //change the status of the bot to 'playing with js'
    client.user.setActivity("Youtube",{type:"WATCHING"}) //status to 'watching youtube'

    //Gives the server name
    client.guilds.forEach((guild)=>{
        console.log(guild.name)
    })
})

client.login("NjQ0MjcxNTczNjUzNTIwMzk3.XcxnSQ.8SyQ0N_FbApweS2M74JZnGG11ao");
