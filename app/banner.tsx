import React from 'react'
import Image from 'next/image'; 
import 'animate.css';

export default function banner() {
  return (
    <div className="scroll-snap-item">
      {/* <div className="bg-[url('/../back.svg')] bg-[length:86%_auto] bg-[position:-34px_80px] bg-no-repeat"> */}
      <div className="bg-[url('/../back.svg')] bg-[length:86%_auto] bg-[position:-34px_80px] bg-no-repeat">
        <div className="dark:bg-blueDark p-5 md:p-40 w-full h-[900px] text-center">
          <div className="mx-auto w-auto h-[250px]">
            <svg className='hidden md:block' xmlns="http://www.w3.org/2000/svg" width="auto" height="250" viewBox="0 0 986 281">
              <g id="Grupo_2" data-name="Grupo 2" transform="translate(105.5 71.945)">
                <text className="fill-white dark:fill-blueDark stroke-cyan-800 dark:stroke-blueText font-bmw tracking-in-expand" id="DESIGNER" transform="translate(-104.5 146.055)" stroke-width="1" font-size="182" font-family="BMWMotorrad-Bold, BMW Motorrad" font-weight="700" opacity="0.18"><tspan x="0" y="0">DEVELOPER</tspan></text>
                <text className="fill-blue dark:fill-blueText font-bmw animate__animated animate__fadeIn" id="Designer-2" data-name="Designer" transform="translate(353 145.555)" font-size="126" font-family="BMWMotorrad-Bold, BMW Motorrad" font-weight="700" letter-spacing="0.059em"><tspan x="-348.705" y="0">DESIGNER</tspan></text>
                <text className="fill-blue dark:fill-white font-dreams animate__animated animate__fadeIn" id="UI_UX" data-name="UI/UX" transform="translate(8 30.555)" fill="#1D00ED" font-size="11" font-family="DREAMS"><tspan x="0" y="0">UI/UX</tspan></text>
                <g id="Grupo_58" data-name="Grupo 58" transform="translate(-4)">
                  <g className='stroke-blue dark:stroke-blueText' id="Rectángulo_10" data-name="Rectángulo 10" transform="translate(345.5 160.055)" fill="none" stroke-width="1.3">
                    <rect width="356" height="58" stroke="none" />
                    <rect x="0.65" y="0.65" width="354.7" height="56.7" fill="none" />
                  </g>
                  <text className="fill-blue dark:fill-blueText tracking-in-contract" id="Leonardo_Perez_Figueroa" data-name="Leonardo Perez Figueroa" transform="translate(522.5 198.055)" font-size="27" font-family="OpenSans-Medium, Open Sans" font-weight="500"><tspan x="-159.673" y="0">Leonardo Perez Figueroa</tspan></text>
                  <g id="Grupo_56" data-name="Grupo 56">
                    <rect className='fill-blue dark:fill-blueText' id="Rectángulo_11" data-name="Rectángulo 11" width="10" height="10" transform="translate(341.5 157.055)" />
                    <rect className='fill-blue dark:fill-blueText' id="Rectángulo_12" data-name="Rectángulo 12" width="10" height="10" transform="translate(341.5 212.055)" />
                  </g>
                  <g id="Grupo_57" data-name="Grupo 57" transform="translate(354)">
                    <rect className='fill-blue dark:fill-blueText' id="Rectángulo_11-2" data-name="Rectángulo 11" width="10" height="10" transform="translate(341.5 157.055)" fill="#1D00ED" />
                    <rect className='fill-blue dark:fill-blueText' id="Rectángulo_12-2" data-name="Rectángulo 12" width="10" height="10" transform="translate(341.5 212.055)" fill="#1D00ED" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <svg className='top-28 relative mx-auto' id="scroll-down-icon" xmlns="http://www.w3.org/2000/svg" width="28.552" height="58.145" viewBox="0 0 37.552 58.145">
            <path className='fill-blue dark:fill-blueText' id="Trazado_1" data-name="Trazado 1" d="M23.754,57.554a18.853,18.853,0,0,0,13.8-18.1V18.776A18.776,18.776,0,0,0,0,18.776V39.445A18.848,18.848,0,0,0,15.4,57.918a23.063,23.063,0,0,0,8.356-.364ZM18.563,43.561a3.585,3.585,0,0,0,3.573-3.573V36.307a3.573,3.573,0,1,0-7.145,0v3.681a3.582,3.582,0,0,0,3.573,3.573ZM28.9,49.576A14.342,14.342,0,0,1,4.434,39.449V18.776a14.342,14.342,0,0,1,28.684,0V39.445A14.294,14.294,0,0,1,28.9,49.576Z" />
          </svg>
          <Image
            alt={'Image banner'}
            src="/vectorHome.png"
            width={480} // Ajusta el tamaño
            height={400} // Ajusta el tamaño
            layout="intrinsic" // Mantiene la relación de aspecto
            className="md:hidden block bottom-[120px] relative"
          />
        </div>
      </div>
    </div>
  )
}

