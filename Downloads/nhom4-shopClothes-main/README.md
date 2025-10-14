# ⚡ React + Vite + TypeScript + TanStack + Zustand + Axios + Yup + React Router DOM

> 🧩 Một starter template mạnh mẽ, dễ mở rộng và hiện đại cho React.  
> Kết hợp **state management**, **server data fetching**, **form validation**, và **routing** cực mượt!

---

## 🧠 Stack chính

| Công nghệ | Mô tả |
|------------|--------|
| ⚛️ **React + Vite** | Cấu trúc hiện đại, build siêu nhanh |
| 🔀 **React Router DOM** | Quản lý route client-side linh hoạt |
| 🪣 **TanStack Query (React Query)** | Quản lý **server state** (fetch, cache, refetch...) |
| 🧠 **Zustand** | Quản lý **global state** siêu nhẹ, dễ hiểu |
| 🌐 **Axios** | Gọi API tiện lợi với interceptors |
| ✅ **Yup** | Validation schema mạnh mẽ |
| 🧰 **TypeScript** | Type an toàn, phát hiện lỗi sớm |

---

## 🏗️ Cài đặt

```bash
git clone https://github.com/your-username/awesome-react-starter.git
cd awesome-react-starter
npm install
npm run dev
src/
│
├── api/
│   └── axiosClient.ts        # Cấu hình Axios (baseURL, interceptors)
│
├── hooks/
│   └── useUserQuery.ts       # Hook React Query cho user
│
├── store/
│   └── useUserStore.ts       # Store Zustand
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   └── Login.tsx
│
├── validation/
│   └── loginSchema.ts        # Yup schema validation
│
├── router/
│   └── index.tsx             # React Router config
│
├── App.tsx
└── main.tsx
// src/api/axiosClient.ts

🪄 Cấu hình Axios
import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: { 'Content-Type': 'application/json' },
})

axiosClient.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err.response?.data || err.message)
)
⚡ TanStack Query (React Query)
// src/hooks/useUserQuery.ts
import { useQuery } from '@tanstack/react-query'
import { axiosClient } from '../api/axiosClient'

export const useUserQuery = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => axiosClient.get('/user'),
  })
}


🧠 Zustand Store
// src/store/useUserStore.ts
import { create } from 'zustand'

interface UserState {
  user: string | null
  setUser: (name: string) => void
  logout: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (name) => set({ user: name }),
  logout: () => set({ user: null }),
}))

✅ Yup Validation
// src/validation/loginSchema.ts
import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  password: yup.string().min(6, 'Tối thiểu 6 ký tự').required('Vui lòng nhập mật khẩu'),
})

🧭 React Router DOM
// src/router/index.tsx
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}
