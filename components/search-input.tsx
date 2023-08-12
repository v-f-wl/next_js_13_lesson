'use client'

import qs from 'query-string'
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";

import { useDebounce } from "@/hooks/use-debounce";
import { Input } from "./ui/input";

const SearchInput = () => {
  const router = useRouter()
  const serachParams = useSearchParams()

  const categoryId = serachParams.get('categoryId')
  const name = serachParams.get('name')

  const [value, setValue] = useState(name || '')
  const debounedValue = useDebounce<string>(value, 500)

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const query = {
      name: debounedValue,
      categoryId: categoryId 
    }
    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    }, { skipEmptyString: true, skipNull: true})
    router.push(url)
  },[debounedValue, router, categoryId])


  return (  
    <div className="relative">
      <LuSearch className='absolute h-4 w-4 top-3 left-4 text-muted-foreground'/>
      <Input
        onChange={onChange}
        value={value}
        placeholder="Поиск..."
        className="pl-10 bg-primary/10"
      />
    </div>
  );
}
 
export default SearchInput;