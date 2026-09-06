import { Link } from "@tanstack/react-router";
import { Building2, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button";

const nav = [
  ["الرئيسية", "/"], ["قسم الإيجار", "/rent"], ["قسم البيع", "/sale"], ["من نحن", "/about"], ["تواصل معنا", "/contact"],
] as const;

export function Brand() {
  return <Link to="/" className="flex items-center gap-3 font-display text-xl font-black"><span className="grid size-10 place-items-center rounded-sm border border-brand-soft text-brand-soft"><Building2 /></span><span>الرشودي<small className="block text-[9px] font-medium text-muted-foreground">ALRASHUDI REAL ESTATE</small></span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-50 border-b border-surface/15 text-hero-foreground">
    <div className="site-container flex h-24 items-center justify-between">
      <Brand />
      <nav className="hidden items-center gap-8 md:flex" aria-label="التنقل الرئيسي">{nav.map(([label, to]) => <Link key={to} to={to} activeProps={{ className: "text-brand-soft" }} className="text-sm font-semibold transition hover:text-brand-soft">{label}</Link>)}</nav>
      <ButtonLink to="/submit" variant="outline" className="hidden md:inline-flex">اعرض عقارك</ButtonLink>
      <button className="grid size-11 place-items-center md:hidden" onClick={() => setOpen(!open)} aria-label="فتح القائمة">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-surface/15 bg-hero p-5 md:hidden">{nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="block border-b border-surface/10 py-4 font-semibold">{label}</Link>)}<ButtonLink to="/submit" className="mt-4 w-full">اعرض عقارك</ButtonLink></nav>}
  </header>;
}

export function Footer() {
  return <footer className="bg-hero py-14 text-hero-foreground"><div className="site-container grid gap-10 md:grid-cols-3"><div><Brand /><p className="mt-5 max-w-sm text-sm leading-7 text-hero-muted">خبرة محلية في عقارات بريدة. نساعدك في البيع والإيجار وتسويق عقارك بخطوات واضحة وموثوقة.</p></div><div><h2 className="font-bold">روابط سريعة</h2><div className="mt-4 grid gap-3 text-sm text-hero-muted"><Link to="/rent">عقارات الإيجار</Link><Link to="/sale">عقارات البيع</Link><Link to="/submit">اعرض عقارك</Link></div></div><div><h2 className="font-bold">تواصل معنا</h2><a href="tel:+966550818020" className="mt-4 flex items-center gap-2 text-sm text-hero-muted"><Phone size={17} /> 055 081 8020</a><p className="mt-3 text-sm text-hero-muted">بريدة، المملكة العربية السعودية</p></div></div><div className="site-container mt-10 border-t border-surface/15 pt-6 text-center text-xs text-hero-muted">© 2026 الرشودي للعقارات. جميع الحقوق محفوظة.</div></footer>;
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <section className="bg-hero pb-16 pt-36 text-hero-foreground"><div className="site-container"><p className="text-sm font-bold text-brand-soft">{eyebrow}</p><h1 className="mt-3 max-w-3xl font-display text-4xl font-black leading-tight md:text-6xl">{title}</h1>{children && <div className="mt-5 max-w-2xl text-hero-muted">{children}</div>}</div></section>;
}