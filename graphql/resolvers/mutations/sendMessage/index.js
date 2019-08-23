const pubsub = require('../../../schemas/pubSub')
const variables = require('../../../schemas/variables')
const CHAT_NOTIFICATION = variables.chatVariables

const sendMessage = async (root, args, context) => {
  try{
    console.log('ARGUMENT: ', args)

    let message = args.input

    await pubsub.publish(CHAT_NOTIFICATION, {
      chat: {
        message: args.input,
        error: null
      }
    })

    return {
      message,
      error: null
    }

  }catch(error){
    console.log('error: ', error)
    return {
      message: null,
      error: error.message
    }
  }
}

module.exports = {
  sendMessage
}