const DB_Schema = require('../../../../db_schema/User_Schema')
const argon2 = require('argon2')

const createUser = async (root, args, context) => {
    try {
        console.log('args:', args)

        let name    = args.name
            email   = args.email
            password= args.password

        let encryptPassword = await argon2.hash(password)

        let insertDataToDb = new DB_Schema({
            name,
            email,
            password: encryptPassword
        })

        let saveData = await insertDataToDb.save()
        console.log('saveData', saveData)

        if (saveData) {
            return {
                id: saveData._id,
                name: saveData.name,
                email: saveData.email
            }
        }
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createUser
}
