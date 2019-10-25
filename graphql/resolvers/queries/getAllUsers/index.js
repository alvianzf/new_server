const DB_Schema = require('../../../../db_schema/User_Schema')

const getAllUsers = async (root, args, context) => {
  try{
    console.log('Halo All Users List')

    let getDataFromDB = await DB_Schema.find().exec()
    console.log(getDataFromDB)
    if (getDataFromDB) {
      return {
        data: getDataFromDB,
        error: null
      }
    }

  }catch(error){
    console.log('error: ', error)
    return {
      data: null ,
      error: error.message
    }
  }
}

module.exports = {
  getAllUsers
}