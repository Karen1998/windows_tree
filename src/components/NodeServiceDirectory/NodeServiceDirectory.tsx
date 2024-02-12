import { FC, useState } from "react";

import { NodeServiceType } from "../../types";
import { useAppSelector } from "../../store";
import NodeService from "../NodeService/NodeService";

import "./NodeServiceDirectory.style.css";

interface IProps {
  node: NodeServiceType;
}

const NodeServiceDirectory: FC<IProps> = ({ node }) => {
  const serviceData = useAppSelector((state) => state.nodeService);

  const [open, isOpen] = useState(false);

  const handleOpen = () => {
    isOpen((prev) => !prev);
  };

  return (
    <div>
      <div onClick={handleOpen} className="node-service-dir">
        <h3>{node.name}</h3>
      </div>

      {open && (
        <div className="node-service-dir-inner">
          {serviceData
            .filter((service) => service.head === node.id)
            .sort((a, b) => a.sorthead - b.sorthead)
            .map((service) => (
              <div key={service.id} className="d-flex">
                {service.node === 0 ? (
                  <NodeService node={service} />
                ) : (
                  <NodeServiceDirectory node={service} />
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default NodeServiceDirectory;
