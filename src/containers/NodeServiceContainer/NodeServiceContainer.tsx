import { FC, useEffect } from "react";

import { initState } from "../../store/slices/NodeServiceSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import NodeServiceDirectory from "../../components/NodeServiceDirectory/NodeServiceDirectory";

import "./NodeServiceContainer.style.css";

const NodeServiceContainer: FC = () => {
  const serviceData = useAppSelector((state) => state.nodeService);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("./data.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch(initState(data));
      });
  }, []);

  return (
    <div className="node-service-container">
      {serviceData
        .filter((node) => node.node)
        .sort((a, b) => a.sorthead - b.sorthead)
        .map((node) => (
          <NodeServiceDirectory key={node.id} node={node} />
        ))}
    </div>
  );
};

export default NodeServiceContainer;
