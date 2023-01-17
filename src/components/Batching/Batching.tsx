export const Batching = () => {
  return (
    <div className="relative">
      <div className="w-[85%] mx-auto py-8">
        <h2 className="text-center text-[32px] mb-16">
          Transaction batching use-cases
        </h2>
        <div className="flex justify-center relative items-start">
          <div className="w-1/2 border-r-[1px] pr-16 border-[#2E2E4A] py-6">
            <h3 className="text-2xl mb-9">Multi-Call Batching</h3>
            <div className="text-[18px]">
              <p className="text-gray-500 mb-6">
                This type of batching allows you to merge several transactions
                in one and keep them sequential
              </p>
              <h4 className="mb-6">
                Example: <span className="underline">Cross-chain Stake into sKlima</span>
              </h4>
              <p className="text-gray-500 mb-6">
                We facilitate cross-chain staking into the Klima smart contract
                in just 3 steps which would normally be 9 steps on 3 different
                dapps.
              </p>
              <h4 className="mb-4">What is happening in the background?</h4>
              <ol className="list-decimal px-4 mb-6">
                <li>Swapping USDC to MATIC.</li>
                <li>Swapping USDC to KLIMA.</li>
                <li>Deploying the Smart Wallet.</li>
                <li>Staking KLIMA to receive sKLIMA.</li>
                <li>
                  Sending sKLIMA back to the keywallet address{" "}
                  <span className="text-gray-500">(e.g. Metamask)</span>
                </li>
              </ol>
              <p className="text-gray-500">
                All in a single transaction on the destination chain, without
                switching RPC networks and with no need to have the native gas
                token.
              </p>
            </div>
          </div>
          <div className="w-1/2 pl-16 py-6">
            <h3 className="text-2xl mb-9">Transaction Bundling</h3>
            <div className="text-[18px]">
              <p className="text-gray-500 mb-6">
                This type of batching allows you to merge several transactions
                in one without following in sequence
              </p>
              <h4 className="mb-6">Example: Multi asset exchange</h4>
              <p className="text-gray-500">
                - multiple tokens to multiple tokens
                <br />
                - one token to multiple tokens
                <br />- multiple tokens to one token
              </p>
              <p className="text-gray-500 mb-6">
                Normally, a user would have to swap each token separately and
                perform many steps.
              </p>
              <p className="text-gray-500 mb-6">
                Supported chains: Ethereum Mainnet | Polygon | Gnosis Chain |
                Binance Smart Chain | Fantom| Moonbeam | Aurora | Avalanche |
                Arbitrum One | Arbitrum Nova | Optimism | Celo | Fuse | Neon
                Labs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
