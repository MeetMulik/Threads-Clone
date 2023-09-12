import { Container } from "@chakra-ui/react";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route path="/:username/post/:pid" element={<PostPage />} />
        <Route path="/:username" element={<UserPage />} />
      </Routes>
    </Container>
  );
};

export default App;
