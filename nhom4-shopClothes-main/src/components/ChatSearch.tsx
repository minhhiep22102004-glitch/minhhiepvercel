import React, { useState } from "react"

interface Product {
  id: string
  name: string
  price: number
}

const mockProducts: Product[] = [
  { id: "1", name: "Áo thun bé trai Basic", price: 159000 },
  { id: "2", name: "Váy công chúa bé gái ", price: 249000 },
  { id: "3", name: "Bộ đồ mùa hè bé trai", price: 189000 },
  { id: "4", name: "Áo khoác bé gái dễ thương", price: 279000 },
  { id: "5", name: "Đầm hoa bé gái mùa hè", price: 199000 },
  { id: "6", name: "Áo sơ mi bé trai caro đen", price: 175000}, 
]

export default function ChatSearch() {
  const [query, setQuery] = useState("")
  const [message, setMessage] = useState<string | null>(null)
  const [foundProduct, setFoundProduct] = useState<Product | null>(null)

  const handleSearch = () => {
    const found = mockProducts.find((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    )

    if (found) {
      setFoundProduct(found)
      setMessage(`✅ Tìm thấy sản phẩm: "${found.name}" — ${found.price.toLocaleString()}₫`)
    } else {
      setFoundProduct(null)
      setMessage(`❌ Không tìm thấy sản phẩm "${query}". Hãy thử lại!`)
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <h2 className="text-xl font-bold text-pink-500 text-center mb-4">
        💬 Khung chat tìm kiếm sản phẩm
      </h2>

      {/* Ô nhập tìm kiếm */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Nhập tên sản phẩm..."
          className="flex-1 border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-pink-500 text-white px-4 rounded-xl hover:bg-pink-600 transition"
        >
          Tìm
        </button>
      </div>

      {/* Kết quả */}
      {message && (
        <div
          className={`p-3 rounded-xl text-sm ${
            foundProduct
              ? "bg-green-50 text-green-600 border border-green-300"
              : "bg-red-50 text-red-600 border border-red-300"
          }`}
        >
          {message}
        </div>
      )}

      {/* Hiển thị chi tiết sản phẩm nếu tìm thấy */}
      {foundProduct && (
        <div className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-gray-800">{foundProduct.name}</h3>
          <p className="text-pink-500 font-bold">
            {foundProduct.price.toLocaleString()}₫
          </p>
        </div>
      )}
    </div>
  )
}
