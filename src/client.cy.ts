import { Peer } from './peer'

describe('Client tests', () => {
    it('Client generates an id when created', () => {
        const peer = new Peer()
        expect(peer.id).to.be.a('string')
    })
})