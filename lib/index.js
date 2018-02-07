"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loader_utils_1 = require("loader-utils");
var loader = function (contents) {
    var options = loader_utils_1.getOptions(this);
};
loader.pitch = function (remainingRequest) {
    var requireString = loader_utils_1.stringifyRequest(this, "!!" + remainingRequest);
    return "\n    const Icon = require(" + requireString + ").default\n\n    export default {\n      name: 'TestIcon',\n      props: {\n        scale: {\n        type: Number,\n          default: 1\n        }\n      },\n      data() {\n        return {\n          glyph: Icon\n        }\n      },\n      render: function(h) {\n        return h(\n          'svg', { \n            attrs: {\n              'aria-hidden': 'true',\n              fill: 'currentColor',\n              height: this.dimension,\n              width: this.dimension,\n            },\n          }, [\n            h('use', {\n              attrs: {\n                'xlink:href': \"#\" + this.glyph.id\n              }\n            }, [])\n          ]\n        ) \n      },\n      computed: {\n        dimension() {\n          return parseInt(this.glyph.viewBox.split(\" \")[2]) * Math.floor(this.scale)\n        }\n      }\n    }\n  ";
};
module.exports = loader;
