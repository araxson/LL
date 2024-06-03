import HttpException from './HttpException';

class AuthenticationException extends HttpException {
  constructor(message: string) {
    super(401, message);
  }
}

export default AuthenticationException;
