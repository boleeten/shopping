import svgPaths from "./svg-aru92klx2b";
import imgQrCodeImage from "./eb10e1a578a1fb24f98d9e40e779bc513d00bcff.png";
import imgThumbnailCase from "./6f4d4643112375eee5ff530304dcc8c20885a49a.png";

function PcXLogo() {
  return (
    <div className="col-1 h-[46px] ml-0 mt-[12px] relative row-1 w-[156px]" data-name="PC / X / LOGO">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 46">
        <g id="PC / X / LOGO">
          <path d={svgPaths.p10dc6b80} fill="var(--fill-0, #181A1D)" id="í¨ì¤ 14947" />
          <g id="Logo Container" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Search">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Search">
          <circle cx="10.5" cy="10.5" id="Ellipse 8404" r="7.5" stroke="var(--stroke-0, #181A1D)" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M16 16L21 21" id="Vector 1760" stroke="var(--stroke-0, #181A1D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Logout() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Logout">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Logout">
          <path d={svgPaths.p5525300} fill="var(--stroke-0, #181A1D)" id="Vector" />
          <path d={svgPaths.p25278c00} id="Vector_2" stroke="var(--stroke-0, #181A1D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function My() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="My">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="My">
          <path d={svgPaths.p668dc00} id="Vector" stroke="var(--stroke-0, #181A1D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3852a900} id="Rectangle 34626135" stroke="var(--stroke-0, #181A1D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CartIcon() {
  return (
    <div className="absolute contents right-[-4px] top-[-1px]" data-name="Cart Icon">
      <div className="absolute right-[-4px] size-[18px] top-[-1px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #1A55F9)" id="Ellipse 2" r="9" />
        </svg>
      </div>
      <p className="absolute font-['Owners_Text:Semibold',sans-serif] leading-[12px] not-italic right-[10px] text-[10px] text-white top-[2px] tracking-[-0.2px] translate-x-full whitespace-nowrap">12</p>
    </div>
  );
}

function Cart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Cart">
      <div className="absolute inset-[29.17%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.36%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 15.5">
            <path d={svgPaths.pc8fe6c0} id="Vector" stroke="var(--stroke-0, #181A1D)" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_35.42%_58.33%_35.42%]">
        <div className="absolute inset-[-10.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.5 8.5">
            <path d={svgPaths.p3158f900} id="Vector 109" stroke="var(--stroke-0, #181A1D)" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <CartIcon />
    </div>
  );
}

function Recently() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Recently">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id=" Recently">
          <path d="M20 5V9H16" id="Vector" stroke="var(--stroke-0, #181A1D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.paf91b80} id="Vector_2" stroke="var(--stroke-0, #181A1D)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M11 9V13L13 14" id="Icon" stroke="var(--stroke-0, #181A1D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function UserMenuIcons() {
  return (
    <div className="col-1 content-stretch flex gap-[20px] h-[31.135px] items-center justify-end ml-[1218px] mt-[17.3px] relative row-1" data-name="User Menu Icons">
      <Search />
      <Logout />
      <My />
      <Cart />
      <Recently />
    </div>
  );
}

function Component() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="로고_아이콘">
      <div className="bg-white col-1 h-[64px] ml-0 mt-0 row-1 w-[1420px]" data-name="BG" />
      <PcXLogo />
      <UserMenuIcons />
    </div>
  );
}

function Category() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Category">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Category">
          <path d="M4 6H20" id="Vector 1762" stroke="var(--stroke-0, #181A1D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4 12H20" id="Vector 1763" stroke="var(--stroke-0, #181A1D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4 18H20" id="Vector 1764" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CategoryNamesContainer() {
  return (
    <div className="col-1 content-stretch flex font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium gap-[28px] items-start leading-[20px] ml-0 mt-0 not-italic relative row-1 text-[#171717] text-[14px] whitespace-nowrap" data-name="Category Names Container">
      <p className="relative shrink-0">대카테고리1</p>
      <p className="relative shrink-0">대카테고리2</p>
      <p className="relative shrink-0">대카테고리3</p>
      <p className="relative shrink-0">대카테고리4</p>
      <p className="relative shrink-0">대카테고리5</p>
      <p className="relative shrink-0">대카테고리6</p>
    </div>
  );
}

function CategoryTextContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Category Text Container">
      <CategoryNamesContainer />
    </div>
  );
}

function Component2() {
  return (
    <div className="col-1 content-stretch flex gap-[28px] h-[27px] items-center ml-0 mt-[11px] relative row-1" data-name="카테고리명">
      <Category />
      <CategoryTextContainer />
    </div>
  );
}

function Component3() {
  return (
    <div className="col-1 content-stretch flex font-normal gap-[28px] h-[27px] items-center justify-end leading-[20px] ml-[1249px] mt-[11px] not-italic relative row-1 text-[#737373] text-[14px] whitespace-nowrap" data-name="매장명">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] relative shrink-0">기획전</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] relative shrink-0">이벤트</p>
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0">SALE</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="카테고리">
      <div className="bg-white col-1 h-[54px] ml-0 mt-0 row-1 w-[1420px]" data-name="BG" />
      <Component2 />
      <Component3 />
    </div>
  );
}

function FooterLinksInnerContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-h-px min-w-px relative" data-name="Footer Links Inner Container">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181a1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">회사소개</p>
      </div>
      <div className="bg-[#dedee4] h-[10px] shrink-0 w-px" data-name="Link Divider" />
      <div className="flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181a1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">개인정보처리방침</p>
      </div>
      <div className="bg-[#dedee4] h-[10px] shrink-0 w-px" data-name="Link Divider" />
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181a1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] whitespace-pre">{`영상정보처리기기운영 관리방침  `}</p>
      </div>
      <div className="bg-[#dedee4] h-[10px] shrink-0 w-px" data-name="Link Divider" />
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181a1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">이용약관</p>
      </div>
      <div className="bg-[#dedee4] h-[10px] shrink-0 w-px" data-name="Link Divider" />
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181a1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">청소년보호방침</p>
      </div>
      <div className="bg-[#dedee4] h-[10px] shrink-0 w-px" data-name="Link Divider" />
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181a1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">입점/제휴문의</p>
      </div>
      <div className="bg-[#dedee4] h-[10px] shrink-0 w-px" data-name="Link Divider" />
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181a1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">대량구매</p>
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Footer Links">
      <FooterLinksInnerContainer />
    </div>
  );
}

function FooterLinksContainer() {
  return (
    <div className="content-stretch flex h-[70px] items-center relative shrink-0 w-[1420px]" data-name="Footer Links Container">
      <FooterLinks />
    </div>
  );
}

function CustomerCenterDetailsContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 text-[#181a1d]" data-name="Customer Center Details Container">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px]">
        <p className="leading-[28px]">고객센터</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[24px]">
        <p className="leading-[32px]">1234-5678</p>
      </div>
    </div>
  );
}

function CustomerCenterHoursContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Customer Center Hours Container">
      <CustomerCenterDetailsContainer />
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#74767c] text-[12px] text-right">
        <p className="leading-[16px]">오전 9시~오후 6시(토요일, 공휴일 휴무)</p>
      </div>
    </div>
  );
}

function MoButton() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="MO_Button">
      <div aria-hidden="true" className="absolute border border-[#dedee4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">1:1 문의</p>
      </div>
    </div>
  );
}

function InquiryContainer() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0" data-name="Inquiry Container">
      <MoButton />
      <div className="bg-white content-stretch flex gap-[2px] h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="MO_Button">
        <div aria-hidden="true" className="absolute border border-[#dedee4] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">자주 묻는 질문</p>
        </div>
      </div>
    </div>
  );
}

function CustomerCenterInformation() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0" data-name="Customer Center Information">
      <CustomerCenterHoursContainer />
      <InquiryContainer />
    </div>
  );
}

function AppDownloadInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end leading-[0] not-italic relative shrink-0 text-right w-[148px]" data-name="App Download Info">
      <div className="flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#181a1d] text-[14px] w-[min-content]">
        <p className="leading-[20px]">APP 다운로드</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#74767c] text-[12px] w-[141px]">
        <p className="leading-[16px]">스마트폰 QR코드 스캔</p>
      </div>
    </div>
  );
}

function AppDownloadContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="App Download Container">
      <AppDownloadInfo />
      <div className="pointer-events-none relative shrink-0 size-[60px]" data-name="QR Code Image">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute bg-white inset-0" />
          <img alt="" className="absolute max-w-none mix-blend-multiply object-cover size-full" src={imgQrCodeImage} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#dedee4] border-solid inset-0" />
      </div>
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Social Media Icons">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SNS/Instagram">
        <div className="absolute bottom-[16.67%] left-[4px] top-[16.67%] w-[16px]" data-name="Exclude">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9996 16">
            <path d={svgPaths.p3f2a8000} fill="var(--fill-0, #B1B3B8)" id="Exclude" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SNS/Kakao">
        <div className="absolute inset-[16.67%]" data-name="패스 10555-3">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p26a78bc0} fill="var(--fill-0, #B1B3B8)" id="í¨ì¤ 10555-3" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SNS/Youtube">
        <div className="absolute inset-[23.58%_12.5%]" data-name="Exclude">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12.6816">
            <path d={svgPaths.p1bfa9700} fill="var(--fill-0, #B1B3B8)" id="Exclude" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SNS/Facebook">
        <div className="absolute inset-[12.5%_29.17%]" data-name="Logo / Facebook / ON">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
            <path d={svgPaths.p12a64ef0} fill="var(--fill-0, #B1B3B8)" id="Logo / Facebook / ON" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CustomerCenterDetails() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-end justify-center ml-0 mt-0 relative row-1" data-name="Customer Center Details">
      <CustomerCenterInformation />
      <AppDownloadContainer />
      <SocialMediaIcons />
    </div>
  );
}

function CustomerCenterContainer() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1200px] mt-[16px] place-items-start relative row-1" data-name="Customer Center Container">
      <CustomerCenterDetails />
    </div>
  );
}

function CeoInformation() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="CEO Information">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#54565b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">대표이사: 홍길동</p>
      </div>
      <div className="bg-[#dedee4] h-[10px] shrink-0 w-px" data-name="Text Divider" />
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#54565b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] whitespace-pre">{`(우)06115 서울특별시 강서구 마곡동로 36, 파이언넷사옥   `}</p>
      </div>
    </div>
  );
}

function PcTextButton() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="PC_Text button">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181a1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">사업자정보확인</p>
      </div>
      <div className="relative shrink-0 size-[12px]" data-name="R_16">
        <div className="absolute inset-[20.83%_33.33%_20.83%_37.5%]" data-name="패스 14894">
          <div className="absolute inset-[-7.14%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
              <path d="M0.5 0.5L4 4L0.5 7.5" id="í¨ì¤ 14894" stroke="var(--stroke-0, #181A1D)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegistrationInformationContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Registration Information Container">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#54565b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">사업자등록번호 : 123-45-67890</p>
      </div>
      <div className="bg-[#dedee4] h-[10px] shrink-0 w-px" data-name="Text Divider" />
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#54565b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">통신판매업신고 : XXXX-12345호</p>
      </div>
      <div className="bg-[#dedee4] h-[10px] shrink-0 w-px" data-name="Text Divider" />
      <PcTextButton />
    </div>
  );
}

function CompanyAddressContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Company Address Container">
      <CeoInformation />
      <RegistrationInformationContainer />
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#54565b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">개인정보보호책임자 : 홍길동</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#54565b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">이메일: webmaster@pionnet.com</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_Symbols:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#54565b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Copyright ⓒ PIONNET ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

function CompanyInformationContainer() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[20px] items-start justify-center ml-0 mt-0 relative row-1" data-name="Company Information Container">
      <div className="flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181a1d] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">파이언넷(주)</p>
      </div>
      <CompanyAddressContainer />
    </div>
  );
}

function CompanyDetailsContainer() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[16px] place-items-start relative row-1" data-name="Company Details Container">
      <CompanyInformationContainer />
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Footer Container">
      <div className="bg-white col-1 h-[300px] ml-0 mt-0 opacity-0 row-1 w-[1420px]" data-name="BG" />
      <CustomerCenterContainer />
      <CompanyDetailsContainer />
    </div>
  );
}

function ThumbnailCase() {
  return (
    <div className="aspect-[700/700] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Thumbnail Case">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumbnailCase} />
        <div className="absolute bg-[rgba(24,26,29,0.03)] inset-0" />
      </div>
      <div className="absolute right-[12px] size-[32px] top-[356px]" data-name="Heart">
        <div className="absolute inset-[20.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-4.02%_-3.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8333 20.1667">
              <path d={svgPaths.pe799b80} id="Vector" stroke="var(--stroke-0, #DEDEE4)" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-0 flex items-center justify-center left-1/2 top-0 w-[24px]">
          <div className="flex-none rotate-90 size-[24px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDescriptionContainer() {
  return <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start shrink-0 w-full" data-name="Product Description Container" />;
}

function ProductName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Name">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic overflow-hidden relative shrink-0 text-[#171717] text-[14px] text-ellipsis w-[308px]">
        <span className="leading-[20px]">BURBERRY</span>
        <span className="leading-[20px]">{` `}</span>
      </p>
      <ProductDescriptionContainer />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#171717] text-[14px] w-[min-content]">금장 패딩 남성용 봄버 숏 패딩 블랙퍼 점퍼 자켓 무스터클</p>
    </div>
  );
}

function DiscountedPriceContainer() {
  return (
    <div className="content-stretch flex items-center leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap" data-name="Discounted Price Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0">150,000</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0">원</p>
    </div>
  );
}

function OriginalPriceContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0" data-name="Original Price Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#838383] text-[14px] whitespace-nowrap">200,000</p>
      <div className="-translate-y-1/2 absolute bg-[#838383] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Pricing Line" />
    </div>
  );
}

function PricingDetails() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_6px] items-center relative shrink-0 w-full" data-name="Pricing Details">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0d74ce] text-[14px] whitespace-nowrap">20%</p>
      <DiscountedPriceContainer />
      <OriginalPriceContainer />
    </div>
  );
}

function RatingContainer() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Rating Container">
      <div className="relative shrink-0 size-[16px]" data-name="Star">
        <div className="absolute inset-[16.67%_16.67%_20.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5%_-4.72%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6746 10.9999">
              <path d={svgPaths.p2098a900} fill="var(--fill-0, #B1B3B8)" id="Vector" stroke="var(--stroke-1, #B1B3B8)" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="flex-none rotate-90 size-[16px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#646464] text-[12px] whitespace-nowrap">5.0 (334)</p>
    </div>
  );
}

function PcLikeRate() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center ml-0 mt-0 relative row-1" data-name="PC_Like_rate">
      <RatingContainer />
    </div>
  );
}

function AdditionalInfo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Additional Info">
      <PcLikeRate />
    </div>
  );
}

function ProductPricingContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Product Pricing Container">
      <PricingDetails />
      <AdditionalInfo />
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="relative shrink-0 w-full" data-name="Product Info">
      <div className="content-stretch flex flex-col gap-[4px] items-start pr-[28px] relative w-full">
        <ProductName />
        <ProductPricingContainer />
      </div>
    </div>
  );
}

function ThumbnailCase1() {
  return (
    <div className="aspect-[700/700] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Thumbnail Case">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumbnailCase} />
        <div className="absolute bg-[rgba(24,26,29,0.03)] inset-0" />
      </div>
      <div className="absolute right-[12px] size-[32px] top-[356px]" data-name="Heart">
        <div className="absolute inset-[20.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-4.02%_-3.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8333 20.1667">
              <path d={svgPaths.pe799b80} id="Vector" stroke="var(--stroke-0, #DEDEE4)" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-0 flex items-center justify-center left-1/2 top-0 w-[24px]">
          <div className="flex-none rotate-90 size-[24px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDescriptionContainer1() {
  return <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start shrink-0 w-full" data-name="Product Description Container" />;
}

function ProductName1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Name">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic overflow-hidden relative shrink-0 text-[#171717] text-[14px] text-ellipsis w-[308px]">
        <span className="leading-[20px]">BURBERRY</span>
        <span className="leading-[20px]">{` `}</span>
      </p>
      <ProductDescriptionContainer1 />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#171717] text-[14px] w-[min-content]">금장 패딩 남성용 봄버 숏 패딩 블랙퍼 점퍼 자켓 무스터클</p>
    </div>
  );
}

function DiscountedPriceContainer1() {
  return (
    <div className="content-stretch flex items-center leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap" data-name="Discounted Price Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0">150,000</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0">원</p>
    </div>
  );
}

function OriginalPriceContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0" data-name="Original Price Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#838383] text-[14px] whitespace-nowrap">200,000</p>
      <div className="-translate-y-1/2 absolute bg-[#838383] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Pricing Line" />
    </div>
  );
}

function PricingDetails1() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_6px] items-center relative shrink-0 w-full" data-name="Pricing Details">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0d74ce] text-[14px] whitespace-nowrap">20%</p>
      <DiscountedPriceContainer1 />
      <OriginalPriceContainer1 />
    </div>
  );
}

function RatingContainer1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Rating Container">
      <div className="relative shrink-0 size-[16px]" data-name="Star">
        <div className="absolute inset-[16.67%_16.67%_20.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5%_-4.72%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6746 10.9999">
              <path d={svgPaths.p2098a900} fill="var(--fill-0, #B1B3B8)" id="Vector" stroke="var(--stroke-1, #B1B3B8)" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="flex-none rotate-90 size-[16px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#646464] text-[12px] whitespace-nowrap">5.0 (334)</p>
    </div>
  );
}

function PcLikeRate1() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center ml-0 mt-0 relative row-1" data-name="PC_Like_rate">
      <RatingContainer1 />
    </div>
  );
}

function AdditionalInfo1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Additional Info">
      <PcLikeRate1 />
    </div>
  );
}

function ProductPricingContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Product Pricing Container">
      <PricingDetails1 />
      <AdditionalInfo1 />
    </div>
  );
}

function ProductInfo1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Product Info">
      <div className="content-stretch flex flex-col gap-[4px] items-start pr-[28px] relative w-full">
        <ProductName1 />
        <ProductPricingContainer1 />
      </div>
    </div>
  );
}

function ThumbnailCase2() {
  return (
    <div className="aspect-[700/700] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Thumbnail Case">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumbnailCase} />
        <div className="absolute bg-[rgba(24,26,29,0.03)] inset-0" />
      </div>
      <div className="absolute right-[12px] size-[32px] top-[356px]" data-name="Heart">
        <div className="absolute inset-[20.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-4.02%_-3.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8333 20.1667">
              <path d={svgPaths.pe799b80} id="Vector" stroke="var(--stroke-0, #DEDEE4)" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-0 flex items-center justify-center left-1/2 top-0 w-[24px]">
          <div className="flex-none rotate-90 size-[24px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDescriptionContainer2() {
  return <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start shrink-0 w-full" data-name="Product Description Container" />;
}

function ProductName2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Name">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic overflow-hidden relative shrink-0 text-[#171717] text-[14px] text-ellipsis w-[308px]">
        <span className="leading-[20px]">BURBERRY</span>
        <span className="leading-[20px]">{` `}</span>
      </p>
      <ProductDescriptionContainer2 />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#171717] text-[14px] w-[min-content]">금장 패딩 남성용 봄버 숏 패딩 블랙퍼 점퍼 자켓 무스터클</p>
    </div>
  );
}

function DiscountedPriceContainer2() {
  return (
    <div className="content-stretch flex items-center leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] whitespace-nowrap" data-name="Discounted Price Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0">150,000</p>
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0">원</p>
    </div>
  );
}

function OriginalPriceContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0" data-name="Original Price Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#838383] text-[14px] whitespace-nowrap">200,000</p>
      <div className="-translate-y-1/2 absolute bg-[#838383] h-px left-0 right-0 top-[calc(50%+0.5px)]" data-name="Pricing Line" />
    </div>
  );
}

function PricingDetails2() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_6px] items-center relative shrink-0 w-full" data-name="Pricing Details">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0d74ce] text-[14px] whitespace-nowrap">20%</p>
      <DiscountedPriceContainer2 />
      <OriginalPriceContainer2 />
    </div>
  );
}

function RatingContainer2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Rating Container">
      <div className="relative shrink-0 size-[16px]" data-name="Star">
        <div className="absolute inset-[16.67%_16.67%_20.83%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5%_-4.72%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6746 10.9999">
              <path d={svgPaths.p2098a900} fill="var(--fill-0, #B1B3B8)" id="Vector" stroke="var(--stroke-1, #B1B3B8)" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="flex-none rotate-90 size-[16px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#646464] text-[12px] whitespace-nowrap">5.0 (334)</p>
    </div>
  );
}

function PcLikeRate2() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center ml-0 mt-0 relative row-1" data-name="PC_Like_rate">
      <RatingContainer2 />
    </div>
  );
}

function AdditionalInfo2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Additional Info">
      <PcLikeRate2 />
    </div>
  );
}

function ProductPricingContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Product Pricing Container">
      <PricingDetails2 />
      <AdditionalInfo2 />
    </div>
  );
}

function ProductInfo2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Product Info">
      <div className="content-stretch flex flex-col gap-[4px] items-start pr-[28px] relative w-full">
        <ProductName2 />
        <ProductPricingContainer2 />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center leading-[0] left-[66px] top-[59px] w-[1420px]" data-name="PC_GNB/카테고리형_default">
        <Component />
        <Component1 />
      </div>
      <div className="absolute bg-white left-[66px] top-[1154px]" data-name="PC_Footer">
        <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
          <FooterLinksContainer />
          <FooterContainer />
        </div>
        <div aria-hidden="true" className="absolute border-[#ecedf2] border-solid border-t inset-0 pointer-events-none" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[16px] h-[458px] items-start left-[58px] top-[383px] w-[334px]" data-name="PC / Product Unit">
        <ThumbnailCase />
        <ProductInfo />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[406px] top-[383px] w-[334px]" data-name="PC / Product Unit">
        <ThumbnailCase1 />
        <ProductInfo1 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[754px] top-[383px] w-[334px]" data-name="PC / Product Unit">
        <ThumbnailCase2 />
        <ProductInfo2 />
      </div>
    </div>
  );
}