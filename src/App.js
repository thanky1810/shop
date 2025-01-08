//import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import DefaultLayout from '~/layouts';
import Sidebar from '~/layouts/components/Sidebar';
import Search from './layouts/components/Search';


function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>


    //       {publicRoutes.map((route, index) => {
    //         const Page = route.component
    //         //let Layout = DefaultLayout

    //         // if (route.layout) {
    //         //   Layout = route.layout
    //         // }
    //         // else if (route.layout === null) {
    //         //   Layout = Fragment
    //         // }

    //         return <Route key={index} path={route.path} element={
    //           <DefaultLayout>
    //             <Page />
    //           </DefaultLayout>
    //         }
    //         />
    //       })}
    //     </Routes>
    //   </div>
    // </Router>

  <>
      <Sidebar></Sidebar>
      <Search></Search>
  </>
  )
}

export default App;
