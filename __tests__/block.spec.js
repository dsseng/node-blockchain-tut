import hashUtils from '../src/hash-utils'
import Block from '../src/block'

describe('Block', () => {
  it('should create new blocks', () => {
    expect(new Block({ hashFunction: hashUtils.sha256 })).toBeDefined()
  })

  it('should hash blocks using hashFunction', () => {
    let myBlock = new Block({ hashFunction: x => x /* no hashing for test */ })
    myBlock.hash({ hello: 'world' }, { blockHash: '', index: 0 })
      .then(b => {
        expect(b.blockHash).toEqual(expect.stringContaining('1 {"hello":"world"}'));
      })
  })
})

