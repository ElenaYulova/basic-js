const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value !== undefined ? `( ${value} )` : '( )');
    return this;
  },
  removeLink(position) {
    if (position > 0 && typeof position === 'number' && Number.isInteger(position) && position < this.chain.length) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw Error(`You can't remove incorrect link!`);
    }

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const fin = this.chain.join('~~');
    this.chain = [];
    return fin;
  },
};

module.exports = {
  chainMaker,
};
