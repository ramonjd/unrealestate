const INIT = new WeakMap()
const SERVICE = new WeakMap()
export default class HomeController {
  constructor(searchProperties) {
    this.name = 'Home'
    searchProperties.getProperties()
    SERVICE.set(this, searchProperties)
    // INIT.set(this, () => {
    //   SERVICE.get(this).getProperties().then(properties => {
    //     this.properties = properties
    //   });
    // });
    //
    // INIT.get(this)()
  }
  $onInit() {
      SERVICE.get(this).getProperties().then(properties => {
        console.log(properties)
        this.results = properties.tieredResults[0].results
      })
  }
}
