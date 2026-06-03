import Image from "next/image";

interface DocImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function DocImage({ src, alt, caption }: DocImageProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-border bg-card">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={750}
        className="w-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
      />
      {caption && (
        <figcaption className="border-t border-border px-4 py-3 text-center text-sm text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
