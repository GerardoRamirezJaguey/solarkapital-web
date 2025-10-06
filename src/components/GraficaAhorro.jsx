// src/components/GraficaAhorro.jsx
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useInView } from 'react-intersection-observer';

const initialData = [ { name: 'Antes', costo: 0 }, { name: 'Con Solarkapital', costo: 0 } ];
const finalData = [ { name: 'Antes', costo: 100 }, { name: 'Con Solarkapital', costo: 10 } ];
const colors = ['#8884d8', '#FFC300'];

function GraficaAhorro() {
  const [data, setData] = useState(initialData);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => { if (inView) { setData(finalData); } }, [inView]);

  return (
    <div ref={ref} style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" stroke="#FFFFFF" />
          <YAxis stroke="#FFFFFF" unit="%" />
          <Tooltip cursor={{fill: 'rgba(255, 255, 255, 0.1)'}}/>
          <Bar dataKey="costo" animationDuration={1500}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default GraficaAhorro;