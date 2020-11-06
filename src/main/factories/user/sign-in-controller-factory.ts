import { IController, SignInController } from './import-all'
import { accountValidation } from './geral/account-validation-factory'
import { accountAuthentication } from './sign-in/sign-in-controller-authentication-account-factory'
import { makeLogErrorControllerDecorator } from '../decorators/log/error/log-error-controller-decorator-factory'

export const makeSignInController = (): IController => {
  return makeLogErrorControllerDecorator(
    new SignInController(
      accountValidation,
      accountAuthentication
    )
  )
}