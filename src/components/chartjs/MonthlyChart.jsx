import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const MonthlyChart = ({ values }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar', // Tipo de gráfico.
            data: {
                labels: [
                    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                ],
                datasets: [{
                    label: 'Balance Mensual',
                    data: values, // Usar los balances pasados como prop.
                    backgroundColor: 'rgba(85, 205, 142, 100)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Balance (USD)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Meses'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                    },
                }
            }
        });

        return () => {
            myChart.destroy(); // Limpiar el gráfico al desmontar el componente.
        };
    }, [values]); // Dependencia para actualizar el gráfico si cambian los balances.

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default MonthlyChart;