import { Container } from "@chakra-ui/react";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";

const App = () => {
  const user = useRecoilValue(userAtom);
  console.log("user", user);
  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to={"/auth"} />}
        />
        <Route
          path="/auth"
          element={!user ? <AuthPage /> : <Navigate to={"/"} />}
        />
        <Route path="/:username/post/:pid" element={<PostPage />} />
        <Route path="/:username" element={<UserPage />} />
      </Routes>
    </Container>
  );
};

export default App;
