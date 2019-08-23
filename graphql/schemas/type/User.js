let user; 

user = `
 type user {
    id: Int 
     name: String 
  }

  type users {
    data: [user]
    error: String 
  }

  type epmployee {
    company: String 
    employeeList: [user]
  }

  type userDetail {
    data: user 
    error: String 
  }

  input userDataInputParams {
    name: String
  }
`

module.exports = () => [user]