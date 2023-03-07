import { describe, it, expect } from 'vitest'
import { say } from './server'
describe('Server tests', () => {
    it('Server says hello', () => {
        expect(say('hello')).to.be.true
    })
})