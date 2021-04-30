import { makeObservable, observable, action } from 'mobx';

import { getAllOrganisations } from '../../connections/DatabaseService';

class Store {
  ddpos = [];

  constructor() {
    makeObservable(this, {
      ddpos: observable,
      loadDdpos: action,
      addDdpo: action,
    });
  }

  async loadDdpos() {
    const response = await getAllOrganisations();
    if (response && response.data && response.data.data) {
      this.ddpos = response.data.data;
    }
  }

  addDdpo(ddpo) {
    this.ddpos.push(ddpo);
  }

  getDdpos() {
    return this.ddpos;
  }
}

const DDPOStore = new Store();
export default DDPOStore;
