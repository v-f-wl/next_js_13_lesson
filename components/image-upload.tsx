'use client'

import { useEffect, useState } from "react"
import { CldUploadButton} from 'next-cloudinary'
import Image from "next/image"

interface ImageUploadProps{
  value: string,
  onChange: (src: string) => void,
  disabled?: boolean
}

export const ImageUpload = ({
  value,
  onChange,
  disabled
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  },[])

  if(!isMounted){
    return null
  }
  return (
    <div className="space-y-4 w-full flex flex-col justify-center items-center">
      <CldUploadButton
        onUpload={(result: any) => onChange(result.info.secure_url)}
        options={{
          maxFiles: 1
        }}
        uploadPreset="pgvea55l"
      >
        <div className="p-4 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition flex flex-col space-y-2 items-center justify-center">
          <div className="relative h-40 w-40">
            <Image
              src={value || 'https://raw.githubusercontent.com/AntonioErdeljac/next13-ai-companion/ed2b04cbf9424497ca3aa86fdfa87443f388a178/public/placeholder.svg'}
              alt="Upload"
              className="rounded-lg object-cover"
              fill
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  )
}