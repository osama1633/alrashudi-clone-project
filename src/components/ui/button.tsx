import { Link } from "@tanstack/react-router";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  outline: "border border-border bg-surface/10 text-foreground hover:bg-surface/20",
  light: "bg-surface text-foreground hover:bg-muted",
  whatsapp: "bg-whatsapp text-primary-foreground hover:bg-whatsapp-hover",
};

export function Button({ className, variant = "primary", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof variants }) {
  return <button className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold transition-colors disabled:opacity-50", variants[variant], className)} {...props} />;
}

export function ButtonLink({ children, to, params, className, variant = "primary" }: { children: ReactNode; to: string; params?: Record<string, string>; className?: string; variant?: keyof typeof variants }) {
  return <Link to={to} params={params} className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold transition-colors", variants[variant], className)}>{children}</Link>;
}