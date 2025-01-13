'use client';
import { useChart } from "@/hooks/useChart";
import { MasterBrand, Products } from "@/interface/products";
import { NextPage } from "next";
import { Bar } from "react-chartjs-2";
import { Card } from "./Card";
import { CardGrid } from "./CardGrid";
import { TableProducts } from "./TableProducts";

interface Props {
    data: Products[];
    masterBrands: MasterBrand[];
}

export const ChartProducts: NextPage<Props> = ({ data, masterBrands }) => {
    const { chartData, onChange, selectedMasterBrand, brandsCount, chartOptions, brandsBySelectedBrand } = useChart(data);

    return (
        <>
            <div className="space-y-6">
                <select
                    name="master_brand"
                    id="masterbranch"
                    value={selectedMasterBrand}
                    onChange={onChange}
                    className="block w-full p-2 text-sm border rounded-lg outline-none"
                >
                    <option value="all">All Master Brands</option>
                    {masterBrands.map((brand, index) => (
                        <option key={index} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>

                <div className="h-[400px]">
                    {Object.keys(brandsCount).length > 0 ? (
                        <Bar data={chartData} options={chartOptions} className="w-auto" width={500} />
                    ) : (
                        <p className="text-center text-gray-500 mt-6">No hay datos para mostrar en la gráfica.</p>
                    )}
                </div>
            </div>

            <TableProducts products={brandsBySelectedBrand} />

            <CardGrid>
                {brandsBySelectedBrand.map((product) => (
                    <Card key={product.id_product} product={product} />
                ))}
            </CardGrid>
        </>
    );
};
