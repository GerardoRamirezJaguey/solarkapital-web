import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useInView } from 'react-intersection-observer';

const finalData = [
  { name: 'Antes', costo: 100 },
  { name: 'Con Solarkapital', costo: 10 },
];
const colors = ['#8884d8', '#FFC300'];

function GraficaAhorro() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Un poco de umbral para que se vea mejor
    fallbackInView: true,
  });

  return (
    <div ref={ref} style={{ width: '100%', height: 300 }}>
      {/* El componente del gráfico SÓLO se renderiza cuando inView es true */}
      {inView && (
        <ResponsiveContainer>
          <BarChart data={finalData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#FFFFFF" />
            <YAxis stroke="#FFFFFF" unit="%" />
            <Tooltip cursor={{fill: 'rgba(255, 255, 255, 0.1)'}}/>
            <Bar dataKey="costo" animationDuration={1500}>
              {finalData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default GraficaAhorro;