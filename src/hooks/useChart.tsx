import { Products } from "@/interface/products";
import { useEffect, useState } from "react";

import {
    ActiveElement,
    BarElement,
    CategoryScale,
    ChartEvent,
    Chart as ChartJS,
    ChartOptions,
    Legend,
    LinearScale,
    Tooltip,
} from "chart.js";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

export const useChart = (data: Products[]) => {
    const [selectedMasterBrand, setSelectedMasterBrand] = useState<string>('all');
    const [selectedBrand, setSelectedBrand] = useState<string>('');
    const [brandsBySelectedBrand, SetBrandsBySelectedBrand] = useState<Products[]>([]);

    const filteredProducts = selectedMasterBrand === 'all'
        ? data
        : data.filter(product => product.master_brand === selectedMasterBrand);

    const brandsCount = filteredProducts.reduce((acc: { [key: string]: number }, product) => {
        if (product.brand) {
            acc[product.brand] = (acc[product.brand] || 0) + 1;
        }
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(brandsCount),
        datasets: [
            {
                label: 'Cantidad de Productos',
                data: Object.values(brandsCount),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMasterBrand(event.target.value);
    }

    const chartOptions: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: true },
            tooltip: { enabled: true },
        },
        onHover: (event: ChartEvent, chartElement: ActiveElement[]) => {
            const target = (event.native &&  event.native.target) as HTMLElement;
            if (chartElement.length) {
                target.style.cursor = "pointer";
            } else {
                target.style.cursor = "default";
            }
        },
        scales: {
            x: { title: { display: true, text: 'Brands' } },
            y: { title: { display: true, text: 'Cantidad de Productos' }, beginAtZero: true },
        },
        onClick: (event: ChartEvent, elements: ActiveElement[]) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                const label = chartData.labels[index];
                setSelectedBrand(label);
            }
        },
    };

    const getBrandsBySelectedBrand = async () => {
        const products = data.filter(product => {
            if (product.brand === selectedBrand) {
                const must_buy = product.pack ?? 0 > 0 ? product.pack : 0;
                return {
                    ...product, must_buy
                }
            }
        });
        SetBrandsBySelectedBrand(products);
    }

    useEffect(() => {
        if (selectedBrand) {
            getBrandsBySelectedBrand();
        }
        // eslint-disable-next-line
    }, [selectedBrand]);

    return {
        // Properties
        chartData,
        brandsCount,
        chartOptions,
        brandsBySelectedBrand,
        //methods
        selectedMasterBrand,
        onChange,
    }
}