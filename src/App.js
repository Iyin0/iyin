import LandingPage from "./landingPage";
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectDetails from "./ProjectDetails";
import Footer from "./Footer";
import { Analytics } from '@vercel/analytics/react';

function App() {


  const Layout = () => {
    return (
      <Analytics>
        <div className="App">
          <Outlet />
          <Footer />
        </div>
      </Analytics>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <LandingPage />
        },
        {
          path: '/project/:id',
          element: <ProjectDetails />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;
