const {sign, verify} = require('../lib/jwt')

function Auth() {
  this.checkData = async (req,res,next) => {
    let b = req.body;

    if (b.username != 'admin' || b.password != '00000') return res.json({ status: 403, message: "Username / password is not valid !"})

    let token = await sign({ username : b.username})
    return res.json({
      status: 200,
      message: 'Authentication successfull !',
      token: token
    })
  }
}

module.exports = exports = Auth