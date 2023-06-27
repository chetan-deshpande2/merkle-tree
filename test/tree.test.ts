import { expect } from 'chai';
import { ethers } from 'hardhat';
import { keccak256 } from 'ethers';
import { generateTree } from '../lib/merkleTree';

describe('MerkleProof', function () {
  it('should return valid Proof', async function () {
    const tree = await generateTree();
    const root = tree.getHexRoot();
    const [addr] = await ethers.getSigners();
    const hashedAddress = keccak256(addr.address);
    console.log(addr.address, hashedAddress);
    const proof = tree.getHexProof(hashedAddress);
    console.log(proof);
    const MerkleTree = await ethers.getContractFactory('MerkleTree');
    const merkleTree = await MerkleTree.deploy(root);
    expect(await merkleTree.verify(proof)).to.equal(true);
  });
});
