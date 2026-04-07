import { useState } from "react";

export interface FilterState {
  category: string[];
  priceMin: number | null;
  priceMax: number | null;
  brands: string[];
  sizes: string[];
  ratingMin: number | null;
  sortBy: string;
}

interface FilterPanelProps {
  totalCount: number;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const SUB_CATEGORIES = ["전체", "티셔츠", "맨투맨", "후드", "셔츠", "니트", "블라우스", "탱크탑"];
const BRANDS = ["BURBERRY", "GUCCI", "PRADA", "MONCLER", "STONE ISLAND", "POLO RALPH LAUREN", "TOMMY HILFIGER", "LACOSTE"];
const SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
const PRICE_RANGES = [
  { label: "전체", min: null, max: null },
  { label: "~5만원", min: null, max: 50000 },
  { label: "5~10만원", min: 50000, max: 100000 },
  { label: "10~20만원", min: 100000, max: 200000 },
  { label: "20~50만원", min: 200000, max: 500000 },
  { label: "50만원~", min: 500000, max: null },
];
const RATINGS = [4, 3, 2, 1];
const SORT_OPTIONS = [
  { value: "popular", label: "인기순" },
  { value: "newest", label: "신상품순" },
  { value: "price_asc", label: "낮은가격순" },
  { value: "price_desc", label: "높은가격순" },
  { value: "rating", label: "평점순" },
];

interface FilterButtonProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  activeCount?: number | string;
}

function FilterButton({ label, isOpen, onToggle, activeCount }: FilterButtonProps) {
  const hasActive = activeCount !== undefined && activeCount !== null && activeCount !== 0 && activeCount !== "";
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-[6px] px-[14px] py-[8px] border rounded-sm text-[14px] whitespace-nowrap transition-all duration-150 cursor-pointer ${
        isOpen || hasActive
          ? "border-[#181A1D] bg-[#181A1D] text-white"
          : "border-[#DEDEE4] bg-white text-[#171717] hover:border-[#181A1D]"
      }`}
      style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif", fontWeight: 400 }}
    >
      {label}
      {hasActive ? (
        <span className="text-[12px] px-[5px] py-[1px] rounded-full bg-white text-[#181A1D]">
          {activeCount}
        </span>
      ) : null}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      >
        <path
          d="M2 4L6 8L10 4"
          stroke={isOpen || hasActive ? "white" : "#171717"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function FilterPanel({ totalCount, filters, onFilterChange }: FilterPanelProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [customMin, setCustomMin] = useState<string>("");
  const [customMax, setCustomMax] = useState<string>("");

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleArrayFilter = (key: "category" | "brands" | "sizes", value: string) => {
    const current = filters[key];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange({ ...filters, [key]: updated });
  };

  const setPrice = (min: number | null, max: number | null) => {
    onFilterChange({ ...filters, priceMin: min, priceMax: max });
  };

  const applyCustomPrice = () => {
    const min = customMin !== "" ? parseInt(customMin) : null;
    const max = customMax !== "" ? parseInt(customMax) : null;
    onFilterChange({ ...filters, priceMin: min, priceMax: max });
  };

  const setRating = (rating: number | null) => {
    onFilterChange({ ...filters, ratingMin: rating });
  };

  const clearAll = () => {
    onFilterChange({
      category: [],
      priceMin: null,
      priceMax: null,
      brands: [],
      sizes: [],
      ratingMin: null,
      sortBy: filters.sortBy,
    });
  };

  const hasActiveFilters =
    filters.category.length > 0 ||
    filters.brands.length > 0 ||
    filters.sizes.length > 0 ||
    filters.priceMin !== null ||
    filters.priceMax !== null ||
    filters.ratingMin !== null;

  const currentPriceLabel = () => {
    const range = PRICE_RANGES.find(
      (r) => r.min === filters.priceMin && r.max === filters.priceMax
    );
    return range && (range.min !== null || range.max !== null) ? 1 : 0;
  };

  /* ── Expanded panel content per filter ── */
  const renderPanel = () => {
    if (!openDropdown) return null;

    if (openDropdown === "category") {
      return (
        <div className="flex flex-wrap gap-x-[4px] gap-y-[4px]">
          {SUB_CATEGORIES.map((cat) => {
            const checked = filters.category.includes(cat) || (cat === "전체" && filters.category.length === 0);
            return (
              <label
                key={cat}
                className={`flex items-center gap-[8px] px-[14px] py-[8px] border rounded-sm cursor-pointer transition-colors text-[13px] ${
                  checked ? "border-[#181A1D] bg-[#181A1D] text-white" : "border-[#DEDEE4] text-[#171717] hover:border-[#181A1D]"
                }`}
                style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => {
                    if (cat === "전체") {
                      onFilterChange({ ...filters, category: [] });
                    } else {
                      toggleArrayFilter("category", cat);
                    }
                  }}
                  className="hidden"
                />
                {cat}
              </label>
            );
          })}
        </div>
      );
    }

    if (openDropdown === "price") {
      return (
        <div className="flex flex-wrap items-center gap-[8px]">
          {PRICE_RANGES.map((range) => {
            const isSelected = range.min === filters.priceMin && range.max === filters.priceMax;
            return (
              <button
                key={range.label}
                onClick={() => setPrice(range.min, range.max)}
                className={`px-[14px] py-[8px] border rounded-sm text-[13px] cursor-pointer transition-colors ${
                  isSelected ? "border-[#181A1D] bg-[#181A1D] text-white" : "border-[#DEDEE4] text-[#171717] hover:border-[#181A1D]"
                }`}
                style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
              >
                {range.label}
              </button>
            );
          })}
          {/* Direct input */}
          <div className="flex items-center gap-[6px] ml-[8px]">
            <span className="text-[12px] text-[#74767C]" style={{ fontFamily: "Inter, sans-serif" }}>직접입력</span>
            <input
              type="number"
              placeholder="최소"
              value={customMin}
              onChange={(e) => setCustomMin(e.target.value)}
              className="w-[90px] border border-[#DEDEE4] rounded-sm px-[8px] py-[6px] text-[13px] outline-none focus:border-[#181A1D] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
            <span className="text-[12px] text-[#74767C]">~</span>
            <input
              type="number"
              placeholder="최대"
              value={customMax}
              onChange={(e) => setCustomMax(e.target.value)}
              className="w-[90px] border border-[#DEDEE4] rounded-sm px-[8px] py-[6px] text-[13px] outline-none focus:border-[#181A1D] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
            <button
              onClick={applyCustomPrice}
              className="bg-[#181A1D] text-white text-[13px] px-[12px] py-[6px] rounded-sm cursor-pointer hover:bg-[#2d2f34] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              적용
            </button>
          </div>
        </div>
      );
    }

    if (openDropdown === "brand") {
      return (
        <div className="flex flex-wrap gap-x-[4px] gap-y-[4px]">
          {BRANDS.map((brand) => {
            const checked = filters.brands.includes(brand);
            return (
              <label
                key={brand}
                className={`flex items-center gap-[8px] px-[14px] py-[8px] border rounded-sm cursor-pointer transition-colors text-[13px] ${
                  checked ? "border-[#181A1D] bg-[#181A1D] text-white" : "border-[#DEDEE4] text-[#171717] hover:border-[#181A1D]"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleArrayFilter("brands", brand)}
                  className="hidden"
                />
                {brand}
              </label>
            );
          })}
        </div>
      );
    }

    if (openDropdown === "size") {
      return (
        <div className="flex flex-wrap gap-[6px]">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => toggleArrayFilter("sizes", size)}
              className={`px-[16px] py-[8px] border rounded-sm text-[13px] cursor-pointer transition-colors ${
                filters.sizes.includes(size)
                  ? "border-[#181A1D] bg-[#181A1D] text-white"
                  : "border-[#DEDEE4] text-[#171717] hover:border-[#181A1D]"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {size}
            </button>
          ))}
        </div>
      );
    }

    if (openDropdown === "rating") {
      return (
        <div className="flex flex-wrap gap-[6px]">
          <button
            onClick={() => setRating(null)}
            className={`px-[14px] py-[8px] border rounded-sm text-[13px] cursor-pointer transition-colors ${
              filters.ratingMin === null ? "border-[#181A1D] bg-[#181A1D] text-white" : "border-[#DEDEE4] text-[#171717] hover:border-[#181A1D]"
            }`}
            style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
          >
            전체
          </button>
          {RATINGS.map((rating) => (
            <button
              key={rating}
              onClick={() => setRating(rating)}
              className={`flex items-center gap-[6px] px-[14px] py-[8px] border rounded-sm cursor-pointer transition-colors ${
                filters.ratingMin === rating ? "border-[#181A1D] bg-[#181A1D] text-white" : "border-[#DEDEE4] text-[#171717] hover:border-[#181A1D]"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <div className="flex items-center gap-[2px]">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 0.642L7.163 4.16H10.96C11.163 4.16 11.249 4.418 11.083 4.534L8.041 6.709L9.205 10.227C9.269 10.416 9.045 10.579 8.879 10.458L5.837 8.283L2.795 10.458C2.63 10.574 2.406 10.416 2.47 10.227L3.633 6.709L0.591 4.534C0.426 4.418 0.511 4.16 0.714 4.16H4.477L5.64 0.642C5.704 0.453 5.971 0.453 6.035 0.642Z"
                      fill={i < rating ? "#FFB800" : (filters.ratingMin === rating ? "#ffffff66" : "#B1B3B8")}
                    />
                  </svg>
                ))}
              </div>
              <span className="text-[13px]">{rating}점 이상</span>
            </button>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full">
      {/* Filter + Sort row */}
      <div className={`flex flex-col py-[14px] md:py-[16px] ${!openDropdown ? "border-b border-[#DEDEE4]" : ""}`}>
        {/* Top row on mobile: count + sort */}
        <div className="flex items-center justify-between sm:hidden mb-3">
          <span
            className="text-[13px] text-[#74767C]"
            style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
          >
            총 <span className="text-[#181A1D] font-medium">{totalCount.toLocaleString()}</span>개
          </span>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value })}
            className="border border-[#DEDEE4] rounded-sm px-[8px] py-[6px] text-[13px] text-[#171717] outline-none cursor-pointer hover:border-[#181A1D] transition-colors bg-white"
            style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Filter buttons row */}
        <div className="flex items-center justify-between gap-4">
          <div
            className="flex items-center gap-[8px] overflow-x-auto flex-nowrap sm:flex-wrap pb-1 sm:pb-0 -mb-1 sm:mb-0 scrollbar-hide"
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            <FilterButton
              label="카테고리"
              isOpen={openDropdown === "category"}
              onToggle={() => toggleDropdown("category")}
              activeCount={filters.category.length}
            />
            <FilterButton
              label="가격"
              isOpen={openDropdown === "price"}
              onToggle={() => toggleDropdown("price")}
              activeCount={currentPriceLabel()}
            />
            <FilterButton
              label="브랜드"
              isOpen={openDropdown === "brand"}
              onToggle={() => toggleDropdown("brand")}
              activeCount={filters.brands.length}
            />
            <FilterButton
              label="사이즈"
              isOpen={openDropdown === "size"}
              onToggle={() => toggleDropdown("size")}
              activeCount={filters.sizes.length}
            />
            <FilterButton
              label="평점"
              isOpen={openDropdown === "rating"}
              onToggle={() => toggleDropdown("rating")}
              activeCount={filters.ratingMin !== null ? 1 : 0}
            />

            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearAll}
                className="flex items-center gap-[4px] px-[12px] py-[8px] text-[13px] text-[#74767C] hover:text-[#181A1D] transition-colors cursor-pointer border border-transparent hover:border-[#DEDEE4] rounded-sm shrink-0"
                style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                필터 초기화
              </button>
            )}
          </div>

          {/* Right: total count + sort — desktop only */}
          <div className="hidden sm:flex items-center gap-[16px] shrink-0">
            <span
              className="text-[14px] text-[#74767C] whitespace-nowrap"
              style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
            >
              총 <span className="text-[#181A1D] font-medium">{totalCount.toLocaleString()}</span>개
            </span>
            <select
              value={filters.sortBy}
              onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value })}
              className="border border-[#DEDEE4] rounded-sm px-[10px] py-[7px] text-[14px] text-[#171717] outline-none cursor-pointer hover:border-[#181A1D] transition-colors bg-white"
              style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Expanded accordion panel */}
        {openDropdown && (
          <div className="mt-[10px] bg-white border border-[#DEDEE4] rounded-[8px] shadow-[0_2px_12px_0_rgba(0,0,0,0.07)] px-[20px] py-[18px]">
            {renderPanel()}
          </div>
        )}
      </div>

      {/* Active filter tags */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-[6px] pt-[12px]">
          {filters.category.map((cat) => (
            <FilterTag
              key={cat}
              label={`카테고리: ${cat}`}
              onRemove={() => toggleArrayFilter("category", cat)}
            />
          ))}
          {(filters.priceMin !== null || filters.priceMax !== null) && (
            <FilterTag
              label={`가격: ${filters.priceMin ? filters.priceMin.toLocaleString() : "0"}~${
                filters.priceMax ? filters.priceMax.toLocaleString() : ""
              }원`}
              onRemove={() => setPrice(null, null)}
            />
          )}
          {filters.brands.map((brand) => (
            <FilterTag
              key={brand}
              label={`브랜드: ${brand}`}
              onRemove={() => toggleArrayFilter("brands", brand)}
            />
          ))}
          {filters.sizes.map((size) => (
            <FilterTag
              key={size}
              label={`사이즈: ${size}`}
              onRemove={() => toggleArrayFilter("sizes", size)}
            />
          ))}
          {filters.ratingMin !== null && (
            <FilterTag
              label={`평점 ${filters.ratingMin}점 이상`}
              onRemove={() => setRating(null)}
            />
          )}
        </div>
      )}
    </div>
  );
}

function FilterTag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div className="flex items-center gap-[6px] bg-[#F5F5F5] border border-[#DEDEE4] rounded-sm px-[10px] py-[4px]">
      <span
        className="text-[12px] text-[#171717]"
        style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
      >
        {label}
      </span>
      <button
        onClick={onRemove}
        className="text-[#74767C] hover:text-[#181A1D] transition-colors cursor-pointer"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}