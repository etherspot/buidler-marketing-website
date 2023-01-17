import { ReactComponent as Arrow} from "../../assets/etherspotArrow.svg"
// import { Etherspot } from "@etherspot/react-transaction-buidler";

export const Hero = () => {
  return (
    <div className="mx-auto min-h-[100vh] flex justify-center items-center relative text-black dark:text-white">
      <div className="flex justify-between mx-auto md:w-[85%] w-[95%] md:flex-row flex-col relative">
        <div className="md:w-1/2 w-full relative px-4 pt-16 md:mb-0 mb-[30px]">
          <h1 className="md:text-7xl text-4xl font-semibold mb-16">
            BUIDLer for Web3 builders
          </h1>
          <div className="text-[18px] md:w-4/6 w-5/6 mb-12">
            <h3 className="mb-6">
              Give Your dApp Cutting Edge Account Abstraction Super-Powers
            </h3>
            <p className="text-[#8E8EA8]">
              Implement BUIDLer, a free, plug & play, solution that you can
              easily drop into your dApp and take it to the top level.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="md:text-2xl text-[18px]">Feel the magic</p>
            <Arrow />
          </div>
        </div>
        <div className="md:w-1/2 w-full relative">
            <div className="custom-background-card md:min-h-[90vh] min-h-[50vh] p-6 flex flex-col items-center">
                <h2 className="text-center text-[36px] mb-6">BUIDLer React Component</h2>
                {/* <div><Etherspot /></div> */}
            </div>
        </div>
      </div>
    </div>
  );
};
