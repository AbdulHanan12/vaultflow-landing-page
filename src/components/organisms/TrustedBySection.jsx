import React from "react";
import zendeskLogo from '../../assets/logos/zendesk.png';
import dellLogo from '../../assets/logos/dell.png';
import rakutenLogo from '../../assets/logos/rakuten.png';
import pacificFundsLogo from '../../assets/logos/pacific-funds.png';
import ncrLogo from '../../assets/logos/ncr.png';
import latticeLogo from '../../assets/logos/lattice.png';
import tedLogo from '../../assets/logos/ted.png';

// Real SVGs for logos (replace others as you provide them)
const logos = [
  {
    name: "Dell",
    svg: (
      <img
        src={dellLogo}
        alt="Dell"
        className="h-10 w-auto object-contain"
        draggable={false}
      />
    ),
  },
  {
    name: "Zendesk",
    svg: (
      <img
        src={zendeskLogo}
        alt="Zendesk"
        className="h-10 w-auto object-contain"
        draggable={false}
      />
    ),
  },
  {
    name: "Rakuten",
    svg: (
      <img
        src={rakutenLogo}
        alt="Rakuten"
        className="h-10 w-auto object-contain"
        draggable={false}
      />
    ),
  },
  {
    name: "Pacific Funds",
    svg: (
      <img
        src={pacificFundsLogo}
        alt="Pacific Funds"
        className="h-10 w-auto object-contain"
        draggable={false}
      />
    ),
  },
  {
    name: "NCR",
    svg: (
      <img
        src={ncrLogo}
        alt="NCR"
        className="h-10 w-auto object-contain"
        draggable={false}
      />
    ),
  },
  {
    name: "Lattice",
    svg: (
      <img
        src={latticeLogo}
        alt="Lattice"
        className="h-10 w-auto object-contain"
        draggable={false}
      />
    ),
  },
  {
    name: "TED",
    svg: (
      <img
        src={tedLogo}
        alt="TED"
        className="h-10 w-auto object-contain"
        draggable={false}
      />
    ),
  },
];

export const TrustedBySection = () => {
  return (
    <section className="w-full flex justify-center mt-[120px] mb-24">
      <div className="flex flex-col items-center justify-center max-w-[800px] w-full px-4">
        <div className="text-white text-center text-base font-normal mb-8 leading-tight">
          Trusted by teams at over <span className="font-semibold">1,000</span> of the world's leading organizations
        </div>
        <div className="flex flex-row items-center justify-between flex-nowrap w-full gap-24">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 