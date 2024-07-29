'use client'
import { Chart } from 'react-google-charts';
export default function RevenueChart() {
    const data = [
        ["Year", "Sales", "Expenses"],
        ["2013", 1000, 400],
        ["2014", 1170, 460],
        ["2015", 660, 1120],
        ["2016", 1030, 540],
    ];

    const options = {
        title: "Company Performance",
        hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
        vAxis: { minValue: 0 },
        chartArea: { width: "70%", height: "70%" },
    };


    return (
        <div className='mt-2 col-span-3'>
            <Chart
                chartType="AreaChart"

                width="100%"
                height="300px"
                legendToggle
                data={data}
                options={options}
            />


        </div>
    )
}