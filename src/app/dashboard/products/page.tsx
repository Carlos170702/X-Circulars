import { getProductsService } from "@/actions/products";
import { ChartProducts } from "@/components/products/Chart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Productos de la tienda',
  description: 'En esta página se muestran los productos de la tienda',
  keywords: ['productos', 'marcas', 'ventas'],
}

export default async function ProductsPage() {
  const dataProducts = await getProductsService();

  const allMasterBrands = Array.from(
    new Set(dataProducts.map(product => product.master_brand).filter(Boolean))
  );

  const allBrands = Array.from(
    new Set(dataProducts.map(product => product.brand).filter(Boolean))
  );

  return (
    <div className="m-5 space-y-5">
      <div className="flex gap-6 mb-6">
        <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 w-1/2">
          <h2 className="text-lg font-semibold text-gray-700">Marcas principales</h2>
          <span className="text-4xl font-bold text-teal-500">{allMasterBrands.length}</span>
        </div>

        <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 w-1/2">
          <h2 className="text-lg font-semibold text-gray-700">Total de marcas</h2>
          <span className="text-4xl font-bold text-teal-500">{allBrands.length}</span>
        </div>
      </div>
      <ChartProducts data={dataProducts} masterBrands={allMasterBrands} />
    </div>
  );
}