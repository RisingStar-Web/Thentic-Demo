import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Content from "../../components/Content";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { getContracts, mintNFT } from "../../utils/apis";
import { networks } from "../../utils/networks";

export default function Contracts() {
  const [contracts, setContracts] = useState();
  const [mintContract, setMintContract] = useState({});
  const [network, setNetwork] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [tokenId, setTokenId] = useState("");
  const [tokenData, setTokenData] = useState("");
  const [to, setTo] = useState("");
  const [buttonStatus, setButtonStatus] = useState("Mint");

  const approve = (link) => {
    window.open(link, "_blank");
  };

  const openMintDialog = (contract) => {
    setMintContract(contract);
    setShowModal(true);
  };

  const mint = async () => {
    setButtonStatus("Minting...");
    mintNFT({
      chain_id: parseInt(network),
      contract: mintContract?.contract,
      nft_id: tokenId,
      nft_data: tokenData,
      to: to,
    }).then((res) => {
      console.log({ res });
      setShowModal(false);
      setButtonStatus("Create");
      setTo("");
      setTokenData("");
      setTokenId("");
    });
    setShowModal(false);
  };

  useEffect(() => {
    getContracts(network).then((res) => setContracts(res?.data?.contracts));
  }, [network]);

  return (
    <Content>
      <div className="flex flex-col mb-10">
        <h1>Select Network</h1>
        <Select
          placeholder="Select One Network"
          options={networks}
          value={network}
          onChange={(e) => setNetwork(e.target.value)}
        />
      </div>
      {contracts && (
        <table class="table-auto text-white border-collapse border border-slate-500">
          <thead>
            <tr className="">
              <th class="p-3 border border-slate-600"> Chain ID</th>
              <th class="p-3 border border-slate-600">Name</th>
              <th class="p-3 border border-slate-600">Symbol</th>
              <th class="p-3 border border-slate-600">Contract</th>
              <th class="p-3 border border-slate-600">Status</th>
              <th class="p-3 border border-slate-600"></th>
            </tr>
          </thead>
          <tbody className="">
            {contracts?.map((contract, index) => (
              <tr key={index}>
                <td class="p-3 border border-slate-700">
                  {contract?.chain_id}
                </td>
                <td class="p-3 border border-slate-700">{contract?.name}</td>
                <td class="p-3 border border-slate-700">
                  {contract?.short_name}
                </td>
                <td class="p-3 border border-slate-700 text-center">
                  {contract?.contract ? contract?.contract : "-"}
                </td>
                <td class="p-3 border border-slate-700">{contract?.status}</td>
                <td class="p-3 border border-slate-700 text-center">
                  {" "}
                  {contract?.status === "success" ? (
                    <Button
                      name="Mint"
                      onClick={() => openMintDialog(contract)}
                    />
                  ) : (
                    <Button
                      onClick={() => approve(contract?.transaction_url)}
                      name="Approve"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Mint NFT</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col gap-2">
                  <Input
                    placeholder="000"
                    label="Token ID"
                    value={tokenId}
                    onChange={(e) => setTokenId(e.target.value)}
                  />
                  <Input
                    placeholder="https://ipfs..."
                    label="Token URI"
                    value={tokenData}
                    onChange={(e) => setTokenData(e.target.value)}
                  />
                  <Input
                    placeholder="0x000..."
                    label="TO"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => mint()}
                  >
                    {buttonStatus}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </Content>
  );
}
