require('token.txt').config()
const Discord = require('discord.js')
const Bot = Discord.Client()
fs = require('fs')
token = process.env.TOKEN;
Bot.login(token)
require('chess')
const chess_positions = ['a','b','c','f','g','e','f','g','h']
let players = new Map()

chess_positions_hash.set('Positions',chess_positions)
const specific_operations= ["0-0","0-0-0"]
Bot.on('message', (message) => {
    if (message.content === '?start'){
        if (!players.has(message.author.id))
            players.set(message.author.id, new ChessGame())
    }
    if (message.content === '?delete'){
        players.delete(message.author.id)
    }
    if (message.content.has('?move')){
        if (message.length === 2){
            let command = message[1]
            if (isValid())
        }
    }
})