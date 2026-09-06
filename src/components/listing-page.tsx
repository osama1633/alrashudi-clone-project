import { useState } from "react";
import { Search } from "lucide-react";
import { PageHero } from "@/components/site";
import { PropertyCard } from "@/components/property-card";
import { districts, properties, propertyTypes, type Property } from "@/data/properties";

export function ListingPage({ purpose, initial }: { purpose: Property["purpose"]; initial?: { type?: string; district?: string } }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState(initial?.type ?? "");
  const [district, setDistrict] = useState(initial?.district ?? "");
  const results = properties.filter(p => p.purpose === purpose && (!query || p.title.includes(query)) && (!type || p.type === type) && (!district || p.district === district));
  return <><PageHero eyebrow={`قسم ال${purpose}`} title={`عقارات لل${purpose} في بريدة`}><p>{purpose === "إيجار" ? "شقق وبيوت وأدوار ووحدات للإيجار الشهري والسنوي في بريدة." : "فلل وأراضٍ وعقارات تجارية للبيع في أفضل أحياء بريدة."}</p></PageHero><section className="py-14"><div className="site-container"><div className="grid gap-3 border-b border-border pb-8 md:grid-cols-3"><label className="relative"><Search className="absolute right-3 top-3 text-muted-foreground" size={19}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="ابحث باسم العقار" className="h-12 w-full rounded-md border border-input bg-card pr-10 pl-3"/></label><select value={district} onChange={e=>setDistrict(e.target.value)} className="h-12 rounded-md border border-input bg-card px-3"><option value="">كل الأحياء</option>{districts.map(x=><option key={x}>{x}</option>)}</select><select value={type} onChange={e=>setType(e.target.value)} className="h-12 rounded-md border border-input bg-card px-3"><option value="">كل الأنواع</option>{propertyTypes.map(x=><option key={x}>{x}</option>)}</select></div><div className="my-8 flex justify-between"><h2 className="font-display text-2xl font-black">العقارات المتاحة</h2><span className="text-sm text-muted-foreground">{results.length} نتائج</span></div>{results.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{results.map(p=><PropertyCard key={p.id} property={p}/>)}</div> : <div className="py-24 text-center text-muted-foreground">لا توجد عقارات مطابقة لبحثك.</div>}</div></section></>;
}