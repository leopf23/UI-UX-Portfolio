import React from 'react';
import Image from 'next/image';

interface IinfoProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function CardSkills(props: IinfoProps) {
  return (
    <div className='flex items-center content-center gap-5 border-[#BAC3E3] border-[1px] dark:border-slate-700 hover:shadow-custom-blue p-[15px] border-solid rounded-md'>
      {/* Icon */}
      <div>
        <Image
          src={props.imageSrc}
          width={40}
          height={40}
          alt={props.title}
        />
      </div>
      
      {/* Text */}
      <div>
        {/* Title */}
        <p className='font-medium text-[#5a5b5f] text-[0.9rem] dark:text-white'>{props.title}</p>
        {/* Description */}
        <p className='text-[#818386] text-[0.8rem] dark:text-gray-400 leading-7'>
          {props.description}
        </p>
      </div>
    </div>
  );
}
