import { useState } from "react";
import svgPaths from "../../imports/Frame1/svg-aru92klx2b";

export interface Product {
  id: number;
  brand: string;
  name: string;
  originalPrice: number;
  discountRate: number;
  discountedPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  isNew?: boolean;
  isBest?: boolean;
}

interface ProductCardProps {
  product: Product;
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 11.6746 11" fill="none">
      <path
        d={svgPaths.p2098a900}
        fill="#D1D5DB"
        stroke="#D1D5DB"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ liked }: { liked: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d={svgPaths.pe799b80}
        fill={liked ? "#d4183d" : "none"}
        stroke={liked ? "#d4183d" : "#DEDEE4"}
        strokeWidth="1.5"
        strokeLinejoin="round"
        transform="translate(0.5 2)"
      />
    </svg>
  );
}

export function ProductCard({ product }: ProductCardProps) {
  const [liked, setLiked] = useState(false);
  const [imgError, setImgError] = useState(false);

  const formatPrice = (price: number) =>
    price.toLocaleString("ko-KR");

  const filledStars = Math.round(product.rating);

  return (
    <div className="flex flex-col gap-[6px] md:gap-[8px] cursor-pointer group">
      {/* Thumbnail */}
      <div className="relative overflow-hidden bg-[#F5F5F5] rounded-sm" style={{ aspectRatio: "338 / 450" }}>
        <img
          src={imgError ? `https://placehold.co/338x450/f5f5f5/999?text=${product.brand}` : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(24,26,29,0.03)]" />

        {/* Badges */}
        <div className="absolute top-[8px] left-[8px] flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-[#181A1D] text-white text-[9px] md:text-[10px] px-[5px] md:px-[6px] py-[2px] rounded-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              NEW
            </span>
          )}
          {product.isBest && (
            <span className="bg-[#0588f0] text-white text-[9px] md:text-[10px] px-[5px] md:px-[6px] py-[2px] rounded-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              BEST
            </span>
          )}
        </div>

        {/* Heart button */}
        <button
          className="absolute bottom-[8px] right-[8px] size-[28px] md:size-[32px] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
          aria-label="찜하기"
        >
          <HeartIcon liked={liked} />
        </button>
      </div>

      {/* Product info */}
      <div className="flex flex-col gap-[3px] md:gap-[4px] pr-1">
        {/* Brand */}
        <p
          className="text-[12px] md:text-[14px] text-[#171717] overflow-hidden text-ellipsis whitespace-nowrap font-semibold"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {product.brand}
        </p>

        {/* Product name */}
        <p
          className="text-[12px] md:text-[14px] text-[#171717] overflow-hidden"
          style={{
            fontFamily: "Inter, 'Noto Sans KR', sans-serif",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            lineHeight: "18px",
            maxHeight: "36px",
            fontWeight: 400,
          }}
        >
          {product.name}
        </p>

        {/* Price */}
        <div className="flex items-center gap-[4px] md:gap-[6px] flex-wrap mt-[2px]">
          <span
            className="text-[14px] md:text-[16px] text-[#0588f0]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            {product.discountRate}%
          </span>
          <div className="flex items-center text-[14px] md:text-[16px] text-[#171717]">
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
              {formatPrice(product.discountedPrice)}
            </span>
            <span style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif", fontWeight: 400 }}>원</span>
          </div>
          <div className="relative hidden sm:block">
            <span
              className="text-[13px] md:text-[14px] text-[#838383]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              {formatPrice(product.originalPrice)}
            </span>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#838383] -translate-y-1/2" />
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-[2px]">
          <StarIcon />
          <span
            className="text-[11px] md:text-[12px] text-[#646464] translate-y-[2px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "16px" }}
          >
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
}