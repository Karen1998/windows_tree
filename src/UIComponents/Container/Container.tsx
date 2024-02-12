import { FC } from "react";

import "./Container.style.css";

interface IProps {
  children: React.ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
