## CarbonNFT Protocol

Mint an NFT credit card. Use it to take out NFT-Collateralised UST stablecoin loans. All on Harmony mainnet.

![alt text](https://raw.githubusercontent.com/neutrinoEater/CarbonNFT/main/public/Screenshot%202021-09-30%20at%208.31.08%20PM.png)

CarbonNFT Protocol lets you:
1. Mint a unique CarbonNFT card for each address to use as collateral;
2. Provides a P2P platform for NFT-collateralised loans. Collateral can be CarbonNFT cards or any other NFT.

Functional contracts deployed on Harmony MAINNET. Contract Addresses:

CarbonNFT address: `0x2B67D5866Ae9e7993b34d1eB206f04B8c59e036d`[https://explorer.testnet.harmony.one/address/0x2b67d5866ae9e7993b34d1eb206f04b8c59e036d]

CarbonLending address: `0xCd078Ab738101FAe4A715079F6BFFdB2479Ed984` [https://explorer.harmony.one/address/0xcd078ab738101fae4a715079f6bffdb2479ed984]

**For the first time in DeFi, users can take out Unsecured Loans, akin to a TradFi credit cards/P2P/Personal lending.**

This is made possible by linking a unique, 'credit card NFT' to each address. This card then represents the addresses' *goodwill* or *reputation*, and can be used as collateral to borrow funds in UST on the CarbonLending Platform. Failure to repay leads to permanent loss of the card and (just like TradFi) - an inability to take future loans.

*Summary:*

**CarbonNFT credit cards enable users to use their addresses' transaction history as a credit scoring mechanism.**

CarbonNFT is the first ever DeFi Credit card, that lets users take stablecoin (UST) loans by locking up their CarbonNFT as collateral. Each address can mint a CarbonNFT only once; If you default & lose your CarbonNFT, you cannot take a loan again. Carbon NFT loans are anonymous and dont create any legal obilgations between parties. Instead all incentives and penalties are designed into the protocol itself.

CarbonLending is a Decentralised Finance (DeFi) protocol for NFT-collateralised loans, and NFT lending.  CarbonLending allows peer-to-peer NFT-collateralised loans using any HRC721 NFT, on Harmony Mainnet.

 How to get a UST loan using Carbon Credit NFT:
 [Best used with Harmony Explorer]

 1. Claim your CarbonNFT on harmony explorer. Video demo-https://youtu.be/Av1iiMBlvY4
 2. Create a loan request on CarbonLending, specifying loan duration and interest you're willing to pay.
 3. Someone evaluates your address tx. history and decides to accept your LoanRequest
 4. You recieve the UST in your wallet! Enjoy your credit responsibly.
 5. Pay back the loan with the promised interest any time before the end of the loan period - use the EndRequest Functionality.

Vide

Contracts:

CarbonLending.sol allows you to:

1. Lock up any ERC721 token as collateral for a loan request.
In particular, even if you don't have an NFT, you can claim your one-time carbon credit NFT, and use it as collateral. This is similar conceptually to using your credit card to get loans -> you can spend money you don't have, but if you fail to repay, you lose the card and the ability to borrow further in the future. However in this case, the credit scoring information (i.e. the tx. history of the person) is public information (visible on the blockchain). This allows any member of the public to conducted their own credit assessment of any address before giving out a P2P loan.
2. Setup loan request parameters, including loan amount, interest amount, and maximum interest periods
3. After loan is funded, you can extend the loan period upto the maximum interest periods
4. Upon repayment of the loan with interest within the time specified, the LoansNFT.sol contract releases your NFT back to you
5. If you fail to repay the loan within the promised time, the NFT collateral is transferred to the creditor


## Replicating Credit Cards from TradFi

Only a small fraction of the world are banked and have access to easy credit. Many people even earning $50-500k+ in crypto are still unable to access unsecured credit, as banks preferentially issue credit cards only in first world countries, upon production of job & educational documents, etc.

CarbonNFT aims to allow each person in the world to use their crypto wallet transaction history as a credit score, to access credit on the same fair and anonymous terms globally.

 Previously, crypto addresses with even millions of dollars in tx. volume couldn't be trusted with a few thousand USD of unsecured credit - simply because *they have nothing to lose* by not returning the loan, apart from an abstract notion of reputation. CarbonNFT makes this notion very explicit -
1. By allowing each address to mint a CarbonNFT only once; And
2. By linking each CarbonNFT URI to the address, making them non-transferable (i.e. I cannot use CarbonNFT linked to your address to get credit, just as I cannot use your credit card in real life)
3. By transferring the credit card to the lender in case you default on the loan. In such an event the only way to get your credit card back is to satisfy the lender outside of the protocol and have them voluntarily send back the NFT.

CarbonNFT thus ensures that borrowers have *something to lose* when they fail to repay an unsecured loans.
CarbonNFT has a peculiar form of value also found in fiat credit cards-
- A CarbonNFT is quite valueable to its original holder as a means to access credit - and its value is directly proportional to the accounts tx. history and volume - as it corresponds to *the amount of credit that can be accessed by the CarbonNFT*. The value of the carbonNFT to the owner is based on the lifetime value of loans it can obtain. Formally -
`CarbonNFT(Value[Owner]) = Sum(CarbonLending[LoanValue][CarbonNFT[Owner]])`

- For Example - a CarbonNFT belonging to a wallet with say $1 Million in transactions over 2 years carries high value to the owner, as it signifies good credit and is hard to rebuild. Such an address can use its CarbonNFT to access larger loans - maybe 50-100k USD, as lenders know how valuable the CarbonNFT is to the original owner, he/she is unlikely to default and lose the NFT.

- Similarly, in TradFi a bank determines the size of your credit line based on your spending and earning history. CarbonNFT decentralises this process of computing someone's credit score, and excludes irrelevant and discriminatory variables, such as Name, age, nationality, gender, race etc. which banks often ask for. Instead, CarbonNFT loans are evaluated based solely on the (anon) transaction history of the applicant.

- CarbonNFT is a new crypto-identity primitive that allows us to *penalise only a specific person, without knowing their real world identity* - by burning/moving the token. This enables users to take out unsecured credit for the first time in DeFi- as like TradFi, now the possibility of damaging sanctions will ensure that a large majority of users return their loans.

- A CarbonNFT, like a real world credit card, carries very little value to anybody except the original owner. The only value it has is as a bargaining chip with the original owner, to encourage repayment of a debt etc.

CarbonLending includes a Work-In-Progress frontend as well. It is buggy and not fully functional, but gives an idea of what an interface would be like. See NPM commands below.




This project is a heavily modified fork of CFY.finance, a NFT lending platform built & under active development by us(https://www.youtube.com/watch?v=xPK_FzsnIBI). First, CarbonLending ports the P2P NFT lending functionality to Harmony, and changes the native currency to Harmony Wrapped UST instead of the chain native token, to allow predictable loan and interest repayments. Second, CarbonNFT credit cards are a brand new innovation we've come up with, for use with CarbonLending. The scalability of the Harmony chain makes it ideal for running complicated smart contracts like CarbonLending cheaply.



*From CFY.Finance Project*

NFTs is a fast growing market that is currently plagued with extreme lack of liquidity. Moreover, unlike ERC20 tokens, holders of ERC721 NFT tokens do not have any way to earn passive income/access liquidity from their holdings. In this way, we allow a peer to peer, trustless liquidity protocol where investors can gain interest on their funds while their principal is secured by valuable NFTs. Meanwhile, NFT hodlers can access liquidity as needed without having to sell/risk their precious NFTs. *CFY.FINANCE* is also the first trustless NFT application.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
