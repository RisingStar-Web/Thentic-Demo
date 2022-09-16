import React from "react";
import Content from "../../components/Content";

export default function Home() {
  return (
    <Content>
      <div className="text-white text-center">
        <h1 className="text-3xl mb-20">
          Hello, This is{" "}
          <strong className="text-orange-600">Roy Chong's</strong> product for
          demo API
        </h1>
        <br></br>
        <div className="flex flex-col gap-5">
          <div className="text-2xl p-2 bg-orange-500">Create NFT Contract</div>
          <div className="text-2xl p-2 bg-orange-500">Show NFT Contracts</div>
          <div className="text-2xl p-2 bg-orange-500">Approve NFT Contract</div>
          <div className="text-2xl p-2 bg-orange-500">Mint NFT Token</div>
          <div className="text-2xl p-2 bg-orange-500">Show NFT Tokens</div>
          <div className="text-2xl p-2 bg-orange-500">Approve NFT Token</div>
        </div>
      </div>
    </Content>
  );
}
