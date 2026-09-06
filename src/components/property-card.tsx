import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle } from "lucide-react";
import type { Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
    <Link to="/properties/$id" params={{ id: property.id }} className="relative block aspect-[4/3] overflow-hidden">
      <img src={property.image} alt={property.title} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">{property.purpose}</span>
      {property.featured && <span className="absolute left-4 top-4 rounded-full bg-surface px-3 py-1.5 text-xs font-bold text-foreground">مميز</span>}
    </Link>
    <div className="p-5"><div className="text-xs font-bold text-primary">{property.type}</div><Link to="/properties/$id" params={{ id: property.id }} className="mt-2 block min-h-12 font-display text-lg font-extrabold leading-7">{property.title}</Link><div className="mt-3 flex items-center gap-1 text-sm text-muted-foreground"><MapPin size={16} /> {property.district}، بريدة</div><div className="mt-5 flex items-end justify-between border-t border-border pt-4"><div><span className="text-xs text-muted-foreground">السعر</span><div className="font-display text-xl font-black">{property.price} <small className="text-xs">ر.س</small></div></div><a href="https://wa.me/966550818020" target="_blank" rel="noreferrer" aria-label="تواصل عبر واتساب" className="grid size-11 place-items-center rounded-full bg-whatsapp text-primary-foreground"><MessageCircle size={20} /></a></div></div>
  </article>;
}