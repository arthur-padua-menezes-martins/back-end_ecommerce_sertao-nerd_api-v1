import {
  IMiddleware,
  IHttpRequest, IHttpResponse,
  ISearchAccountByField
} from './auth-middleware-protocols'
import {
  AccessDeniedError
} from './add-survey-controller-errors'
import {
  ok, forbidden
} from './add-survey-controller-helpers'

export class AuthMiddleare implements IMiddleware {
  constructor (
    private readonly readAccount: ISearchAccountByField
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const accessToken = httpRequest.headers?.['x-access-token']

    if (accessToken) {
      const account = await this.readAccount.searchByField({ accessToken })

      if (account) {
        return ok({ account: { id: account.id } })
      }
    }

    return forbidden(new AccessDeniedError())
  }
}
