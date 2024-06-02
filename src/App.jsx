import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogContextProvider from "./context/BlogContextProvider";
import DarkModeContextProvider from "./context/DarkModeContextProvider";

export default function App() {
  return (
    <BlogContextProvider>
      <DarkModeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </DarkModeContextProvider>
    </BlogContextProvider>
  )
}