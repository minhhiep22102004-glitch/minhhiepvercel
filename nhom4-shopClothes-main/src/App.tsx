import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react"
import ProductCard from "./components/ProductCard"
import ChatSearch from "./components/ChatSearch"

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-pink-500 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-2xl font-bold tracking-wide">
            
          </h1>
          <p className="text-center text-sm opacity-90">
           
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-6 py-8 space-y-8">
        <ChatSearch />
        <ProductCard />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 border-t">
        <p>© {new Date().getFullYear()} Nhóm 4 — Website bán quần áo trẻ em</p>
      </footer>
    </div>
  )
}

export default App
