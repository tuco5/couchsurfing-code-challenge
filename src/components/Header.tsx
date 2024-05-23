import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <Navbar
      shouldHideOnScroll
      className="bg-gradient-to-tl from-[#0F2027] via-[#203A43] to-[#2C5364]"
    >
      <NavbarBrand>
        <User
          name="Tudor Comparan"
          className="text-white "
          description={
            <Link
              className="text-primary-400"
              href="https://linkedin.com/in/tuco5"
            >
              /in/tuco5
            </Link>
          }
          avatarProps={{
            isBordered: true,
            src: "/yo2022.jpeg",
          }}
        />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="flex flex-row gap-4 items-center">
          <Link
            href="/"
            className="text-orange-300 text-xl hover:tracking-wide transition-all duration-300"
          >
            Couchsurfing{" "}
            <span className="text-sm text-danger">Code Challenge</span>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            href="https://github.com/tuco5/couchsurfing-code-challenge"
            className="relative flex items-center gap-1"
          >
            <Image
              src="/octocat.png"
              alt="tuco5 github"
              width={50}
              height={50}
              className="bg-white rounded-full -p-4 border-2 border-white"
            />
            <p className="text-primary-300 text-sm">@tuco5</p>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
