
export default function NamePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>
          <div className="h-8 bg-gray-300 rounded w-1/3 animate-pulse"></div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>
          <div className="h-8 bg-gray-300 rounded w-1/3 animate-pulse"></div>
        </div>
      </div>

      <div className="bg-gray-200 h-10 rounded-md w-1/3 animate-pulse"></div>

      <div className="bg-white rounded-lg shadow-md p-6 h-[400px] flex justify-center items-center">
        <div className="h-64 w-full bg-gray-200 animate-pulse"></div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="overflow-x-auto">
          <div className="grid grid-cols-7 gap-4 border-b pb-3">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
          {[...Array(5)].map((_, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-7 gap-4 py-3 border-b">
              {[...Array(7)].map((_, colIndex) => (
                <div key={colIndex} className="h-4 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}