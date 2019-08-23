// Queries 
const getAllusers = require('./queries/getAllUsers')

// Mutations 
const sendMessage = require('./mutations/sendMessage')

// Subscription 
const chat = require('./subscriptions/chat')
module.exports = {
  getAllusers,
  sendMessage,
  chat
}