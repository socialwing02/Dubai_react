import { navlist } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  const serviceLinks = navlist
    .filter((item) => item.children)
    .flatMap((item) => item.children);

  return (
    <footer className=" px-16 py-16 flex justify-around bg-black text-white border-t-2">
      <ul>
        <h2 className="text-[clamp(2rem,1.4vw,4rem)] font-bold">Quick Links</h2>
        {navlist.map((item) => (
          <li key={item.name} className="text-[clamp(1.5rem,1.5vw,3rem)] pl-2">
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <ul>
        <h2 className="text-[clamp(2rem,1.5vw,4rem)]">Services</h2>
        {serviceLinks.map((item) => (
          <li key={item?.name} className="text-[clamp(1.5rem,1.5vw,3rem)] pl-2">
            <Link href={item?.path || ""}>{item?.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <h1>Address</h1>
      </div>
    </footer>
  );
}
