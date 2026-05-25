import Image from "next/image";

import { ZERODRIFT_LOGO } from "../constants";
import { footerColumns } from "../data";

export function Footer() {
  return (
    <footer className="mx-auto my-8 w-full max-w-[1360px] px-3 md:px-0">
      <div className="rounded-[7px] bg-white px-8 py-10 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Image src={ZERODRIFT_LOGO} alt="ZeroDrift" width={170} height={28} />
            <div className="mt-8 text-[14px] leading-[1.5] text-[#555]">
              <p className="font-medium text-[#171719]">Headquarters</p>
              <p className="mt-2">4 World Trade Center</p>
              <p>150 Greenwich Street, New York, NY 10007</p>
              <p className="mt-7 font-medium text-[#171719]">Get in Touch</p>
              <p className="mt-2">hello@zerodrift.ai</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-[13px] font-medium text-[#171719]">
                  {column.title}
                </h3>
                <ul className="space-y-3 text-[13px] text-[#747780]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a className="hover:text-[#171719]" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-8 border-t border-[#ececec] pt-8 text-[13px] text-[#747780] md:grid-cols-[1fr_1fr]">
          <p>
            Your data never stored.{" "}
            <a className="underline" href="#">
              View Trust Center.
            </a>
          </p>
          <div className="grid gap-2 md:grid-cols-3">
            <p>
              Investors
              <br />
              investors@zerodrift.ai
            </p>
            <p>
              General
              <br />
              info@zerodrift.ai
            </p>
            <p>
              Press
              <br />
              press@zerodrift.ai
            </p>
          </div>
        </div>
        <p className="mt-9 text-[12px] text-[#9a9da4]">
          (c) 2026 ZeroDrift, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
