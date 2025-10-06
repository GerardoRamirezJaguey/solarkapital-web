// src/components/NumeroAnimado.jsx
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function NumeroAnimado({ end, duration = 2, prefix = "", suffix = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp 
          start={0} 
          end={end} 
          duration={duration} 
          prefix={prefix} 
          suffix={suffix} 
          separator=","
        >
          {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </div>
  );
}
export default NumeroAnimado;