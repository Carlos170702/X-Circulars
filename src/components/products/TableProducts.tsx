import { Products } from "@/interface/products";

interface Props {
    products: Products[];
}

export const TableProducts = ({ products }: Props) => {
    return (
        <div className="relative overflow-x-auto max-h-[400px] h-auto overflow-y-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th className="px-6 py-3">Brand</th>
                        <th className="px-6 py-3">Master Brand</th>
                        <th className="px-6 py-3">Description</th>
                        <th className="px-6 py-3">Size</th>
                        <th className="px-6 py-3">Price</th>
                        <th className="px-6 py-3">Count</th>
                        <th className="px-6 py-3">Variety</th>
                        <th className="px-6 py-3">Verificado</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr
                            key={product.id_product}
                            className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                } border-b`}
                        >
                            <td className="px-6 py-4 font-medium text-gray-900">{product.brand}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{product.master_brand || "N/A"}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{product.desc}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{product.size}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">${product.price}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{product.count}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                {product.variety.join(", ")}
                            </td>
                            <td className="px-6 py-4">
                                <span
                                    className={`px-2 py-1 text-sm rounded-lg ${product.verify
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {product.verify ? "Verificado" : "No Verificado"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
