const authService = require('../services/authService');

module.exports = (req, res, next) => {
   try {
      const token = req.headers.authorization.split(' ')[1];
      const user = authService.verifyToken(token);
      req.user = user;
      next();
   } catch (err) {
      res.status(401).json({ error: 'Unauthorized' });
   }
};

