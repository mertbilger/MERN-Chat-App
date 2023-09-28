import Navbar from "./Navbar"
import Search from "./Search";
import { SidebarContainer } from "../Style/SideBarStyled";
import Chats from "./Chats";

const Siderbar = () => {
  return (
    <SidebarContainer>
      <Navbar />
      <Search />
      <Chats />
    </SidebarContainer>
  )
}

export default Siderbar