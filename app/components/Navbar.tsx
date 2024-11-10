import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="first">
        <Link href={""}>Home</Link>
        <Link href={""}>Destinations</Link>
        <Link href={""}>Blog</Link>
        <Link href={""}>Contact </Link>
      </div>
      <div className="second">
        <div className="btn">Plan Now</div>
      </div>
    </div>
  );
}
