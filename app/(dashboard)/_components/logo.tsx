import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Image
        height={100}
        width={100}
        alt="Community Development Network logo | CDN"
        src="/cdn-logo-stroked-transparent.png"
      />
    </div>
  )
}