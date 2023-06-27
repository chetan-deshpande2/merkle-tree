import { MerkleTree } from 'merkletreejs';
import { keccak256 } from 'ethers';

export async function generateTree(): Promise<MerkleTree> {
  let allowList = [
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    '0xb0bD02F6a392aF548bDf1CfAeE5dFa0EefcC8EaB',
    '0x9Ede8E74ec6C93a446D4c33a7CBb3580247f8434',
    '0x1994c11D23f535C819056c2C2d7D92C529AA4d0B',
  ];

  const leaves = allowList.map((address) => keccak256(address));

  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

  const root = tree.getHexRoot();
  console.log('\nMerkleRoot', root);
  console.log('\nMerkleTree\n', tree.toString());

  return tree;
}

generateTree();
