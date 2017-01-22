
describe('Controller: Home', () => {
  let $componentController

  beforeEach(angular.mock.module('app'))

  beforeEach(angular.mock.inject(_$componentController_ => {
     $componentController = _$componentController_
  }))

  it('name is initialized to Home', () => {
    let bindings = { }
    let $ctrl = $componentController('home', null, bindings)
    expect($ctrl.name).toBe('Home')
  })

})
