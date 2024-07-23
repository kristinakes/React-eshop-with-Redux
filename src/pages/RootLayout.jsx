import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector} from "react-redux";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import ProductForm from "../components/ProductForm";


function RootLayout() {

  //to manage form from different components
 const formOpen = useSelector((state) => state.ui.form.open);
 const formAction = useSelector((state) => state.ui.form.formAction);
 const formProductId = useSelector((state) => state.ui.form.productId);
  
 return (
   <Fragment>
     <NavBar />
     <main className="min-h-screen">
       <ProductForm
         open={formOpen}
         formAction={formAction}
         productId={formProductId}
       />
       <Outlet />
     </main>
     <Footer />
   </Fragment>
 );
}
export default RootLayout;
