import React from 'react'
import { Button } from "flowbite-react";
import { HiArrowLeft } from "react-icons/hi";


const BackButton = () => {
  return (
    <Button pill size='xs' className='absolute top-4 left-4' color='red'>
      <HiArrowLeft className="h-5 w-5" />
    </Button>
  )
}

export default BackButton