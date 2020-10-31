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
    this.ddpos = await getAllOrganisations();
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
