export const Batching = () => {
  return (
    <div className="relative" id="batching">
      <div className="md:w-[85%] w-[95%] mx-auto py-8">
        <h2 className="text-center text-[32px] mb-16">
          Transaction batching use-cases
        </h2>
        <div className="flex justify-center relative items-start flex-wrap">
          <div className="md:w-1/2 w-full md:border-r-[1px] md:pr-16 border-[#2E2E4A] py-6">
            <h3 className="text-2xl mb-9">Multi-Call Batching</h3>
            <div className="text-[18px]">
              <p className="text-gray-500 mb-6">
                This type of batching allows you to merge several transactions
                in one and keep them sequential
              </p>
              <h4 className="mb-6">
                Example:{" "}
                <span className="underline">Cross-chain Stake into sKlima</span>
              </h4>
              <p className="text-gray-500 mb-6">
                We facilitate cross-chain staking into the Klima smart contract
                in just 3 steps which would normally be 9 steps on 3 different
                dapps.
              </p>
              <h4 className="mb-4">What is happening in the background?</h4>
              <ol className="list-decimal px-5 mb-6">
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
          <div className="md:w-1/2 w-full md:pl-16 py-6">
            <h3 className="text-2xl mb-9">Transaction Bundling</h3>
            <div className="text-[18px]">
              <p className="text-gray-500 mb-6">
                This type of batching allows you to merge several transactions
                in one without following in sequence
              </p>
              <h4 className="mb-6">Example: Multi asset exchange</h4>
              <p className="text-gray-500 mb-6">
                - multiple tokens to multiple tokens
                <br />
                - one token to multiple tokens
                <br />- multiple tokens to one token
              </p>
              <p className="text-gray-500 mb-6">
                Normally, a user would have to swap each token separately and
                perform many steps.
              </p>
              <ol className="list-decimal px-5 mb-6">
                <li>Swap UNI to MATIC</li>
                <li>Swap ETH to AAVE</li>
                <li>Swap SNX to KLIMA</li>
                <li>Swap USDT to USDC</li>
                <li>Swap DAI to PLR</li>
              </ol>
              <p>5 swaps in a single a transaction with 1 click.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
