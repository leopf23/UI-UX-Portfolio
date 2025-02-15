import React from 'react';
import Image from 'next/image'; // ✅ Importa Image de next/image
import BtnUi from './btnUi';

interface IportafolioProps {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  projectUrl: string;
  align?: 'left' | 'right'; // Nueva prop para la alineación
}

export default function CardPortafolio(props: IportafolioProps) { // Cambiado a mayúscula
  const alignmentClass = props.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`block md:block lg:flex gap-12 ${alignmentClass}`}>
      <div className='right-[88%] 2xl:right-[91%] bottom-[-150px] 2xl:bottom-[100px] absolute'>
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="1124" viewBox="0 0 320 1124">
          <g id="letra_back" data-name="letra back" transform="translate(72.813 763.5) rotate(-90)">
            <text className='fill-white dark:fill-blueDark stroke-blueText' id="DESIGNER" transform="translate(-359.5 175.187)" strokeWidth="1" fontSize="219" fontFamily="BMWMotorrad-Bold, BMW Motorrad" fontWeight="700" opacity="0.40">
              <tspan x="0" y="0">Portafolio</tspan>
            </text>
          </g>
        </svg>
      </div>
      
      {/* Img optimizada con Next.js */}
      <Image
        alt={props.title} // Mejora accesibilidad
        src={props.imageSrc}
        width={450} // Ajusta el tamaño
        height={300} // Ajusta el tamaño
        layout="intrinsic" // Mantiene la relación de aspecto
        className="mb-5 md:mb-0 w-full lg:w-[450px] h-auto"
      />

      {/* Description */}
      <div>
        <h1 className='mb-1 font-semibold dark:text-blueLight text-3xl'>{props.title}</h1>
        <span className='font-light text-[0.9rem] text-blue dark:text-white'>{props.category}</span>
        <p className='mt-2 mb-1 md:mb-4 w-auto md:w-[600px] font-light text-[0.9rem] text-slate-600 dark:text-white leading-9'>
          {props.description}
        </p>
        <BtnUi title={'See project'} url={props.projectUrl} />
      </div>
    </div>
  );
}
