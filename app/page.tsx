import Image from "next/image";

const lines = [
  "We are a deep-technology infrastructure company building autonomous systems for environments where electricity, connectivity and computing resources cannot always be trusted.",
  "Our mission is to build autonomous infrastructure that allows critical systems to operate reliably anywhere.",
  "Our vision is to create the foundational infrastructure network powering Africa’s industries, institutions and digital economy.",
];

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-xl flex-col gap-6 text-left">
        <h1 className="mb-2">
          <Image
            src="/audiuani-wordmark.png"
            alt="Audiuani Technologies"
            width={1060}
            height={320}
            priority
            className="h-auto w-[200px]"
          />
        </h1>

        {lines.map((line) => (
          <p key={line} className="text-base leading-relaxed font-light">
            {line}
          </p>
        ))}
      </div>
    </main>
  );
}
