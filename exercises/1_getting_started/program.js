const _ = require("lodash")

const worker = function(array) {
    // do work; return stuff
  return  _.filter(array, { 'active': true })

}

module.exports = worker
