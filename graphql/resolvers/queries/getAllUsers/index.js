const getAllUsers = async () => {
  try{
    console.log('Halo All Users List')

    let dummyData = [
      {
        id: 1,
        name: "test 1",
      }, {
        id: 2,
        name: "test 2",
      }
    ]

    return {
      data: dummyData,
      error: null
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