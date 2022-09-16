import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Content from "../../components/Content";
import Select from "../../components/Select";
import { getNFTs } from "../../utils/apis";
import { networks } from "../../utils/networks";

export default function Nfts() {
  const [network, setNetwork] = useState("");
  const [nfts, setNfts] = useState();

  const approve = (link) => {
    window.open(link, "_blank");
  };

  const showNFT = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    getNFTs(network).then((res) => {
      setNfts(res?.data?.nfts);
    });
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
      {nfts && (
        <table class="table-auto overflow-x-auto block text-white border-collapse border border-slate-500">
          <thead>
            <tr className="">
              <th class="p-3 border border-slate-600 text-center"> Chain ID</th>
              <th class="p-3 border border-slate-600 text-center">Name</th>
              <th class="p-3 border border-slate-600 text-center">Symbol</th>
              <th class="p-3 border border-slate-600 text-center">Contract</th>
              <th class="p-3 border border-slate-600 text-center">Token ID</th>
              <th class="p-3 border border-slate-600 text-center">Token URI</th>
              <th class="p-3 border border-slate-600 text-center">Status</th>
              <th class="p-3 border border-slate-600 text-center"></th>
            </tr>
          </thead>
          <tbody className="">
            {nfts?.map((nft, index) => (
              <tr key={index}>
                <td class="p-3 border border-slate-700 text-center">
                  {nft?.chain_id}
                </td>
                <td class="p-3 border border-slate-700 text-center">
                  {nft?.name}
                </td>
                <td class="p-3 border border-slate-700 text-center">
                  {nft?.short_name}
                </td>
                <td class="p-3 border border-slate-700 text-center">
                  {nft?.contract ? nft?.contract : "-"}
                </td>
                <td class="p-3 border border-slate-700 text-center">
                  {nft?.id}
                </td>
                <td class="p-3 border border-slate-700 text-center">
                  {nft?.data}
                </td>
                <td class="p-3 border border-slate-700 text-center">
                  {nft?.status}
                </td>
                <td class="p-3 border border-slate-700 text-center">
                  {" "}
                  {nft?.status === "success" ? (
                    <Button name="Show" onClick={() => showNFT(nft?.data)} />
                  ) : (
                    <Button
                      onClick={() => approve(nft?.transaction_url)}
                      name="Approve"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Content>
  );
}
