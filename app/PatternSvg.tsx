const PatternSvg = ({ className }: { className?: string }) => {
    return (
      <div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" width="114" height="117" viewBox="0 0 214 217">
          <g id="Grupo_41" transform="translate(0 0.058)">
            {[0, 65, 131, 197].map((y, i) => (
              <g key={i} transform={`translate(0 ${y})`}>
                {[0, 65, 129, 194].map((x, j) => (
                  <g key={j} transform={`translate(${x} 0)`} fill="none" stroke="#1e86eb" strokeWidth="2">
                    <circle cx="10" cy="10" r="9" />
                  </g>
                ))}
              </g>
            ))}
          </g>
        </svg>
      </div>
    );
  };
  
  export default PatternSvg;
  