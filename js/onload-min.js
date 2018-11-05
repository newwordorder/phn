"use strict";

// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method 
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();
}

if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
  (function (view) {
    'use strict';

    var DOMEx;
    var checkTokenAndGetIndex;
    var ClassList;
    var classListGetter;
    var classListPropertyDescriptor;

    if (!('Element' in view)) {
      return;
    } // Vendors: please allow content code to instantiate DOMExceptions


    DOMEx = function DOMEx(type, message) {
      this.name = type;
      this.code = DOMException[type];
      this.message = message;
    }; // Most DOMException implementations don't allow calling DOMException's toString()
    // on non-DOMExceptions. Error's toString() is sufficient here.


    DOMEx.prototype = Error.prototype;

    checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
      if (token === '') {
        throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
      }

      if (/\s/.test(token)) {
        throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
      }

      return [].indexOf.call(classList, token);
    };

    ClassList = function ClassList(elem) {
      var trimmedClasses = String.prototype.trim.call(elem.getAttribute('class') || '');
      var classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [];
      var len = classes.length;
      var i = 0;

      for (; i < len; i++) {
        this.push(classes[i]);
      }

      this._updateClassName = function () {
        elem.setAttribute('class', this.toString());
      };
    };

    ClassList.prototype = [];

    classListGetter = function classListGetter() {
      return new ClassList(this);
    };

    ClassList.prototype.item = function (i) {
      return this[i] || null;
    };

    ClassList.prototype.contains = function (token) {
      token += '';
      return checkTokenAndGetIndex(this, token) !== -1;
    };

    ClassList.prototype.add = function () {
      var tokens = arguments;
      var i = 0;
      var l = tokens.length;
      var token;
      var updated = false;

      do {
        token = tokens[i] + '';

        if (checkTokenAndGetIndex(this, token) === -1) {
          this.push(token);
          updated = true;
        }
      } while (++i < l);

      if (updated) {
        this._updateClassName();
      }
    };

    ClassList.prototype.remove = function () {
      var tokens = arguments;
      var i = 0;
      var l = tokens.length;
      var token;
      var updated = false;
      var index;

      do {
        token = tokens[i] + '';
        index = checkTokenAndGetIndex(this, token);

        while (index !== -1) {
          this.splice(index, 1);
          updated = true;
          index = checkTokenAndGetIndex(this, token);
        }
      } while (++i < l);

      if (updated) {
        this._updateClassName();
      }
    };

    ClassList.prototype.toggle = function (token, force) {
      var result;
      var method;
      token += '';
      result = this.contains(token);
      method = result ? force !== true && 'remove' : force !== false && 'add';

      if (method) {
        this[method](token);
      }

      if (force === true || force === false) {
        return force;
      } else {
        return !result;
      }
    };

    ClassList.prototype.toString = function () {
      return this.join(' ');
    };

    if (Object.defineProperty) {
      classListPropertyDescriptor = {
        'get': classListGetter,
        'enumerable': true,
        'configurable': true
      };

      try {
        Object.defineProperty(view.Element.prototype, 'classList', classListPropertyDescriptor);
      } catch (exception) {
        // IE 8 doesn't support enumerable:true
        if (exception.number === -0x7FF5EC54) {
          classListPropertyDescriptor.enumerable = false;
          Object.defineProperty(view.Element.prototype, 'classList', classListPropertyDescriptor);
        }
      }
    } else if (Object.prototype.__defineGetter__) {
      view.Element.prototype.__defineGetter__('classList', classListGetter);
    }
  })(self);
} else {
  // There is full or partial native classList support, so just check if we need
  // to normalize the add/remove and toggle APIs.
  (function () {
    'use strict';

    var testElement = document.createElement('_');
    var createMethod;
    var original;
    testElement.classList.add('c1', 'c2'); // Polyfill for IE 10/11 and Firefox <26, where classList.add and
    // classList.remove exist but support only one argument at a time.

    if (!testElement.classList.contains('c2')) {
      createMethod = function createMethod(method) {
        var original = DOMTokenList.prototype[method];

        DOMTokenList.prototype[method] = function (token) {
          var i;
          var len = arguments.length;

          for (i = 0; i < len; i++) {
            token = arguments[i];
            original.call(this, token);
          }
        };
      };

      createMethod('add');
      createMethod('remove');
    }

    testElement.classList.toggle('c3', false); // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
    // support the second argument.

    if (testElement.classList.contains('c3')) {
      original = DOMTokenList.prototype.toggle;

      DOMTokenList.prototype.toggle = function (token, force) {
        if (1 in arguments && !this.contains(token) === !force) {
          return force;
        } else {
          return original.call(this, token);
        }
      };
    }

    testElement = null;
  })();
}

jQuery(document).ready(function () {
  var scenes = Array.from(document.querySelectorAll('[data-scene="scene"]'));
  scenes.map(function (scene) {
    new Parallax(scene, {
      pointerEvents: true,
      relativeInput: true
    });
  });
  var tl = new TimelineMax();
  tl.set('#site-logo', {
    left: '-12rem'
  }).set('#toggleMenu', {
    right: '-6rem'
  }).set('.header__circle--primary', {
    left: '-32.25rem'
  }).set('.header__circle--accent', {
    top: '-67.75rem'
  }).set('.header__circle--dark', {
    top: '-188.875rem'
  }).to('.preloader-wrap', 0.6, {
    opacity: 0
  }).to('.header__circle--accent', 0.6, {
    top: '-57.75rem',
    ease: Power2.easeOut,
    delay: 0.4
  }).to('.header__circle--dark', 0.6, {
    top: '-178.875rem',
    ease: Power2.easeOut,
    delay: -0.5
  }).to('.header__circle--primary', 0.8, {
    left: '-12.25rem',
    ease: Power2.easeOut,
    delay: -0.7
  }).to('#site-logo', 0.6, {
    left: '2rem',
    ease: Power2.easeOut,
    delay: -0.4
  }).to('#toggleMenu', 0.6, {
    right: '2rem',
    ease: Power2.easeOut,
    delay: -0.6
  }).set('.preloader-wrap', {
    display: 'none'
  });
});
$(".toggle-menu").click(function () {
  if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    document.querySelector('.toggle-menu').classList.toggle('is-active');
  } else {
    $(".toggle-menu").toggleClass("is-active");
  }
});

//# sourceMappingURL=onload-min.js.map
