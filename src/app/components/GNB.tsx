import { useState } from "react";
import svgPaths from "../../imports/Frame1/svg-aru92klx2b";
import { SearchLayer } from "./SearchLayer";

const categories = ["Tops", "Bottoms", "Outerwear", "Accessories", "Shoes", "Bags"];
const rightMenus = ["기획전", "이벤트", "SALE"];

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="10.5" cy="10.5" r="7.5" stroke="#181A1D" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M16 16L21 21" stroke="#181A1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.p668dc00} stroke="#181A1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.p3852a900} stroke="#181A1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CartIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d={svgPaths.pc8fe6c0} stroke="#181A1D" strokeWidth="1.5" strokeLinejoin="round" />
        <path d={svgPaths.p3158f900} stroke="#181A1D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="absolute -right-1 -top-1 size-[18px] rounded-full bg-[#1A55F9] flex items-center justify-center">
        <span className="text-white text-[10px] leading-none" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>12</span>
      </div>
    </div>
  );
}

function RecentlyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20 5V9H16" stroke="#181A1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.paf91b80} stroke="#181A1D" strokeWidth="1.5" strokeLinecap="round" strokeMiterlimit="10" />
      <path d="M11 9V13L13 14" stroke="#181A1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 6H20" stroke="#181A1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12H20" stroke="#181A1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 18H20" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface GNBProps {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export function GNB({ activeCategory, onCategoryChange }: GNBProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* Top bar - Logo + User icons */}
      <div className="w-full border-b border-[#DEDEE4] relative">
        <div className="max-w-[1420px] mx-auto px-4 xl:px-0 h-[64px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <svg viewBox="0 0 156 46" className="h-[28px] lg:h-[32px]" fill="none" style={{ width: "auto" }}>
              <path d={svgPaths.p10dc6b80} fill="#181A1D" />
            </svg>
          </div>

          {/* User menu icons */}
          <div className="flex items-center gap-[20px]">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`shrink-0 cursor-pointer hover:opacity-70 transition-opacity ${searchOpen ? "opacity-70" : ""}`}
            >
              <SearchIcon />
            </button>
            <button className="hidden sm:block shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
              <MyIcon />
            </button>
            <button className="shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
              <CartIcon />
            </button>
            <button className="hidden sm:block shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
              <RecentlyIcon />
            </button>
            {/* Mobile menu button */}
            <button className="md:hidden shrink-0 cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <HamburgerIcon />
            </button>
          </div>
        </div>

        {/* Search layer dropdown */}
        {searchOpen && (
          <SearchLayer onClose={() => setSearchOpen(false)} />
        )}
      </div>

      {/* Category navigation bar */}
      <div className="w-full bg-white border-b border-[#DEDEE4] hidden md:block">
        <div className="max-w-[1420px] mx-auto px-4 xl:px-0 h-[54px] flex items-center justify-between">
          <div className="flex items-center gap-[28px]">
            <button className="shrink-0 hover:opacity-70 transition-opacity">
              <HamburgerIcon />
            </button>
            <nav className="flex items-center gap-[28px]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange?.(cat)}
                  className={`text-[14px] whitespace-nowrap transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "text-[#171717] font-semibold border-b-2 border-[#171717] pb-0.5"
                      : "text-[#171717] font-medium hover:text-[#1A55F9]"
                  }`}
                  style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-[28px]">
            {rightMenus.map((menu) => (
              <button
                key={menu}
                className={`text-[14px] whitespace-nowrap cursor-pointer hover:text-[#1A55F9] transition-colors ${
                  menu === "SALE" ? "text-[#d4183d] font-medium" : "text-[#737373] font-normal"
                }`}
                style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
              >
                {menu}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#DEDEE4] px-4 py-3">
          <nav className="flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onCategoryChange?.(cat);
                  setMobileMenuOpen(false);
                }}
                className={`text-[14px] text-left py-1 ${
                  activeCategory === cat ? "text-[#1A55F9] font-semibold" : "text-[#171717] font-medium"
                }`}
                style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
              >
                {cat}
              </button>
            ))}
            <div className="h-px bg-[#DEDEE4] my-1" />
            {rightMenus.map((menu) => (
              <button
                key={menu}
                className={`text-[14px] text-left py-1 ${menu === "SALE" ? "text-[#d4183d] font-medium" : "text-[#737373] font-normal"}`}
                style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
              >
                {menu}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}