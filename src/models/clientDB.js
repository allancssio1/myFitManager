const users = []

module.exports = {
  auth: async (userName, password) => {
    const user = await this.findOne(userName)

    if(!user) return

    if(user.userName !== userName || user.password !== password) return 

    return user
  },
  findUserByUserName: async (userName) => {
    return new Promise (async () => {
      const userFound = await users.find(user => user.userName === userName)
  
      if(!userFound) return
  
      return userFound
    })
  },
  create: async (userName, password) => {
    users.push({
      userName: userName,
      password: password
    })
  }
}