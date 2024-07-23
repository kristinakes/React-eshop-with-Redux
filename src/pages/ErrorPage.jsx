import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function ErrorPage() {
  return (
    <>
      <NavBar />
      <div className="bg-white flex text-center text-2xl text-blue font-semibold rounded-md shadow-md w-1/2 max-h-fit p-5 m-auto fixed inset-0 z-10 flex justify-center items-center">Something went wrong. Page not found</div>
      <Footer />
    </>
  );
}
export default ErrorPage;
