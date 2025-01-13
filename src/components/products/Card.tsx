import { Products } from "@/interface/products"
import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"

interface Props {
    product: Products
}

export const Card: NextPage<Props> = ({ product }) => {
    return (
        <div
            key={product.id_product}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            <Image
                className="rounded-t-lg object-cover"
                src={product.url_image}
                alt={`Producto ${product.desc}`}
                width={300}
                height={200}
            />

            <div className="p-5">
                <h5 className="text-lg font-bold text-gray-900">{product.master_brand || "Sin MasterBrand"}</h5>
                <p className="text-sm font-semibold text-teal-600">{product.brand || "Sin Marca"}</p>

                <p className="mt-2 text-sm text-gray-600">{product.desc || "Sin descripción"}</p>

                <p className="mt-2 text-base font-semibold text-gray-800">
                    Precio: <span className="text-teal-500">${product.price || "N/A"}</span>
                </p>

                <p className="mt-1 text-sm text-gray-600">
                    Variedades: {product.variety?.join(", ") || "Sin variedades"}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    <span
                        className={`px-2 py-1 text-xs font-medium rounded-lg ${product.must_buy
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-600"
                            }`}
                    >
                        {product.must_buy > 0
                            ? `Compra mínima: ${product.must_buy}`
                            : "Sin compra mínima"}
                    </span>
                </div>

                <p className="mt-2 text-sm text-gray-500">{product.notes || "Sin información adicional"}</p>

                <Link
                    href="#"
                    className="inline-flex items-center mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Ver más
                    <svg
                        className="rtl:rotate-180 w-4 h-4 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    )
}