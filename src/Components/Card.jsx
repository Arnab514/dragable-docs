import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data , reference}) => {
  return (
    <div>
        <motion.div drag dragConstraints={reference} className="relative flex-shrink-0 top-[10px] left-[10px] w-52 h-60 bg-zinc-900/90 rounded-[30px] overflow-hidden px-[15px] py-[20px] ">
            <div className="py-1.5">
                <FaRegFileAlt color='white'/>
            </div>
            <p className='text-gray-400 text-sm leading-tight'>
                {data.desc}
            </p>
            <div className="footer absolute bottom-0 w-full left-0">
                <div className='flex item-center justify-between text-gray-400 px-5 py-2'>
                    <h5>{data.filesize}</h5>
                    <span className='w-5 h-5 bg-white rounded-full'>
                        {data.close ? <IoIosCloseCircleOutline size={"1.25rem"} color='black' /> : <FaRegArrowAltCircleDown size={"1.25rem"} color='black' />}
                    </span>
                </div>

                {data.tag.isOpen ? 
                    (
                    <div className={`tag w-full py-2 ${data.tag.tagColor==="blue" ? 
                    "bg-blue-500" : "bg-green-500"} flex item-center justify-center`}>
                        <h3 className="text-sm font-semibold text-zinc-100 tracking-tight">
                            {data.tag.tagTitle}
                        </h3>
                    </div>
                ) : null}

                
            </div>
        </motion.div>
    </div>
  )
}

export default Card
