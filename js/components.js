(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'categories.html',
    bindings: {
      items: '<'
    }
  });

})();

(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'items.html',
    bindings: {
      items: '<'
    }
  });
})();
