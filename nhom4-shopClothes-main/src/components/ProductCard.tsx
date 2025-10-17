import React from "react"

export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Áo thun bé trai Basic",
    price: 159000,
    image:
      "https://bizweb.dktcdn.net/100/415/697/products/2-a1f3923b-edc0-4612-aa4c-b9b045d48fb6.jpg?v=1706691017533",
    description: "Áo thun cotton thoáng mát, họa tiết đơn giản cho bé trai .",
    category: "Bé trai",
  },
  {
    id: "2",
    name: "Váy công chúa bé gái ",
    price: 249000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDzKJnwbr6R2QsA9Zy0rCAkHRxnCN4ym7Og&s",
    description: "Váy công chúa  lung linh cho bé gái từ 3–8 tuổi.",
    category: "Bé gái",
  },
  {
    id: "3",
    name: "Bộ đồ mùa hè bé trai",
    price: 189000,
    image:
      "https://image.hm.com/assets/hm/2f/ef/2fefcaa36bc3d9b414ab2dadd2df48ccca5b643a.jpg?imwidth=564",
    description: "Chất liệu mát nhẹ, phù hợp cho các hoạt động ngoài trời.",
    category: "Bé trai",
  },
  {
    id: "4",
    name: "Áo khoác bé gái dễ thương",
    price: 279000,
    image:
      "https://image.hm.com/assets/hm/0b/d7/0bd77e7ce3dc0d12328abf2ef7b878d257ef7300.jpg?imwidth=564",
    description: "Giữ ấm tốt, thiết kế thời trang, phù hợp mùa thu – đông.",
    category: "Bé gái",
  },
  {
    id: "5",
    name: "Bộ thể thao bé trai ",
    price: 229000,
    image:
      "https://lados.vn/wp-content/uploads/2024/09/vn-11134207-7r98o-lwy0c2xlu95lbc.png",
    description: "Bộ đồ thể thao năng động, co giãn, dễ chịu khi vận động.",
    category: "Bé trai",
  },
  {
    id: "6",
    name: "Đầm hoa bé gái mùa hè",
    price: 199000,
    image:
      "https://image.hm.com/assets/hm/c7/69/c7693553931fd0af8877b88ac43f9bc1a9ae4c8b.jpg?imwidth=564",
    description: "Vải voan mỏng nhẹ, họa tiết hoa pastel đáng yêu.",
    category: "Bé gái",
  },
  {
    id: "7",
    name: "Áo sơ mi bé trai caro đen",
    price: 175000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmwTSaAu3Tb-Po_46PfwvuBTc9vaAN9H4hw&s",
    description: "Áo sơ mi caro cổ bẻ, phù hợp cho bé trai 4–10 tuổi.",
    category: "Bé trai",
  },
  {
    id: "8",
    name: "Quần jean bé gái ",
    price: 329000,
    image:
      "https://image.hm.com/assets/hm/16/e8/16e824af4d2353a868a10bb0a3eeec7109f9c15a.jpg?imwidth=564",
    description: "Chất liệu vải jean thoáng mát cho bé gái ",
    category: "Bé gái",
  },
]

export default function ProductCard() {
  const handleAddToCart = (product: Product) => {
    alert(`🛒 Đã thêm "${product.name}" vào giỏ hàng!`)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-pink-600 text-center">
        👕 Sản phẩm nổi bật
      </h2>

      {/* Danh sách sản phẩm, mỗi sản phẩm là một hàng ngang */}
      <div className="space-y-6">
        {products.map((product) => (
          // **Thay đổi chính:** Sử dụng Flexbox để tạo layout ngang
          <div
            key={product.id}
            // `flex-col md:flex-row`: Hiển thị dọc trên mobile, ngang trên desktop
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            {/* Phần hình ảnh */}
            <img
              src={product.image}
              alt={product.name}
              // Ảnh chiếm 1/3 chiều rộng trên desktop
              className="w-full h-64 md:h-auto md:w-1/3 object-cover"
            />

            {/* Phần thông tin sản phẩm */}
            <div className="p-5 flex flex-col flex-grow">
              {/* flex-grow để phần này chiếm hết không gian còn lại */}
              <div>
                <p className="text-sm text-gray-400 mb-1">{product.category}</p>
                <h3 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2 min-h-[40px] line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* Đẩy giá và nút xuống dưới cùng */}
              <div className="mt-auto pt-4">
                <p className="text-pink-500 font-bold text-2xl mb-4">
                  {product.price.toLocaleString()}₫
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-pink-500 text-white py-2.5 rounded-xl hover:bg-pink-600 transition-colors font-semibold"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}