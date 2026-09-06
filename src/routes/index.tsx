import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Building2, KeyRound, MapPin, Search, ShieldCheck } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero-villas.jpg";
import { Button, ButtonLink } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { districts, properties, propertyTypes } from "@/data/properties";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "الرشودي للعقارات | بيع وإيجار في بريدة" }, { name: "description", content: "اكتشف عقارات للبيع والإيجار في بريدة مع الرشودي للعقارات." }, { property: "og:title", content: "الرشودي للعقارات" }, { property: "og:description", content: "نعرف بريدة ونفهم العقار." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Home,
});

function Home() {
  const navigate = useNavigate();
  const [purpose, setPurpose] = useState("إيجار");
  const [type, setType] = useState("");
  const [district, setDistrict] = useState("");
  const search = () => navigate({ to: purpose === "بيع" ? "/sale" : "/rent", search: { type, district } });
  return <>
    <section className="relative flex min-h-[760px] items-center overflow-hidden bg-hero text-hero-foreground">
      <img src={hero} alt="فلل سعودية عصرية في بريدة" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero/65" />
      <div className="site-container relative z-10 pb-10 pt-32 text-center">
        <p className="text-sm font-bold text-brand-soft">خبرة محلية وقرار عقاري أوضح</p>
        <h1 className="mt-5 font-display text-5xl font-black md:text-7xl">الرشودي للعقارات</h1>
        <h2 className="mt-3 text-xl font-extrabold text-brand-soft md:text-2xl">نعرف بريدة.. ونفهم العقار</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-hero-muted">نسمع احتياجك، ونرشّح لك الأنسب للبيع أو الإيجار، ونمشي معك حتى اكتمال الصفقة بخبرة تمتد لأكثر من 8 سنوات.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3"><ButtonLink to="/rent" variant="outline">تصفح الإيجار</ButtonLink><ButtonLink to="/sale" variant="outline">تصفح البيع</ButtonLink><a href="#map-section" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-bold"><MapPin size={17} /> الخريطة</a></div>
        <div className="mx-auto mt-8 grid max-w-4xl gap-3 rounded-2xl bg-surface p-4 text-right text-foreground shadow-card md:grid-cols-[1fr_1fr_1fr_auto]">
          <label className="text-xs font-bold">الغرض<select value={purpose} onChange={(e) => setPurpose(e.target.value)} className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm"><option>إيجار</option><option>بيع</option></select></label>
          <label className="text-xs font-bold">نوع العقار<select value={type} onChange={(e) => setType(e.target.value)} className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm"><option value="">كل الأنواع</option>{propertyTypes.map(x => <option key={x}>{x}</option>)}</select></label>
          <label className="text-xs font-bold">الحي<select value={district} onChange={(e) => setDistrict(e.target.value)} className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm"><option value="">كل الأحياء</option>{districts.map(x => <option key={x}>{x}</option>)}</select></label>
          <Button onClick={search} className="self-end"><Search size={18} /> بحث</Button>
        </div>
      </div>
    </section>
    <PropertySection title="قسم الإيجار" to="/rent" items={properties.filter(x => x.purpose === "إيجار").slice(0, 3)} />
    <PropertySection title="قسم البيع" to="/sale" items={properties.filter(x => x.purpose === "بيع").slice(0, 3)} muted />
    <section id="map-section" className="bg-hero py-20 text-hero-foreground"><div className="site-container grid items-center gap-10 md:grid-cols-2"><div><p className="text-sm font-bold text-brand-soft">خريطة العقارات</p><h2 className="mt-3 font-display text-4xl font-black">استكشف العقارات في بريدة</h2><p className="mt-4 leading-8 text-hero-muted">جميع العقارات المتاحة موزعة على أحياء بريدة. اختر الحي المناسب ثم اطّلع على التفاصيل.</p><div className="mt-7 flex gap-6"><b>96 <small className="block font-normal text-hero-muted">عقاراً</small></b><b>70 <small className="block font-normal text-hero-muted">للبيع</small></b><b>26 <small className="block font-normal text-hero-muted">للإيجار</small></b></div></div><div className="relative h-80 overflow-hidden rounded-lg border border-surface/15 bg-muted/10"><div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)", backgroundSize: "42px 42px" }} />{[[25,25],[55,32],[72,63],[34,70],[83,22]].map(([x,y],i)=><span key={i} className="absolute grid size-10 place-items-center rounded-full bg-primary font-bold shadow-card" style={{left:`${x}%`,top:`${y}%`}}>{i+2}</span>)}</div></div></section>
    <section className="py-16"><div className="site-container grid gap-8 text-center md:grid-cols-3">{[[ShieldCheck,"8","سنوات من الخبرة"],[KeyRound,"1850+","عقار تم تسويقه"],[Building2,"2450+","عميل وثق بخدماتنا"]].map(([Icon,n,l])=><div key={String(l)}><Icon className="mx-auto text-primary" size={34}/><b className="mt-3 block font-display text-4xl">{String(n)}</b><span className="text-muted-foreground">{String(l)}</span></div>)}</div></section>
    <section className="bg-primary py-16 text-primary-foreground"><div className="site-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><h2 className="font-display text-3xl font-black">خطوتك العقارية تبدأ هنا</h2><p className="mt-2 opacity-80">اعرض عقارك أو سجّل طلبك، وفريقنا سيتواصل معك.</p></div><ButtonLink to="/submit" variant="light">اعرض عقارك <ArrowLeft size={18}/></ButtonLink></div></section>
  </>;
}

function PropertySection({ title, to, items, muted = false }: { title: string; to: "/rent" | "/sale"; items: typeof properties; muted?: boolean }) {
  return <section className={muted ? "bg-muted py-20" : "py-20"}><div className="site-container"><div className="mb-10 flex items-end justify-between"><h2 className="section-title">{title}</h2><ButtonLink to={to} variant="outline">عرض الكل <ArrowLeft size={16}/></ButtonLink></div><div className="grid gap-6 md:grid-cols-3">{items.map(p => <PropertyCard key={p.id} property={p}/>)}</div></div></section>;
}