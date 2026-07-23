import Image from "next/image";

const lines = [
  "We are a deep-technology infrastructure company building autonomous systems for environments where electricity, connectivity and computing resources cannot always be trusted.",
  "Our mission is to build autonomous infrastructure that allows critical systems to operate reliably anywhere.",
  "Our vision is to create the foundational infrastructure network powering Africa’s industries, institutions and digital economy.",
];

export default function Home() {
  return (
    <>
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="flex w-full max-w-xl flex-col gap-6 text-left">
          <h1 className="mb-2">
            <Image
              src="/audiuani-wordmark.png"
              alt="Audiuani Technologies"
              width={1060}
              height={320}
              priority
              className="h-auto w-[150px] sm:w-[200px]"
            />
          </h1>

          {lines.map((line) => (
            <p key={line} className="text-sm leading-relaxed font-light sm:text-base">
              {line}
            </p>
          ))}
        </div>
      </main>

      <footer className="flex justify-center px-6 py-10">
        <a
          href="https://x.com/audiuanitech"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Audiuani on X"
          className="text-muted transition-colors hover:text-foreground"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </footer>
    </>
  );
}
