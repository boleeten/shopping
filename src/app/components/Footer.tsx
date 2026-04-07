import imgQrCode from "../../imports/Frame1/eb10e1a578a1fb24f98d9e40e779bc513d00bcff.png";
import svgPaths from "../../imports/Frame1/svg-aru92klx2b";

const footerLinks = [
  { label: "회사소개", bold: false },
  { label: "개인정보처리방침", bold: true },
  { label: "영상정보처리기기운영 관리방침", bold: false },
  { label: "이용약관", bold: false },
  { label: "청소년보호방침", bold: false },
  { label: "입점/제휴문의", bold: false },
  { label: "대량구매", bold: false },
];

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.p3f2a8000} fill="#B1B3B8" transform="translate(4 4)" />
    </svg>
  );
}

function KakaoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.p26a78bc0} fill="#B1B3B8" transform="translate(4 4)" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.p1bfa9700} fill="#B1B3B8" transform="translate(3 5.66)" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.p12a64ef0} fill="#B1B3B8" transform="translate(7 3)" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#DEDEE4]">
      {/* Footer links */}
      <div className="max-w-[1420px] mx-auto px-4 xl:px-0">
        <div className="py-[16px] md:h-[70px] md:py-0 flex items-center">
          <div className="flex flex-wrap gap-x-[16px] md:gap-x-[24px] gap-y-2 items-center">
            {footerLinks.map((link, i) => (
              <div key={link.label} className="flex items-center gap-[16px] md:gap-[24px]">
                {i > 0 && <div className="bg-[#DEDEE4] h-[10px] w-px hidden sm:block" />}
                <button
                  className={`text-[12px] md:text-[14px] text-[#181A1D] cursor-pointer hover:underline whitespace-nowrap ${
                    link.bold ? "font-semibold" : "font-normal"
                  }`}
                  style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
                >
                  {link.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#DEDEE4]" />

      {/* Main footer content */}
      <div className="max-w-[1420px] mx-auto px-4 xl:px-0 py-[24px] md:py-[32px]">
        <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8">
          {/* Company info - left */}
          <div className="flex flex-col gap-[16px] md:gap-[20px]">
            <p
              className="text-[20px] md:text-[24px] text-[#181A1D] font-semibold"
              style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
            >
              파이언넷(주)
            </p>
            <div className="flex flex-col gap-[6px] md:gap-[8px]">
              <div className="flex flex-wrap items-center gap-[8px] md:gap-[12px]">
                <span className="text-[12px] md:text-[14px] text-[#54565B]" style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}>
                  대표이사: 홍길동
                </span>
                <div className="bg-[#DEDEE4] h-[10px] w-px" />
                <span className="text-[12px] md:text-[14px] text-[#54565B]" style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}>
                  (우)06115 서울특별시 강서구 마곡동로 36, 파이언넷사옥
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-[8px] md:gap-[12px]">
                <span className="text-[12px] md:text-[14px] text-[#54565B]" style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}>
                  사업자등록번호 : 123-45-67890
                </span>
                <div className="bg-[#DEDEE4] h-[10px] w-px" />
                <span className="text-[12px] md:text-[14px] text-[#54565B]" style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}>
                  통신판매업신고 : XXXX-12345호
                </span>
                <div className="bg-[#DEDEE4] h-[10px] w-px" />
                <button className="flex items-center gap-[2px] text-[12px] md:text-[14px] text-[#181A1D] cursor-pointer hover:underline" style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}>
                  사업자정보확인
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4 2L8 6L4 10" stroke="#181A1D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <span className="text-[12px] md:text-[14px] text-[#54565B]" style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}>
                개인정보보호책임자 : 홍길동
              </span>
              <span className="text-[12px] md:text-[14px] text-[#54565B]" style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}>
                이메일: webmaster@pionnet.com
              </span>
              <span className="text-[12px] md:text-[14px] text-[#54565B]" style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}>
                Copyright ⓒ PIONNET ALL RIGHTS RESERVED.
              </span>
            </div>
          </div>

          {/* Customer center - right */}
          <div className="flex flex-col gap-[20px] md:gap-[24px] items-start lg:items-end">
            {/* Customer center phone */}
            <div className="flex flex-col gap-[4px] items-start lg:items-end">
              <div className="flex items-center gap-[4px]">
                <span
                  className="text-[16px] md:text-[20px] text-[#181A1D] font-medium"
                  style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
                >
                  고객센터
                </span>
                <span
                  className="text-[20px] md:text-[24px] text-[#181A1D] font-bold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  1234-5678
                </span>
              </div>
              <p
                className="text-[11px] md:text-[12px] text-[#74767C]"
                style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
              >
                오전 9시~오후 6시(토요일, 공휴일 휴무)
              </p>
              <div className="flex items-center gap-[6px] mt-[8px]">
                {["1:1 문의", "자주 묻는 질문"].map((btn) => (
                  <button
                    key={btn}
                    className="bg-white border border-[#DEDEE4] rounded-[2px] px-[8px] py-[4px] text-[12px] text-[#171717] cursor-pointer hover:bg-gray-50 transition-colors"
                    style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>

            {/* App download */}
            <div className="flex items-center gap-[12px]">
              <div className="flex flex-col gap-[4px] items-start lg:items-end">
                <p
                  className="text-[13px] md:text-[14px] text-[#181A1D] font-medium"
                  style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
                >
                  APP 다운로드
                </p>
                <p
                  className="text-[11px] md:text-[12px] text-[#74767C]"
                  style={{ fontFamily: "Inter, 'Noto Sans KR', sans-serif" }}
                >
                  스마트폰 QR코드 스캔
                </p>
              </div>
              <div className="size-[60px] border border-[#DEDEE4] overflow-hidden rounded-[2px]">
                <img src={imgQrCode} alt="QR Code" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-[16px]">
              <button className="hover:opacity-70 transition-opacity cursor-pointer"><InstagramIcon /></button>
              <button className="hover:opacity-70 transition-opacity cursor-pointer"><KakaoIcon /></button>
              <button className="hover:opacity-70 transition-opacity cursor-pointer"><YoutubeIcon /></button>
              <button className="hover:opacity-70 transition-opacity cursor-pointer"><FacebookIcon /></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}