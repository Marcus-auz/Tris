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

    client.on('message',(receivedMessage)=>{
        if(receivedMessage.author==client.user){
            return//this condition is set so that bot dont keep replying its own messages and enter a infinte loop 
        }
            //it tags the user who sent the msg and echo the msg back
            //receivedMessage.channel.send("Message received," + receivedMessage.author.toString() + ":  " + receivedMessage.content)
            
            //adding a reaction to a message
            //receivedMessage.react("😁") //emoji reaction to the msg

            //reacting with a custom emoji {you need to first add custom emoji into the server}
            //react with each custom emoji
            //receivedMessage.guild.emojis.forEach(customEmoji=>{
            //    console.log(`${customEmoji.name} ${customEmoji.id}`)
            //    receivedMessage.react(customEmoji)
            //  })

            //to react with some specefic emoji
            //let customEmoji=receivedMessage.guild.emojis.get("emoji id")
            //receivedMessage.react(customEmoji)
    
        if(receivedMessage.content.startsWith("!")){
            processCommand(receivedMessage)
        }  
    })   
   

    

function processCommand(receivedMessage){
    let fullCommand=receivedMessage.content.substr(1)
    let splitCommand=fullCommand.split(" ") //return array with each word
    let primaryCommand=splitCommand[0]
    let arguments=splitCommand.slice(1) //exclude first element and keeps the rest

    if(primaryCommand=="help"){
        helpCommand(arguments,receivedMessage)
    }
}

function helpCommand(arguments,receivedMessage){
    if(arguments.length==0){
        receivedMessage.channel.send("Bad request,try `!help [topic]` ")
    }else{
        receivedMessage.channel.send("help is here "+arguments)
    }
}

client.login("NjQ0MjcxNTczNjUzNTIwMzk3.XcxnSQ.8SyQ0N_FbApweS2M74JZnGG11ao");
