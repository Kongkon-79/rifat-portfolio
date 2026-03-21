function Frame2() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[8px] relative shrink-0">
      <p className="font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YOPQ' 300" }}>
        Home
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[8px] relative shrink-0">
      <p className="font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YOPQ' 300" }}>
        Skills
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[8px] relative shrink-0">
      <p className="font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YOPQ' 300" }}>{`Case Study's`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[8px] relative shrink-0">
      <p className="font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YOPQ' 300" }}>
        Live Project
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[8px] relative shrink-0">
      <p className="font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YOPQ' 300" }}>
        About
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <Frame2 />
      <Frame4 />
      <Frame3 />
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f86a40] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YOPQ' 300" }}>
        Hire Me
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <g id="Vector" />
          <g id="Vector_2" />
          <g id="Vector_3" />
          <g id="Vector_4" />
          <g id="Vector_5" />
          <g id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white content-stretch flex items-center p-[12px] relative rounded-[24px] shrink-0 size-[48px]">
      <Frame />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame1 />
      <Frame9 />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-between overflow-clip p-[16px] relative rounded-[32px] size-full">
      <p className="bg-clip-text bg-gradient-to-b font-['Kunstler_Script:Regular',sans-serif] from-[#ff7639] leading-[normal] not-italic relative shrink-0 text-[48px] text-[transparent] to-[#b76eb1] whitespace-nowrap">RH</p>
      <Frame7 />
      <Frame10 />
    </div>
  );
}