import { FC } from "react";

import NodeServiceContainer from "../../containers/NodeServiceContainer/NodeServiceContainer";
import Container from "../../UIComponents/Container/Container";

const Main: FC = () => {
  return (
    <Container>
      <NodeServiceContainer />
    </Container>
  );
};

export default Main;
