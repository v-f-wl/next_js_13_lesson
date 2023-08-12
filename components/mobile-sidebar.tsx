import { Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import SideBar from '@/components/SideBar'
import { LuMenu } from 'react-icons/lu';

const MobileSideBar = () => {
  return ( 
    <Sheet>
      <SheetTrigger className='md:hidden pr-4'>
        <LuMenu size={28}/>
      </SheetTrigger>
      <SheetContent side='left' className='p-0 bg-secondary pt-10 w-32'>
        <SideBar/>
      </SheetContent>
    </Sheet>
  );
}
 
export default MobileSideBar;