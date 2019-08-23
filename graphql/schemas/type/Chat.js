let chat;

chat = `
  type chat {
    message: String 
  }

  type chatDetail {
    message: String
    error: String
  }
`

module.exports = () => [chat]