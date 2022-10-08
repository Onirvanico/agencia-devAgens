
import PacoteService from '../services/PacoteService'


class PromotionController {
    
    constructor(component) {
      this.pacotesPromise = new PacoteService().getAll;
      this.component = component;
    }

    createListPromotionComponent() {
        this.pacotesPromise.then(resp => {
          this.listComponents = resp;
          console.log("RESP", resp);
        });
        
    }

    getListComponents() {
       console.log("Lista", this.listComponents);
        return this.listComponents;
    }
    

}

export default PromotionController