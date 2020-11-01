import { makeObservable, observable, action } from 'mobx';

import { getAllOrganisations } from '../../connections/DatabaseService';

class store {
  ddpos = [];

  constructor() {
    makeObservable(this, {
      ddpos: observable,
      loadDdpos: action,
      addDdpo: action,
    });
  }

  async loadDdpos() {
    const resopnse = await getAllOrganisations();
    if (response && response.data && response.data.data) {
      this.ddpos = response;
    }
  }

  addDdpo(ddpo) {
    this.ddpos.push(ddpo);
  }

  getDdpos() {
    return this.ddpos;
  }
};

const DDPOStore = new store();
export default DDPOStore;
