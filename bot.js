const Discord=require('discord.js'); 
const client =new Discord.Client()

client.on('ready',()=>{
    console.log("connected as " + client.user.tag) 

    //client.user.setActivity("with js")  //change the status of the bot to 'playing with js'
    client.user.setActivity("Youtube",{type:"WATCHING"}) //status to 'watching youtube'

    //Gives the server name
    client.guilds.forEach((guild)=>{
        console.log(guild.name)
        guild.channels.forEach((channel)=>{
            console.log(`-${channel.name} ${channel.type} ${channel.id}`)
        })
        //general channel id 644269920070271018
    })

    //sending message to server
    let generalChannel =client.channels.get("644269920070271018")
    const attachment=new Discord.Attachment("https://images.search.yahoo.com/yhs/search?p=devwloper+image&fr=yhs-ddc-linuxmint&hspart=ddc&hsimp=yhs-linuxmint&imgurl=https%3A%2F%2Fmadebysidecar.com%2Fassets%2Fproducts%2Fthumbs%2Fdeveloper-photo-bundle-4.jpg#id=14&iurl=https%3A%2F%2Fmadebysidecar.com%2Fassets%2Fproducts%2Fthumbs%2Fdeveloper-photo-bundle-4.jpg&action=click")
    generalChannel.send(attachment) //if attachment passed it send attach ,u can send message too

    
})

client.login("NjQ0MjcxNTczNjUzNTIwMzk3.XcxnSQ.8SyQ0N_FbApweS2M74JZnGG11ao");
