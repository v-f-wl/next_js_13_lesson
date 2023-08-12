import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

const RootLayout = ({ 
  children } : {
    children: React.ReactNode
  } ) => {
  return ( 
    <div className="h-full">
      <Navbar/>
      <div className="hidden md:flex mt-16 w-25 flex-col fixed inset-y-0">
        <SideBar/>
      </div>
      <main className="md:pl-20 pt-16 h-full">
        {children}
      </main>
    </div>
   );
}
 
export default RootLayout;