// import
// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'
// import * as map from './mapview/index.js'
import './vehicleview'
import './analysisview'
import './controlpanel'

// import all images
const requireContext = require.context('./image', true, /^\.\/.*\.svg$/)
requireContext.keys().map(requireContext)

window.onbeforeunload = function (e) {
    e.preventDefault()
    return '离开可能会导致未保存的数据丢失'
}
