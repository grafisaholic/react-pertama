const jwt = require('jsonwebtoken')
let _password = 'astaganaga__'

exports.sign = async (payload) => {
  return new Promise((resolve, reject) => {
    console.log(payload)

      jwt.sign(payload, _password, {
          expiresIn: '30d',
          subject: 'dev@grafisaholic.com',
          audience: 'Client_Identity',
          issuer: 'Authorizaxtion/Resource/This server'
      }, (err, token) => {
          if (err) return console.log(err)
          return resolve(token)
      })
  })
}

exports.verify = async (token) => {
  return new Promise((resolve, reject) => {
      jwt.verify(token, _password, (err, decoded) => {
          if (decoded) {
              return resolve(decoded)
          } else {
              return resolve(null)
          }
      })
  })
}

