import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas, verifique usuário e senha.'],
      });
    }

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe.'],
      });
    }

    const validPass = await user.passwordIsValid(password);

    if (!validPass) {
      console.log('Caiu no passwordIsValid');
      console.log(validPass); // devtest
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }
    console.log(validPass); // devtest

    const { id } = user;

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
