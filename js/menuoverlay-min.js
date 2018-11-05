"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShapeOverlays =
/*#__PURE__*/
function () {
  function ShapeOverlays(elm) {
    _classCallCheck(this, ShapeOverlays);

    this.elm = elm;
    this.path = elm.querySelectorAll('path');
    this.numPoints = 4;
    this.duration = 800;
    this.delayPointsArray = [];
    this.delayPointsMax = 120;
    this.delayPerPath = 20;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }

  _createClass(ShapeOverlays, [{
    key: "toggle",
    value: function toggle() {
      this.isAnimating = true;
      var range = Math.random() * Math.PI * 2;

      for (var i = 0; i < this.numPoints; i++) {
        var radian = i / (this.numPoints - 1) * Math.PI * 2;
        this.delayPointsArray[i] = (Math.sin(radian + range) + 1) / 2 * this.delayPointsMax;
      }

      if (this.isOpened === false) {
        this.open();
      } else {
        this.close();
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.isOpened = true;
      this.elm.classList.add('is-opened');
      this.timeStart = Date.now();
      this.renderLoop();
    }
  }, {
    key: "close",
    value: function close() {
      this.isOpened = false;
      this.elm.classList.remove('is-opened');
      this.timeStart = Date.now();
      this.renderLoop();
    }
  }, {
    key: "updatePath",
    value: function updatePath(time) {
      var points = [];

      for (var i = 0; i < this.numPoints; i++) {
        points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100;
      }

      var str = '';
      str += this.isOpened ? "M 0 0 V ".concat(points[0], " ") : "M 0 ".concat(points[0], " ");

      for (var i = 0; i < this.numPoints - 1; i++) {
        var p = (i + 1) / (this.numPoints - 1) * 100;
        var cp = p - 1 / (this.numPoints - 1) * 100 / 2;
        str += "C ".concat(cp, " ").concat(points[i], " ").concat(cp, " ").concat(points[i + 1], " ").concat(p, " ").concat(points[i + 1], " ");
      }

      str += this.isOpened ? "V 0 H 0" : "V 100 H 0";
      return str;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.isOpened) {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
        }
      } else {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
        }
      }
    }
  }, {
    key: "renderLoop",
    value: function renderLoop() {
      var _this = this;

      this.render();

      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
        requestAnimationFrame(function () {
          _this.renderLoop();
        });
      } else {
        this.isAnimating = false;
      }
    }
  }]);

  return ShapeOverlays;
}();

(function () {
  var elmHamburger = document.querySelector('.hamburger');
  var gNavItems = document.querySelectorAll('.global-menu__item');
  var elmOverlay = document.querySelector('.shape-overlays');
  var overlay = new ShapeOverlays(elmOverlay);
  elmHamburger.addEventListener('click', function () {
    elmHamburger.classList.toggle("is-active");

    if (overlay.isAnimating) {
      return false;
    }

    overlay.toggle();

    if (overlay.isOpened === true) {
      elmHamburger.classList.add('is-opened-navi');

      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.add('is-opened');
      }
    } else {
      elmHamburger.classList.remove('is-opened-navi');

      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove('is-opened');
      }
    }
  });
})();

//# sourceMappingURL=menuoverlay-min.js.map
