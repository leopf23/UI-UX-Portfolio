import BtnUi from "./btnUi";
import Image from 'next/image';
import PatternSvg from "./PatternSvg";



export default function About() {


  return (
    <div className='text-[1.1rem]'>

<div className="relative text-[1.1rem]">
      {/* Image for desktop */}
      <Image
        alt="Img profile"
        src="/me.png"
        width={300}
        height={300}
        priority
        className="hidden md:block md:top-[80px] lg:top-[-75px] md:right-[78%] lg:right-[93%] 2xl:right-[96%] absolute"
      />

      {/* SVG punto */}
      <PatternSvg className="hidden md:block top-[200px] right-[15%] absolute" />
      <PatternSvg className="top-[750px] right-[90%] absolute" />
    </div>

      <div className='top-[750px] right-[90%] absolute'>
        <svg xmlns="http://www.w3.org/2000/svg" width="114" height="117" viewBox="0 0 214 217">
          <g id="Grupo_41" data-name="Grupo 41" transform="translate(0 0.058)">
            <g id="Grupo_36" data-name="Grupo 36" transform="translate(0 -0.425)">
              <g id="Elipse_1" data-name="Elipse 1" transform="translate(129 0.367)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <circle cx="10" cy="10" r="10" stroke="none" />
                <circle cx="10" cy="10" r="9" fill="none" />
              </g>
              <g id="Elipse_2" data-name="Elipse 2" transform="translate(65 0.367)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <circle cx="10" cy="10" r="10" stroke="none" />
                <circle cx="10" cy="10" r="9" fill="none" />
              </g>
              <g id="Elipse_3" data-name="Elipse 3" transform="translate(0 0.367)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <circle cx="10" cy="10" r="10" stroke="none" />
                <circle cx="10" cy="10" r="9" fill="none" />
              </g>
            </g>
            <g id="Grupo_37" data-name="Grupo 37" transform="translate(0 65.517)">
              <g id="Elipse_1-2" data-name="Elipse 1" transform="translate(129 0.424)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <ellipse cx="10" cy="9.5" rx="10" ry="9.5" stroke="none" />
                <ellipse cx="10" cy="9.5" rx="9" ry="8.5" fill="none" />
              </g>
              <g id="Elipse_4" data-name="Elipse 4" transform="translate(194 0.424)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <ellipse cx="10" cy="9.5" rx="10" ry="9.5" stroke="none" />
                <ellipse cx="10" cy="9.5" rx="9" ry="8.5" fill="none" />
              </g>
              <g id="Elipse_2-2" data-name="Elipse 2" transform="translate(65 0.424)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <ellipse cx="10" cy="9.5" rx="10" ry="9.5" stroke="none" />
                <ellipse cx="10" cy="9.5" rx="9" ry="8.5" fill="none" />
              </g>
              <g id="Elipse_3-2" data-name="Elipse 3" transform="translate(0 0.424)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <ellipse cx="10" cy="9.5" rx="10" ry="9.5" stroke="none" />
                <ellipse cx="10" cy="9.5" rx="9" ry="8.5" fill="none" />
              </g>
            </g>
            <g id="Grupo_38" data-name="Grupo 38" transform="translate(0 131.459)">
              <g id="Elipse_1-3" data-name="Elipse 1" transform="translate(129 0.483)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <ellipse cx="10" cy="9.5" rx="10" ry="9.5" stroke="none" />
                <ellipse cx="10" cy="9.5" rx="9" ry="8.5" fill="none" />
              </g>
              <g id="Elipse_4-2" data-name="Elipse 4" transform="translate(194 0.483)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <ellipse cx="10" cy="9.5" rx="10" ry="9.5" stroke="none" />
                <ellipse cx="10" cy="9.5" rx="9" ry="8.5" fill="none" />
              </g>
              <g id="Elipse_2-3" data-name="Elipse 2" transform="translate(65 0.483)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <ellipse cx="10" cy="9.5" rx="10" ry="9.5" stroke="none" />
                <ellipse cx="10" cy="9.5" rx="9" ry="8.5" fill="none" />
              </g>
              <g id="Elipse_3-3" data-name="Elipse 3" transform="translate(0 0.483)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <ellipse cx="10" cy="9.5" rx="10" ry="9.5" stroke="none" />
                <ellipse cx="10" cy="9.5" rx="9" ry="8.5" fill="none" />
              </g>
            </g>
            <g id="Grupo_39" data-name="Grupo 39" transform="translate(0 197.4)">
              <g id="Elipse_1-4" data-name="Elipse 1" transform="translate(129 -0.459)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <circle cx="10" cy="10" r="10" stroke="none" />
                <circle cx="10" cy="10" r="9" fill="none" />
              </g>
              <g id="Elipse_4-3" data-name="Elipse 4" transform="translate(194 -0.459)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <circle cx="10" cy="10" r="10" stroke="none" />
                <circle cx="10" cy="10" r="9" fill="none" />
              </g>
              <g id="Elipse_2-4" data-name="Elipse 2" transform="translate(65 -0.459)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <circle cx="10" cy="10" r="10" stroke="none" />
                <circle cx="10" cy="10" r="9" fill="none" />
              </g>
              <g id="Elipse_3-4" data-name="Elipse 3" transform="translate(0 -0.459)" fill="rgba(255,255,255,0)" stroke="#1e86eb" stroke-width="2">
                <circle cx="10" cy="10" r="10" stroke="none" />
                <circle cx="10" cy="10" r="9" fill="none" />
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Image for responsive */}
      <Image
        alt={'img profile'}
        src="/meResponsive.png"
        width={95} // Ajusta el tamaño
        height={95} // Ajusta el tamaño
        layout="intrinsic" // Mantiene la relación de aspecto
        className='md:hidden block mb-4'
      />


      <div className="md:pt-20 lg:pt-0 pl-0 md:pl-52 lg:pl-48">
        <div className='mb-0 font-medium text-[0.9rem] text-gray-500 dark:text-white md:text-lg'>
          <span className='text-[#1D00ED] dark:text-blueText'>HELLO, </span> MY NAME IS
        </div>

        <div className='mb-2 font-bold text-[#1D00ED] text-[2rem] md:text-[3.7rem] dark:text-blueText'>
          <span>LEONARDO</span>  <span className='text-stroke-1 text-stroke-blue text-stroke-blueText text-white dark:text-blueText scroll-snap-stop-always'>PÉREZ</span>
          <p className='bottom-2 relative mt-2 md:mt-0 font-normal text-[0.9rem] md:text-[1.1rem]'>Im, UX / UI Designer and web developer</p>
        </div>

        <div className='mb-5 w-[100%] md:w-[90%] xl:w-[60%] font-light text-[#747579] text-[1rem] dark:text-white leading-8'>
        I’m a UI/UX designer with over 5 years of experience in UI/UX design. I dedicate myself to creating exceptional user experiences. I also have strong skills in front-end development, which allows me to transform designs into functional applications and optimize improvements for a better end-user experience.
        </div>

        <div>

          <BtnUi
          onClick={() => window.open('/resumen.pdf', '_blank')}
          title={"Download CV"} url={""} />
        </div>

      </div>

    </div>
  )
}
