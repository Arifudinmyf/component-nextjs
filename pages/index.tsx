import React from "react";

import { Container } from "@components";
import Sidebar from "@components/layouts/sidebar";
import Footer from "@components/layouts/footer";

const Home: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Footer />
    </Container>
  );
};

export default Home;
