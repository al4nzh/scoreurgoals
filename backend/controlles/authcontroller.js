const usersService = require('../services/usersService');
const authService = require('../services/authService');

exports.register = async (req, res, next) => {
   try {
      const { email, password, firstName, lastName } = req.body;
      if (!email || !password || !firstName || !lastName || password.length < 6) {
         return res.status(400).json({ error: 'Invalid input' });
      }
      const user = await usersService.registerUser(email, password, firstName, lastName);
      res.status(200).json(user);
   } catch (err) {
      next(err);
   }
};

exports.login = async (req, res, next) => {
    try {
       const { email, password } = req.body;
       if (!email || !password) return res.status(400).json({ error: 'Invalid input' });
       const user = await usersService.loginUser(email, password);
       const token = authService.generateToken({ email });
       res.status(200).json({ user, token });
    } catch (err) {
       next(err);
    }
 };
