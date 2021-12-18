# README

## Dependencies

- ts-node installed globally
- solana installed

## Solana setup

In order to start developing on the devnet:

- install solana
- Run ```solana config set --url https://api.devnet.solana.com```
- Run ```solana config get```

In order to get metaplex running:

- Clone the repo: ```git clone --branch v1.0.0 https://github.com/metaplex-foundation/metaplex.git ~/github/resources/metaplex-foundation/metaplex```
- Install preemptively any needed dependencies for m1 chip: [see here](https://docs.metaplex.com/create-store/installation)
- Install dependencies at the target directory: ```yarn install --cwd ~/github/resources/metaplex-foundation/metaplex/js```

## NFT Setup

- See Metaplex [metadata docs](https://docs.metaplex.com/nft-standard#json-structure)