import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Project from "./components/Project";

function AppLayout (){
      return (
          <RouterProvider router={appRouter}/>
      );
}
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/project/:id",
    element:<Project/>
  },
])

export default AppLayout
