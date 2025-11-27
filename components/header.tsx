"use client";

import { ShoppingCart, User } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed left-0 top-0 w-full h-16 border-b border-gray-300 flex items-center justify-end pl-60 pr-6 z-20">
      <div className="h-full px-6 lg:pl-80 lg:pr-12 flex items-center justify-between">

        {/* Quick Actions */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted rounded-md transition-colors">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Login</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted rounded-md transition-colors relative">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
