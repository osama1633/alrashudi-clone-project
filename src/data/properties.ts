import apartment from "@/assets/property-apartment.jpg";
import chalet from "@/assets/property-chalet.jpg";
import villa from "@/assets/property-villa.jpg";

export type Property = {
  id: string;
  title: string;
  purpose: "إيجار" | "بيع";
  type: string;
  district: string;
  price: string;
  period?: string;
  image: string;
  featured?: boolean;
  description: string;
};

export const properties: Property[] = [
  { id: "rsh-842", title: "وحدة أرضية للإيجار السنوي حي سلطانه", purpose: "إيجار", type: "وحدة أرضية", district: "النخيل - سلطانه", price: "30,000", period: "سنوياً", image: villa, featured: true, description: "مدخلان للوحدة، مجلس وصالة ومطبخ وثلاث غرف نوم إحداها ماستر، مع مدخل سيارة مستقل." },
  { id: "rsh-843", title: "شاليه للإيجار السنوي حي النفل بريدة", purpose: "إيجار", type: "شاليه", district: "النفل", price: "20,000", period: "سنوياً", image: chalet, featured: true, description: "شاليه عصري واسع بخصوصية عالية، مجلس وصالة ومسبح وفناء خارجي منسق." },
  { id: "rsh-830", title: "فيلا مؤثثة للإيجار السنوي حي النهضة", purpose: "إيجار", type: "فيلا", district: "النهضة", price: "80,000", period: "سنوياً", image: villa, featured: true, description: "فيلا مؤثثة بالكامل بتشطيبات حديثة، مناسبة للعائلات وقريبة من جميع الخدمات." },
  { id: "rsh-833", title: "شقة للإيجار الشهري حي النهضة", purpose: "إيجار", type: "شقة", district: "النهضة", price: "1,500", period: "شهرياً", image: apartment, featured: true, description: "شقة نظيفة ومجهزة في موقع هادئ، تتكون من غرفتين وصالة ومطبخ ودورة مياه." },
  { id: "rsh-846", title: "دور علوي للإيجار السنوي حي سلطانه", purpose: "إيجار", type: "وحدة علوية", district: "سلطانة", price: "17,000", period: "سنوياً", image: apartment, description: "دور علوي مستقل بمدخل خاص وتوزيع عملي، قريب من المدارس والخدمات." },
  { id: "rsh-854", title: "شقة مؤثثة عوائل للإيجار الشهري حي الضاحي", purpose: "إيجار", type: "شقة", district: "الضاحي", price: "1,200", period: "شهرياً", image: apartment, description: "شقة مؤثثة للعوائل، جاهزة للسكن ومزودة بالخدمات الأساسية." },
  { id: "rsh-219", title: "للبيع استراحة في حي اللسيب ببريدة", purpose: "بيع", type: "شاليه", district: "اللسيب", price: "430,000", image: chalet, description: "استراحة خاصة بمسطحات خضراء ومجلس ضيافة ومسبح، مناسبة للاستثمار والاستخدام العائلي." },
  { id: "rsh-230", title: "للبيع دور مع شقة علوية في حي الإسكان", purpose: "بيع", type: "دور مع شقة", district: "الإسكان", price: "عند التواصل", image: villa, description: "عقار سكني بدخل استثماري، دور أرضي وشقة علوية بمداخل مستقلة." },
  { id: "rsh-225", title: "للبيع قطعتا أرض تجارية بحي الرحاب", purpose: "بيع", type: "أرض", district: "الرحاب", price: "عند التواصل", image: villa, description: "قطعتان تجاريتان على شارع حيوي شمال بريدة، فرصة مناسبة للتطوير." },
  { id: "rsh-231", title: "للبيع قطع أراضٍ في حي الصفا غرب بريدة", purpose: "بيع", type: "أرض", district: "الصفاء", price: "عند التواصل", image: villa, description: "مخطط سكني مكتمل الخدمات في موقع واعد غرب بريدة." },
  { id: "rsh-236", title: "للبيع أرضان متجاورتان في حي القصيعة", purpose: "بيع", type: "أرض", district: "القصيعة", price: "لا يوجد حد", image: villa, description: "أرضان متجاورتان جنوب بريدة، مساحة مناسبة للبناء أو الاستثمار." },
  { id: "rsh-200", title: "للبيع عمارة تجارية في حي النقيب الشمالي", purpose: "بيع", type: "صالة تجارية", district: "النقيب", price: "2,400,000", image: villa, description: "عمارة تجارية بموقع بارز ووحدات متعددة، مناسبة للاستثمار طويل الأمد." },
];

export const districts = [...new Set(properties.map((item) => item.district))];
export const propertyTypes = [...new Set(properties.map((item) => item.type))];