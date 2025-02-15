import React, { useState } from 'react';

interface Iname {
  title: string;
  url?: string; // URL opcional
  onClick?: () => void; // Función personalizada opcional
}

export default function BtnUi({ title, url, onClick }: Iname) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? '#1D00ED' : '',
    color: isHovered ? 'white' : '',
    padding: '0.875rem 1.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.9rem',
    fontWeight: 'normal',
    transition: 'box-shadow 0.5s ease, color 0.5s ease, background-color 0.5s ease',
    boxShadow: isHovered ? '0 4px 8px rgba(3, 36, 156, 0.5)' : '0 1px 2px rgba(0, 0, 0, 0.05)',
    cursor: 'pointer',
  };

  const handleClick = () => {
    if (onClick) {
      onClick(); // Ejecuta la función personalizada si existe
    } else if (url) {
      window.open(url, '_blank'); // Abre el link en una nueva pestaña
    }
  };

  return (
    <button
      className="bg-white dark:bg-[#1B1B23] border-[1px] dark:border-[#3D9AF4] border-blue border-solid text-blue dark:text-[#3D9AF4]"
      type="button"
      style={buttonStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
