import Categories from "@/components/cetegories";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";

const RootPage  = async() => {
  const categories = await prismadb.category.findMany()

  return (  
    <div className="h-full p-4 md:pl-16 space-y-4">
      <SearchInput/>
      <Categories data={categories}/>
    </div>
  );
}
 
export default RootPage ;