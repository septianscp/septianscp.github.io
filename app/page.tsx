"use client"

import Body from "@/component/Body";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState<string>("")
  return (
    <div className="flex flex-col w-full min-h-screen" style={{ maxWidth: 1920, margin: "auto" }}>
      <Header active={active} />
      <Body setActive={setActive} />
      <Footer />
    </div>
  );
}
