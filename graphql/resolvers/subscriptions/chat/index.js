const pubsub = require('../../../schemas/pubSub')
const variables = require('../../../schemas/variables')
const CHAT_NOTIFICATION = variables.chatVariables

const chat = {
  subscribe: async (root, args, context) => {
    try {
      console.log('Masuk Subscription')
      let data = await pubsub.asyncIterator(CHAT_NOTIFICATION)
      console.log('data sub: ', data)
      return await pubsub.asyncIterator(CHAT_NOTIFICATION)
    } catch (error) {
      return {
        error: error.message
      }
    }
  }
}

module.exports = {
  chat
}