window.onload = () => {
  'use strict';

  if ('serviceWorkerContainer' in navigator) {
    // navigator.serviceWorker
    //          .register('./sw.js');
    navigator.serviceWorkerContainer.register('./sw.js').then(function(reg){
      console.log("SW registration succeeded. Scope is "+reg.scope);
    }).catch(function(err){
      console.error("SW registration failed with error "+err);
    });
  }
}
