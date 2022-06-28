const clientDB = require('../models/clientDB')

module.exports = {
  login: async (req, res) => {
    const {userName, password} = req.body
    const userFound = await clientDB.auth(userName, password)

    if(!userFound) return res.send('erro de login, verifique login e senha')

    
    return res.json(userFound)
  },
  create: async (req, res) => {
    const {
      name,
      userName,
      companyName,
      password,
      email, 
      phoneNumber
    } = req.body

    const userAlreadyExists = await clientDB.findUserByUserName(userName)

    if (userAlreadyExists) return res.send("Usuário já existe.")

    

    return res.send('criado')
  } 
}
