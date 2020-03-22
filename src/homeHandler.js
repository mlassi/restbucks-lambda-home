'use strict'

const logger = require('lambda-log')

exports.handler = async function (event) {
  logger.info(`recieved event ${JSON.stringify(event)}`)

  return {
    statusCode: 200,
    body: 'Welcome to Restbucks Coffee Shop!'
  }
}
