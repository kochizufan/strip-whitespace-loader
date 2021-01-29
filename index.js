'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var StripWhitespace = _interopDefault(require('strip-whitespace'));

var stripWhitespace = new StripWhitespace();
function index (content) {
    if (content) {
        var result = stripWhitespace.strip(content);
        if (result && result.replacements && result.replacements.length > 0) {
            return result.code;
        }
    }
    return content;
}

module.exports = index;
//# sourceMappingURL=index.js.map
