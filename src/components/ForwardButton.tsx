import React from 'react'
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";


const ForwardButton = () => {
  return (
    
    <Button pill size='xs' className='p-2' color='red'>
      <HiOutlineArrowRight className="h-5 w-5" />
    </Button>  
    )
}

export default ForwardButton