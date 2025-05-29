"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>

          <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="About us">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/career">Career</HoveredLink>
                <HoveredLink href="/campus">Campus</HoveredLink>
                <HoveredLink href="/updates">Updates</HoveredLink>
              </div>
            </MenuItem>
          </Link>

          <Link href={"/courses"}>
            <MenuItem setActive={setActive} active={active} item="Courses">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/new">New Courses</HoveredLink>
              <HoveredLink href="/summer">Summer offer</HoveredLink>
              <HoveredLink href="/children">For children</HoveredLink>
              </div>
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </>
  );
}

export default Navbar;
