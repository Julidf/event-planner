class userController {
  constructor() { }

  getUser(req, res) {
    res.send('Soy el controller de usuario');
  }
}

export default userController;