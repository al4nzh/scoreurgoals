const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

class AuthService {
   static generateToken(payload) {
      return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
   }

   static verifyToken(token) {
      try {
         return jwt.verify(token, SECRET_KEY);
      } catch (err) {
         throw new Error('Invalid token');
      }
   }
}

module.exports = AuthService;
