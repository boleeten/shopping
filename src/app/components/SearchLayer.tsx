import { useState } from "react";

interface SearchLayerProps {
  onClose: () => void;
}

const RECENT_SEARCHES = [
  "최근검색어 텍스트 노출",
  "펄리테루",
  "스커트",
  "메종키츠네",
  "AM215AAC1AAM215AAC1",
  "무스너클",
  "가디건",
];

const POPULAR_SEARCHES = [
  "인기검색어 텍스트 노출",
  "겨울 코트",
  "핸드폰케이스",
  "올해 2022년 명절선물",
  "폴리테루",
  "올여름 여성 스키니진 바지",
  "남성을 위한정장세트",
  "잠잘 오는 수면양말",
  "이번주 신상특가 아이템",
  "추카20%",
];

const FEATURED_LINKS = [
  { tag: "기획전", text: "브루클린웍스의 텐트 ROI" },
  { tag: "기획전", text: "겨울 데일리 레이어링" },
  { tag: "기획전", text: "효율을 높여줄 데스크 세트" },
  { tag: "이벤트", text: "사은품 증정 EVENT" },
  { tag: "이벤트", text: "사은품 증정 EVENT" },
  { tag: "이벤트", text: "사은품 증정 EVENT" },
];

function CloseIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M9 1L1 9" stroke="#767676" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M1 1L9 9" stroke="#767676" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function SearchLayer({ onClose }: SearchLayerProps) {
  const [query, setQuery] = useState("");
  const [recentList, setRecentList] = useState(RECENT_SEARCHES);

  const removeRecent = (idx: number) => {
    setRecentList((prev) => prev.filter((_, i) => i !== idx));
  };

  const clearAll = () => setRecentList([]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
      />

      {/* Search layer panel */}
      <div
        className="absolute left-0 right-0 top-full z-50 bg-white shadow-[0px_4px_20px_0px_rgba(175,177,182,0.25)]"
        style={{ fontFamily: "Pretendard, Inter, 'Noto Sans KR', sans-serif" }}
      >
        {/* Search input bar */}
        <div className="border-b border-[#EBEBEB]">
          <div className="max-w-[1420px] mx-auto px-4 xl:px-0 h-[54px] flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#191919]">
              <circle cx="10.5" cy="10.5" r="7.5" stroke="#191919" strokeWidth="1.5" strokeMiterlimit="10" />
              <path d="M16 16L21 21" stroke="#191919" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="검색어를 입력해주세요"
              autoFocus
              className="flex-1 text-[15px] text-[#191919] outline-none bg-transparent placeholder:text-[#AAAAAA]"
              onKeyDown={(e) => e.key === "Escape" && onClose()}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="shrink-0 p-1 hover:opacity-70 transition-opacity cursor-pointer"
              >
                <CloseIcon />
              </button>
            )}
          </div>
        </div>

        {/* Main content: recent + popular */}
        <div className="max-w-[1420px] mx-auto px-4 xl:px-0">
          <div className="flex gap-0 py-[24px]">
            {/* 최근 검색어 */}
            <div className="w-[220px] shrink-0">
              <div className="flex items-center justify-between mb-[12px]">
                <span className="text-[15px] font-semibold text-[#191919] tracking-[-0.3px]">최근 검색어</span>
                <button
                  onClick={clearAll}
                  className="text-[13px] text-[#767676] hover:text-[#191919] transition-colors cursor-pointer"
                >
                  전체삭제
                </button>
              </div>
              {recentList.length === 0 ? (
                <p className="text-[13px] text-[#AAAAAA] py-2">최근 검색어가 없습니다</p>
              ) : (
                <ul>
                  {recentList.map((item, i) => (
                    <li key={i} className="flex items-center justify-between py-[7px] group cursor-pointer">
                      <span className="text-[14px] text-[#191919] truncate w-[172px] hover:text-[#0588f0] transition-colors">
                        {item}
                      </span>
                      <button
                        onClick={() => removeRecent(i)}
                        className="shrink-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        aria-label="삭제"
                      >
                        <CloseIcon />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Divider */}
            <div className="w-px bg-[#F1F1F5] mx-[20px] self-stretch" />

            {/* 인기 검색어 */}
            <div className="w-[220px] shrink-0">
              <div className="flex items-center justify-between mb-[12px]">
                <span className="text-[15px] font-semibold text-[#191919] tracking-[-0.3px]">인기 검색어</span>
                <span className="text-[12px] text-[#767676]">12.21 16:00:00</span>
              </div>
              <ul>
                {POPULAR_SEARCHES.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-[6px] py-[7px] cursor-pointer group"
                  >
                    <span className="text-[13px] font-semibold text-[#191919] w-[18px] shrink-0">{i + 1}</span>
                    <span className="text-[14px] text-[#191919] truncate group-hover:text-[#0588f0] transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Featured links - gray bg */}
        <div className="bg-[#F8F8FA] border-t border-[#F1F1F5]">
          <div className="max-w-[1420px] mx-auto px-4 xl:px-0 py-[4px]">
            <div className="flex flex-wrap">
              {FEATURED_LINKS.map((link, i) => (
                <button
                  key={i}
                  className="flex items-center gap-[7px] py-[4px] pr-[24px] cursor-pointer group"
                >
                  <span className="text-[12px] font-semibold text-[#767676] bg-[#F0F0F4] px-[4px] py-[3px] shrink-0">
                    {link.tag}
                  </span>
                  <span className="text-[14px] text-[#191919] group-hover:text-[#0588f0] transition-colors whitespace-nowrap">
                    {link.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
