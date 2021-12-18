import { web3 } from '@project-serum/anchor';

// CLI Properties Given to us
const candyMachineProgram = new web3.PublicKey(
  process.env.CANDY_MACHINE_PROGRAM
);

const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
  process.env.TOKEN_METADATA_PROGRAM_ID
);

const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new web3.PublicKey(
  process.env.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
);

export {
  candyMachineProgram,
  TOKEN_METADATA_PROGRAM_ID,
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
};