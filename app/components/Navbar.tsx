import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="first">
        <Link href={"/"}>Home</Link>
        <Link href={"/destinations"}>Destinations</Link>
        <Link href={"/blog"}>Blog</Link>
      </div>
      <div className="second">
        <Link href={"/destinations"} className="btn"> Plan Now</Link>
      </div>
    </div>
  );
}
