export abstract class SuperClassAddSurveyController {
  public content: {
    validationTypes: string[]
  }

  public handleValidate: Function

  public generateTypes = ((types: string[], index: number): Function => {
    function * generateTypes (): Generator<string> {
      while (index < types.length) {
        yield types[index]
        index++
      }
    }

    return generateTypes
  })
}