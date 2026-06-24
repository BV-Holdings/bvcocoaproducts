import { Mail, Phone } from "lucide-react";

export interface TradeDeskCardProps {
  heading?: string;
  body?: string;
  phone?: string;
  email?: string;
}

export function TradeDeskCard({
  heading = "Trade Desk Direct",
  body = "For urgent inquiries or high-volume contracts, contact our desk directly.",
  phone = "+237 673 433 467",
  email = "info@bvcocoaproducts.com",
}: TradeDeskCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-cocoaBrown p-md text-warmCream">
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-terracotta/10 blur-3xl transition-all duration-700 group-hover:bg-terracotta/20" />
      <h3 className="mb-md text-headline-md font-headline-md text-amber">{heading}</h3>
      <p className="mb-lg text-body-md text-warmCream/80">{body}</p>
      <div className="space-y-sm">
        <div className="flex items-center gap-sm">
          <Phone className="h-5 w-5 text-amber" />
          <span className="text-label-sm font-label-sm">{phone}</span>
        </div>
        <div className="flex items-center gap-sm">
          <Mail className="h-5 w-5 text-amber" />
          <span className="text-label-sm font-label-sm">{email}</span>
        </div>
      </div>
    </div>
  );
}
