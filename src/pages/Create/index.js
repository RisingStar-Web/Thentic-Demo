import React, { useState } from "react";
import Button from "../../components/Button";
import Content from "../../components/Content";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { createContract } from "../../utils/apis";
import { networks } from "../../utils/networks";

export default function Create() {
  const [network, setNetwork] = useState("");
  const [contractName, setContractName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [status, setStatus] = useState("Create");

  const create = async () => {
    setStatus("Creating...");
    if (network && contractName && symbol) {
      createContract({
        chain_id: parseInt(network),
        name: contractName,
        short_name: symbol,
      })
        .then((res) => {
          setStatus("Create");
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <Content>
      <h1 className="text-white text-2xl">Create New NFT Contract</h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <h1>Select Network</h1>
          <Select
            placeholder="Select One Network"
            options={networks}
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          />
        </div>
        <div className="flex gap-10 justify-between">
          <Input
            id="contract-name"
            label="Contract Name"
            type="text"
            placeholder="Input contract name"
            value={contractName}
            containerClassName="w-full"
            onChange={(e) => setContractName(e.target.value)}
          />
          <Input
            id="symbol-name"
            label="Symbol Name"
            type="text"
            placeholder="Input symbol name"
            value={symbol}
            containerClassName="w-full"
            onChange={(e) => setSymbol(e.target.value)}
          />
        </div>
        <Button onClick={() => create()} name={status} />
      </div>
    </Content>
  );
}
