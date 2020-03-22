'use strict'

const homeHandler = require('../src/homeHandler')

describe('home handler', () => {
  it('should return welcome message', async () => {
    const actual = await homeHandler.handler({})

    expect(actual).toEqual({
      statusCode: 200,
      body: 'Welcome to Restbucks Coffee Shop!'
    })
  })
})
