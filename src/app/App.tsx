import { useState, useEffect, useCallback } from "react";
import { GNB } from "./components/GNB";
import { Footer } from "./components/Footer";
import { ProductCard, Product } from "./components/ProductCard";
import { FilterPanel, FilterState } from "./components/FilterPanel";
import { RollingBanner } from "./components/RollingBanner";
import { projectId, publicAnonKey } from "/utils/supabase/info";

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-5793bf42`;
const ITEMS_PER_PAGE = 40;

const CATEGORIES = ["Tops", "Bottoms", "Outerwear", "Accessories", "Shoes", "Bags"];

const DEFAULT_FILTERS: FilterState = {
  category: [],
  priceMin: null,
  priceMax: null,
  brands: [],
  sizes: [],
  ratingMin: null,
  sortBy: "popular",
};

// ── DB row → Product ────────────────────────────────────────────────────────
function toProduct(row: any): Product {
  return {
    id:              row.id            ?? 0,
    brand:           row.brand         ?? "",
    name:            row.name          ?? "",
    originalPrice:   row.onePrice      ?? 0,   // 정가 (스트라이크)
    discountRate:    row.discount      ?? 0,
    discountedPrice: row.prdPrice      ?? 0,   // 할인가 (메인 가격)
    rating:          row.score         ?? 0,
    reviewCount:     row.reviewercount ?? 0,
    image:           row.img           ?? "",
    isNew:           false,
    isBest:          false,
  };
}

// ── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb({ category }: { category: string }) {
  return (
    <nav className="flex items-center gap-[6px] py-[14px]">
      {["Home", "Fashion", category].map((crumb, i, arr) => (
        <div key={crumb} className="flex items-center gap-[6px]">
          <span
            className={`text-[13px] ${
              i === arr.length - 1
                ? "text-[#181A1D] font-medium"
                : "text-[#74767C] cursor-pointer hover:text-[#181A1D]"
            }`}
            style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
          >
            {crumb}
          </span>
          {i < arr.length - 1 && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2L8 6L4 10" stroke="#B1B3B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </nav>
  );
}

// ── Pagination ───────────────────────────────────────────────────────────────
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}) {
  const maxVisible = 10;
  const startPage = Math.floor((currentPage - 1) / maxVisible) * maxVisible + 1;
  const endPage   = Math.min(startPage + maxVisible - 1, totalPages);
  const pages     = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const navBtn =
    "size-[36px] flex items-center justify-center border border-[#DEDEE4] rounded-sm text-[#74767C] " +
    "hover:border-[#181A1D] hover:text-[#181A1D] transition-colors cursor-pointer " +
    "disabled:opacity-30 disabled:cursor-default";

  return (
    <div className="flex items-center justify-center gap-[4px] py-[40px]">
      {/* First */}
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1} className={navBtn}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M10 2L5 7L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 2L1 7L6 12"   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {/* Prev */}
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className={navBtn}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`size-[36px] flex items-center justify-center border rounded-sm text-[14px] transition-colors cursor-pointer ${
            p === currentPage
              ? "border-[#181A1D] bg-[#181A1D] text-white"
              : "border-[#DEDEE4] text-[#171717] hover:border-[#181A1D] hover:text-[#181A1D]"
          }`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className={navBtn}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {/* Last */}
      <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} className={navBtn}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M4 2L9 7L4 12"   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 2L13 7L8 12"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

// ── Skeleton ─────────────────────────────────────────────────────────────────
function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-[6px] animate-pulse">
      <div className="bg-[#F0F0F0] rounded-sm" style={{ aspectRatio: "338 / 450" }} />
      <div className="flex flex-col gap-[4px]">
        <div className="h-[13px] bg-[#F0F0F0] rounded w-1/2" />
        <div className="h-[12px] bg-[#F0F0F0] rounded w-3/4 mt-1" />
        <div className="h-[12px] bg-[#F0F0F0] rounded w-2/3" />
        <div className="h-[12px] bg-[#F0F0F0] rounded w-1/3 mt-1" />
      </div>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]);
  const [currentPage,    setCurrentPage]    = useState(1);
  const [filters,        setFilters]        = useState<FilterState>(DEFAULT_FILTERS);

  const [products,   setProducts]   = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading,    setLoading]    = useState(true);
  const [error,      setError]      = useState<string | null>(null);
  const [seeding,    setSeeding]    = useState(false);
  const [seedDone,   setSeedDone]   = useState(false);

  // ── fetch ──────────────────────────────────────────────────────────────────
  const fetchProducts = useCallback(async (
    page: number,
    f: FilterState,
    category: string,
  ) => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      params.set("page",     String(page));
      params.set("limit",    String(ITEMS_PER_PAGE));
      params.set("sort",     f.sortBy);
      params.set("category", category);                         // always send
      if (f.priceMin  !== null) params.set("price_min",  String(f.priceMin));
      if (f.priceMax  !== null) params.set("price_max",  String(f.priceMax));
      if (f.ratingMin !== null) params.set("rating_min", String(f.ratingMin));

      const url = `${API_BASE}/products?${params.toString()}`;
      console.log("[App] fetch →", url);

      const res  = await fetch(url, {
        headers: { Authorization: `Bearer ${publicAnonKey}` },
      });
      const json = await res.json();

      if (!res.ok || json.error) {
        throw new Error(json.error ?? `서버 오류 (${res.status})`);
      }

      setProducts((json.products ?? []).map(toProduct));
      setTotalCount(json.total ?? 0);
    } catch (e: any) {
      console.error("[App] 상품 조회 오류:", e);
      setError(e.message ?? "알 수 없는 오류");
    } finally {
      setLoading(false);
    }
  }, []);

  // Re-fetch whenever category / page / filters change
  useEffect(() => {
    fetchProducts(currentPage, filters, activeCategory);
  }, [currentPage, filters, activeCategory, fetchProducts]);

  const totalPages = Math.max(1, Math.ceil(totalCount / ITEMS_PER_PAGE));

  // ── handlers ───────────────────────────────────────────────────────────────
  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
    setFilters(DEFAULT_FILTERS);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (f: FilterState) => {
    setFilters(f);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── seed ───────────────────────────────────────────────────────────────────
  const handleSeed = async () => {
    if (!confirm("Tops, Outerwear, Accessories, Shoes, Bags 카테고리에 더미데이터를 삽입합니다.\n(기존 해당 카테고리 데이터는 삭제됩니다)\n계속하시겠습니까?")) return;
    setSeeding(true);
    try {
      const res  = await fetch(`${API_BASE}/seed`, {
        method: "POST",
        headers: { Authorization: `Bearer ${publicAnonKey}` },
      });
      const json = await res.json();
      if (!res.ok || json.error) throw new Error(json.error ?? "시드 실패");
      setSeedDone(true);
      alert(`✅ 시드 완료! ${json.inserted}개 상품이 삽입되었습니다.`);
      fetchProducts(1, DEFAULT_FILTERS, activeCategory);
      setCurrentPage(1);
      setFilters(DEFAULT_FILTERS);
    } catch (e: any) {
      alert(`❌ 시드 오류: ${e.message}`);
    } finally {
      setSeeding(false);
    }
  };

  // ── render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ minWidth: "320px" }}>
      <GNB activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      {/* Seed button — 작업용, 삽입 완료 후 숨겨짐 */}
      {!seedDone && (
        <div className="hidden w-full bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center justify-center gap-3">
          <span className="text-[13px] text-amber-700" style={{ fontFamily: "Inter, sans-serif" }}>
            Tops · Outerwear · Accessories · Shoes · Bags 더미데이터 준비
          </span>
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="px-[14px] py-[6px] bg-amber-500 hover:bg-amber-600 text-white text-[13px] rounded-sm transition-colors cursor-pointer disabled:opacity-50"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {seeding ? "삽입 중…" : "데이터 삽입"}
          </button>
        </div>
      )}

      <main className="flex-1 w-full pb-[40px] md:pb-[60px]">
        <div className="max-w-[1420px] mx-auto px-4 xl:px-0">

          {/* Breadcrumb */}
          <Breadcrumb category={activeCategory} />

          {/* Category title + count */}
          <div className="mt-[10px] mb-[16px] md:mb-[24px]">
            <h1
              className="text-[#181A1D]"
              style={{
                fontFamily: "Inter, 'Noto Sans KR', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(20px, 3.5vw, 28px)",
                lineHeight: "1.4",
              }}
            >
              {activeCategory}
            </h1>
            <p
              className="text-[13px] md:text-[14px] text-[#74767C] mt-[4px]"
              style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
            >
              {loading ? (
                <span className="inline-block bg-[#F0F0F0] rounded animate-pulse w-[160px] h-[16px]" />
              ) : error ? (
                <span className="text-red-400 text-[13px]">{error}</span>
              ) : (
                `총 ${totalCount.toLocaleString("ko-KR")}개 상품`
              )}
            </p>
          </div>

          {/* Filter panel */}
          <FilterPanel
            totalCount={totalCount}
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          {/* Error state */}
          {error && !loading && (
            <div className="flex flex-col items-center justify-center py-[60px] gap-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#DEDEE4" strokeWidth="2" />
                <path d="M24 14V26" stroke="#B1B3B8" strokeWidth="2" strokeLinecap="round" />
                <circle cx="24" cy="33" r="1.5" fill="#B1B3B8" />
              </svg>
              <p className="text-[15px] text-[#74767C]" style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}>
                상품을 불러오는 중 오류가 발생했습니다
              </p>
              <p className="text-[12px] text-[#AAAAAA] text-center max-w-[400px]">{error}</p>
              <button
                onClick={() => fetchProducts(currentPage, filters, activeCategory)}
                className="px-[20px] py-[10px] border border-[#181A1D] text-[14px] text-[#181A1D] rounded-sm hover:bg-[#181A1D] hover:text-white transition-colors cursor-pointer"
                style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
              >
                다시 시도
              </button>
            </div>
          )}

          {/* Product grid */}
          {!error && (
            <>
              {loading ? (
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-[10px] gap-y-[54px] md:gap-x-[20px] md:gap-y-[70px] mt-[20px] md:mt-[32px]">
                  {Array.from({ length: 10 }).map((_, i) => <ProductSkeleton key={i} />)}
                </div>
              ) : products.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-[10px] gap-y-[54px] md:gap-x-[20px] md:gap-y-[70px] mt-[20px] md:mt-[32px]">
                  {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-[80px] gap-4">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="#DEDEE4" strokeWidth="2" />
                    <path d="M20 44C20 44 24 36 32 36C40 36 44 44 44 44" stroke="#B1B3B8" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="24" cy="26" r="3" fill="#B1B3B8" />
                    <circle cx="40" cy="26" r="3" fill="#B1B3B8" />
                  </svg>
                  <p className="text-[15px] text-[#74767C]" style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}>
                    조건에 맞는 상품이 없습니다
                  </p>
                  <button
                    onClick={() => handleFilterChange(DEFAULT_FILTERS)}
                    className="px-[20px] py-[10px] border border-[#181A1D] text-[14px] text-[#181A1D] rounded-sm hover:bg-[#181A1D] hover:text-white transition-colors cursor-pointer"
                    style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
                  >
                    필터 초기화
                  </button>
                </div>
              )}
            </>
          )}

          {/* Pagination */}
          {!loading && !error && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>

        {/* Rolling banner — full-width, outside container */}
        <RollingBanner />
      </main>

      <Footer />
    </div>
  );
}