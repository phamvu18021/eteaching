import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        priority
        src={`/logo-eteaching2.jpg`}
        alt="Logo-neu"
        width={452}
        height={95}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </Link>
  );
};
