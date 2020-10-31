import { Router } from 'express'
import { expressRouteAdapter } from '../adapters/express/express-route-adapter'
import { makeSignUpController } from '../factories/sign-up-controller-factory'

export default (router: Router): void => {
  router.post('/signup', expressRouteAdapter(makeSignUpController()))
}
