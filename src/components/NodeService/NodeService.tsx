import { FC } from "react";

import { NodeServiceType } from "../../types";

import "./NodeService.style.css";

interface IProps {
  node: NodeServiceType;
}

const NodeService: FC<IProps> = ({ node }) => {
  return (
    <div className="d-flex node-service">
      <p>{`${node.name} - ${node.price} RUB`}</p>
    </div>
  );
};

export default NodeService;
