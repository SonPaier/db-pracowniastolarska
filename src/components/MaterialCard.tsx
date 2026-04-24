import Image from "next/image";

interface MaterialCardProps {
  title: string;
  badge?: string;
  description: string;
  imageSrc?: string;
  imageAlt: string;
  aspectRatio?: "4/3" | "16/9";
}

export default function MaterialCard({
  title,
  badge,
  description,
  imageSrc,
  imageAlt,
  aspectRatio = "4/3",
}: MaterialCardProps) {
  return (
    <div className="bg-surface-50 rounded-sm overflow-hidden">
      <div className={`relative aspect-[${aspectRatio}] bg-surface-200 flex items-center justify-center`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="text-center p-4">
            <svg className="w-10 h-10 text-surface-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <p className="text-xs text-surface-400 font-sans">{imageAlt}</p>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <h4 className="font-serif text-base font-semibold text-primary">{title}</h4>
          {badge && (
            <span className="text-[0.6rem] uppercase tracking-[0.15em] text-secondary font-sans bg-secondary/10 px-2 py-0.5 rounded-sm">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-text-muted leading-relaxed font-sans">{description}</p>
      </div>
    </div>
  );
}
