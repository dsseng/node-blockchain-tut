class Block {
  constructor (options) {
    this.hashFunction = options.hashFunction
  }

  async hash (data, previousBlock) {
    this.previousBlock = previousBlock
    this.data = data
    this.index = this.previousBlock.index + 1
    this.timestamp = Date.now()

    let pack = this.index.toString() + ' ' + JSON.stringify(this.data) + ' ' + this.timestamp.toString() + ' ' + this.previousBlock.blockHash

    this.blockHash = this.hashFunction(pack)
    return this
  }
}

module.exports = Block
