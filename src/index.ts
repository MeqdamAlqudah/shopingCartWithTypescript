import * as _ from 'lodash';
import { getData } from './data';
import { getLikes } from './likesGetter';
import domFunctios from './addDataToDom';
  function component() {
    const element = document.createElement('div');
    getData((data)=>{
      getLikes(data,(items)=>{
        domFunctios.addToDom(items);
      })
    });
    return element;
    
  }

  document.body.appendChild(component());
