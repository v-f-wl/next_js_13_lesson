import prismadb from "@/lib/prismadb";
import { CompanionForm } from "./components/companion-form";

interface CompationIdPageProps{
  params:{
    companionId: string
  }
}

const CompationIdPage = async({
  params
}: CompationIdPageProps) => {

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId
    }
  })

  const categories = await prismadb.category.findMany()

  return ( 
    <CompanionForm
      initialData={companion}
      categories={categories}
    />
  );
}
 
export default CompationIdPage;