"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { ShoppingBag, ShoppingCart, Plus, Minus, X } from "lucide-react";
import { Button } from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { id: 1, name: "Elite Pro Hoodie", price: 55, category: "Apparel", image: "Hoodie" },
  { id: 2, name: "DMS Official Jersey", price: 45, category: "Esports", image: "Jersey" },
  { id: 3, name: "Tactical Cap - Blue", price: 25, category: "Apparel", image: "Cap" },
  { id: 4, name: "Legacy Gaming Mousepad", price: 35, category: "Gear", image: "Mousepad" },
  { id: 5, name: "Champion Joggers", price: 50, category: "Apparel", image: "Joggers" },
  { id: 6, name: "DMS Signature Mug", price: 15, category: "Accessories", image: "Mug" },
];

export default function StorePage() {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen flex flex-col pt-32">
      <Navbar />
      
      <Section className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">Merch.</h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Gear up with official DMS apparel and equipment. Designed for performance, built for champions.
            </p>
          </div>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center space-x-3 bg-white border border-slate-200 px-6 py-3 rounded-full hover:shadow-lg transition-shadow relative"
          >
            <ShoppingCart size={20} />
            <span className="font-bold uppercase tracking-widest text-sm">Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-[2.5rem] border border-slate-100 p-6 flex flex-col hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square bg-slate-50 rounded-[2rem] mb-6 overflow-hidden relative flex items-center justify-center text-slate-300 font-black text-3xl transition-transform group-hover:scale-95 duration-500">
                {product.image}
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{product.category}</p>
                  <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                </div>
                <p className="text-xl font-black text-primary">${product.price}</p>
              </div>
              <Button onClick={() => addToCart(product)} className="w-full mt-auto group-hover:bg-accent space-x-2">
                <Plus size={18} />
                <span>Add to Cart</span>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-slate-100 rounded-full">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-6">
                {cart.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <div className="w-20 h-20 bg-slate-50 rounded-full mx-auto flex items-center justify-center text-slate-300">
                      <ShoppingBag size={40} />
                    </div>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Your cart is empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-slate-100 rounded-2xl">
                      <div className="w-20 h-20 bg-slate-50 rounded-xl shrink-0 flex items-center justify-center text-xs font-black text-slate-300">
                        {item.image}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900">{item.name}</h4>
                        <p className="text-primary font-black">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => removeFromCart(item.id)} className="p-1 text-slate-400 hover:text-red-500">
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="pt-8 border-t border-slate-100 space-y-4">
                  <div className="flex justify-between items-center text-xl font-black">
                    <span>Total</span>
                    <span>${cartTotal}</span>
                  </div>
                  <Button className="w-full" size="lg">Checkout Now</Button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
