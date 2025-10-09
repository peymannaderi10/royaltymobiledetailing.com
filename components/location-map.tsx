import Image from "next/image"

export function LocationMap() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Image
          src="/serviceAreaMap.png"
          alt="Royalty Mobile Detailing Service Area - Philadelphia Tri-State Area"
          width={800}
          height={600}
          className="w-full h-auto object-contain rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  )
}
