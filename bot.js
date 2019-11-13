const Discord=require('discord.js'); 
const client =new Discord.Client()

client.on('ready',()=>{
    console.log("connected as " + client.user.tag)
})

client.login("NjQ0MjcxNTczNjUzNTIwMzk3.XcxnSQ.8SyQ0N_FbApweS2M74JZnGG11ao");
