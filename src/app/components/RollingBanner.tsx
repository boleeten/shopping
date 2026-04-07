const MESSAGES = [
  "✦  NEW ARRIVALS — 2026 S/S COLLECTION NOW IN STORE",
  "✦  5만원 이상 구매 시 무료배송",
  "✦  신규 회원 가입 시 첫 구매 10% 할인 쿠폰 증정",
  "✦  당일 오후 2시 이전 주문 시 당일 출고",
  "✦  SEASON SALE — UP TO 50% OFF SELECT STYLES",
  "✦  카드사 청구 할인 이벤트 진행 중",
  "✦  PIONNET MEMBERS — 적립금 2배 적용 기간",
];

const TRACK = [...MESSAGES, ...MESSAGES];

export function RollingBanner() {
  return (
    <div
      className="w-full overflow-hidden bg-[#181A1D] py-[11px] select-none"
      aria-label="공지 배너"
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "pionnet-marquee 36s linear infinite",
          willChange: "transform",
        }}
      >
        {TRACK.map((msg, i) => (
          <span
            key={i}
            className="inline-block px-[32px] text-[13px] text-white tracking-wide"
            style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif", fontWeight: 400 }}
          >
            {msg}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes pionnet-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
