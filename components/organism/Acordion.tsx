import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const Acordion = () => {
  return (
    <div>
        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger> informasi fitur eTaskify</AccordionTrigger>
            <AccordionContent className='text-xs lg:text-md'>
            Aplikasi ini tadinya akan diinstal sebuah package yang memungkinkan aplikasi ini bisa berjalan dan terinstal di smartphone, dan bisa digunakan tanpa bantuan jaringan internet. karena ada beberapa kendala pada package yang tidak bisa didownload dan masih menggunakan versi lama, fitur tersebut tidak jadi terinstal diaplikasi ini, lain waktu akan coba di kembangkan kembali. ☺️🔮💡  
            </AccordionContent>
        </AccordionItem>
        </Accordion>

    </div>
  )
}

export default Acordion