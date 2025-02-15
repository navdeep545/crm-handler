"use client";
import React from "react";
import { Drawer } from "@/components/ui/drawer";
import { sideBarLinksCustomer } from "@lib/links";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Button } from "../ui/button";

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Drawer>
      <div className="hidden z-50 md:flex flex-col gap-10 items-center fixed top-0 left-0 h-full md:w-[16rem] w-[12rem] bg-gray-800">
        <div className="flex flex-col justify-start items-start gap-5 mx-5">
          <div className="flex py-5">
            <Logo className="text-xl" />
          </div>

          {sideBarLinksCustomer.map((link) => (
            <div key={link.name} className="w-full grid grid-cols-1 gap-5">
              <span className="px-2 text-[#898989]">{link.name}</span>
              {link.subLinks.map((subLink) => {
                const isActive = subLink.key === pathname;
                return (
                  <Button
                    key={subLink.key}
                    variant={isActive ? "default" : "ghost"}
                    onClick={() => {
                      router.push(subLink.key);
                    }}
                    className={`flex text-white/90 gap-2 items-center justify-start p-2 cursor-pointer ${isActive
                        ? "bg-primary !text-white h-[48px] px-2 w-[210px] rounded-md"
                        : " h-[48px] px-2 w-[210px] rounded-md"
                      }`}
                  >
                    <subLink.icon
                      className={`w-6 h-6 ${isActive ? "text-white" : " hover:text-white"}`}
                    />
                    <span className="text-sm font-normal">{subLink.label}</span>
                  </Button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
}
