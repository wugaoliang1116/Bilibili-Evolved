import { NavbarComponent } from '../custom-navbar-component'
export class DarkMode extends NavbarComponent {
  constructor() {
    super()
    this.touch = false
    this.href = 'javascript:(bilibiliEvolved.settings.useDarkStyle = !bilibiliEvolved.settings.useDarkStyle)'
    addSettingsListener('useDarkStyle', value => {
      if (value) {
        this.html = /*html*/`<svg style="width: 18px" class="stroke" id="a20ed59c-32d2-4769-954f-0602e97eedf8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.96 47.96"><defs><style>.a364c9a4-cc27-4243-b763-ad92ece952af{stroke-linejoin:round;}.a364c9a4-cc27-4243-b763-ad92ece952af,.ac139620-7190-48fc-8944-d99840bf36f7{stroke-linecap:round;stroke-width:4px;}.ac139620-7190-48fc-8944-d99840bf36f7{stroke-miterlimit:10;}</style></defs><circle class="a364c9a4-cc27-4243-b763-ad92ece952af" cx="23.96" cy="24" r="10"/><line class="ac139620-7190-48fc-8944-d99840bf36f7" x1="23.96" y1="4" x2="23.96" y2="7"/><line class="ac139620-7190-48fc-8944-d99840bf36f7" x1="38.11" y1="9.86" x2="35.98" y2="11.98"/><line class="ac139620-7190-48fc-8944-d99840bf36f7" x1="43.96" y1="24" x2="40.96" y2="24"/><line class="ac139620-7190-48fc-8944-d99840bf36f7" x1="38.11" y1="38.14" x2="35.98" y2="36.02"/><line class="ac139620-7190-48fc-8944-d99840bf36f7" x1="23.96" y1="44" x2="23.96" y2="41"/><line class="ac139620-7190-48fc-8944-d99840bf36f7" x1="9.82" y1="38.14" x2="11.94" y2="36.02"/><line class="ac139620-7190-48fc-8944-d99840bf36f7" x1="3.96" y1="24" x2="6.96" y2="24"/><line class="ac139620-7190-48fc-8944-d99840bf36f7" x1="9.82" y1="9.86" x2="11.94" y2="11.98"/></svg>`
      } else {
        this.html = /*html*/`<svg style="width: 18px" class="stroke" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><style>.e1c42ff5-d2fc-4816-897c-4f24c16cbb01{stroke-linecap:round;stroke-linejoin:round;stroke-width:4px;}</style></defs><path class="e1c42ff5-d2fc-4816-897c-4f24c16cbb01" d="M30.32,31A13.32,13.32,0,0,1,22.37,7,16.66,16.66,0,1,0,41,25.63,13.29,13.29,0,0,1,30.32,31Z"/></svg>`
      }
    }, true)
  }
  get name(): keyof CustomNavbarOrders {
    return 'darkMode'
  }
}
export default {
  export: {
    DarkMode,
  }
}