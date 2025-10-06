import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { useInView } from 'react-intersection-observer';

const finalData = [
    { name: 'Ahorro Energía', value: 70, fill: '#FFC300' },
    { name: 'Reducción CO₂', value: 30, fill: '#82ca9d' },
];

function GraficaMedioAmbiente() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        fallbackInView: true,
    });

    return (
        <div ref={ref} style={{ width: '100%', height: 300 }}>
          {inView && (
            <ResponsiveContainer>
                <RadialBarChart 
                    innerRadius="20%" 
                    outerRadius="80%" 
                    data={finalData} 
                    startAngle={180} 
                    endAngle={0}
                >
                    <RadialBar 
                        minAngle={15} 
                        background 
                        clockWise 
                        dataKey="value" 
                        animationDuration={2000}
                    />
                    <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={{ top: '50%', right: 0, transform: 'translate(0, -50%)', color: '#FFF' }} />
                </RadialBarChart>
            </ResponsiveContainer>
          )}
        </div>
    );
}
export default GraficaMedioAmbiente;