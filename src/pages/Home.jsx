import Footer from "../components/Footer";
import Sidebar from "../components/Siderbar";
import { Homes, HomeC, Container } from "../Style/HomeStyled";

const Home = () => {
  return (
    <Homes>
      <HomeC>
        <Container>
          <Sidebar />
        </Container>
      </HomeC>
      <Footer />
    </Homes>


  );
};

export default Home;
