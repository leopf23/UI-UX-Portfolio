// components/Switch.tsx
import { useState } from 'react';

const Switch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center">
      <label className="relative inline-block w-10 mr-2 align-middle select-none">
        <input
          type="checkbox"
          checked={isOn}
          onChange={toggleSwitch}
          className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          style={{ top: 0, left: 0, transition: '0.2s' }}
        />
        <span
          className={`block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${isOn ? 'bg-blue-500' : 'bg-gray-300'}`}
          style={{ transition: '0.2s' }}
        />
      </label>
      <span>{isOn ? 'On' : 'Off'}</span>
    </div>
  );
};

export default Switch;
