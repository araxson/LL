import HttpException from './HttpException';

class AuthorizationException extends HttpException {
  constructor(message: string) {
    super(403, message);
  }
}

export default AuthorizationException;
