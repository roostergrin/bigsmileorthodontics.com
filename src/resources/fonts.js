/* eslint-disable */

// ----------------------------
// to learn more about importing => https://github.com/typekit/webfontloader
// ----------------------------

var WebFont = require('webfontloader')

const fonts = () => {
  WebFont.load({
    google: {
      families: [ 'Roboto:300,400,500,700' ]
    }
  })
}

export default fonts()
/* eslint-enable */
