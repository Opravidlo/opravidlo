/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/demo/ts/interface-utils.ts":
      /*!****************************************!*\
  !*** ./src/demo/ts/interface-utils.ts ***!
  \****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ copy: () => /* binding */ copy,
          /* harmony export */
        });
        var copyToClipboard = function (str) {
          var el = document.createElement("textarea");
          el.value = str;
          el.setAttribute("readonly", "");
          el.style.position = "absolute";
          el.style.left = "-9999px";
          document.body.appendChild(el);
          el.select();
          document.execCommand("copy");
          document.body.removeChild(el);
        };
        var copy = function (tinymce) {
          $("#copy").on("click", function () {
            copyToClipboard(tinymce.activeEditor.getContent({ format: "text" }));
          });
        };

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!*****************************!*\
  !*** ./src/demo/ts/Demo.ts ***!
  \*****************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _interface_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./interface-utils */ "./src/demo/ts/interface-utils.ts"
    );

    // Delete in production
    // Plugin();
    // if (!localStorage.getItem('content')) {
    //   localStorage.setItem(
    //     'content',
    //     '<p>Testovacý věta, dost hrubá chiba. Tohle je mé město brno. Tohle je take hruba chiba?</p>',
    //   );
    // }
    if (!localStorage.getItem("content")) {
      localStorage.setItem("content", "<p></p>");
    }
    tinymce.init({
      selector: "textarea.tinymce",
      keep_styles: false,
      forced_root_block_attrs: {
        "data-pk-init": true,
      },
      content_style: "@import url('https://fonts.googleapis.com/css2?family=Varta&display=swap'); body { font-family: Varta; }; ",
      plugins: "code plinkorektor paste",
      paste_as_text: true,
      resize: false,
      width: "100%",
      height: "100%",
      statusbar: false,
      menubar: "korektor",
      toolbar: "undo redo",
      menu: {
        korektor: { title: "Korektor", items: "pk-tagger pk-spellchecker" },
      },
      valid_elements: "*[*]",
      draggable_modal: true,
    });
    $(function () {
      if (window.location.hash.substr(1) !== "test") {
        $(".delete-content-container").html(
          '\n        <button\n          type="button"\n          class="button to-disable editor-button"\n          data-toggle="modal"\n          data-target="#deleteModal"\n        >Vymazat obsah\n        </button>\n     '
        );
      } else {
        $(".delete-content-container").html(
          '\n        <button\n          id="delete-content" \n          type="button"\n          class="button to-disable editor-button"\n        >Vymazat obsah\n        </button>\n     '
        );
      }
      (0, _interface_utils__WEBPACK_IMPORTED_MODULE_0__.copy)(tinymce);
      $(document).on("click", ".toggler", function (e) {
        $(".suggestions").hide();
        $(".editor-container").addClass("expanded");
        $(".toggler")
          .addClass("toggler--close")
          .html(
            '<img data-toggle="tooltip" data-placement="top" title="Zobrazit seznam chyb"  src="assets/icons/collapse-left.svg" alt="Left Arrow" />'
          );
      });
      $(document).on("click", ".toggler--close", function (e) {
        $(".suggestions").fadeIn(500);
        $(".editor-container").removeClass("expanded");
        $(".toggler")
          .removeClass("toggler--close")
          .html(
            '<img data-toggle="tooltip" data-placement="top" title="Skrýt seznam chyb" src="assets/icons/collapse-right.svg" alt="Right Arrow" />'
          );
      });
    });
  })();

  /******/
})();
//# sourceMappingURL=demo.js.map
