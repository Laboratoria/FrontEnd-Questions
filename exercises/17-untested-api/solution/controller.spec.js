const { loremIpsum } = require('lorem-ipsum')
const controller = require('./controller')

jest.mock('lorem-ipsum');

describe('/lorem controller', () => {
  it('should require a length', () => {
    const req = {
      body: {}
    }
    const res = {
      status: (code) => {
        expect(code).toBe(400)
        return {
          send: (response) => {
            expect(response).toBe('Length is required')
          }
        }
      }
    }

    controller(req,res)
  })

  it('should require a positive integer', () => {
    const req = {
      body: {
        length: -10
      }
    }
    const res = {
      status: (code) => {
        expect(code).toBe(400)
        return {
          send: (response) => {
            expect(response).toBe('Length must be positive integer')
          }
        }
      }
    }

    controller(req,res)
  })

  it('should require a number', () => {
    const req = {
      body: {
        length: 'test'
      }
    }
    const res = {
      status: (code) => {
        expect(code).toBe(400)
        return {
          send: (response) => {
            expect(response).toBe('Length must be a number')
          }
        }
      }
    }
    controller(req,res)
  })

  it('should respond with a single word', () => {
    loremIpsum.mockReturnValue('lorem')
    
    const req = {
      body: {
        length: 1
      }
    }
    const res = {
      status: (code) => {
        expect(code).toBe(200)
        return {
          send: (response) => {
              expect(response).toBe('lorem')
          }
        }
      }
    }
    controller(req,res)
  })
})