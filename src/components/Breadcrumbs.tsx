import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-editorial pt-24 lg:pt-28 pb-4">
      <ol className="flex flex-wrap items-center gap-1 text-xs font-sans text-text-light">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Strona główna
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span className="text-text-light/40">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-muted">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
