import { Quote } from "lucide-react";
import { TestimonialItem } from "./constant";

interface TestimonialCardProps {
  item: TestimonialItem;
}

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-accent shadow-sm hover:shadow-lg transition-all duration-300 h-[275px] w-full md:w-[400px] flex flex-col">
      {/* Row 1: Label & Avatar */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-4 py-1.5 rounded-full text-primary text-sm font-normal border border-primary uppercase tracking-wider">
          {item.label}
        </span>
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary/10 to-primary/20 border border-primary/10 flex items-center justify-center text-primary font-bold text-lg shadow-inner">
          {item.initials}
        </div>
      </div>

      {/* Row 2: Message */}
      <div className="grow overflow-hidden">
        <p className="text-foreground leading-relaxed text-base italic md:text-lg font-base relative line-clamp-4">
          <Quote
            className="inline-block w-4 h-4 text-primary mr-2 -mt-3 rotate-180"
            fill="currentColor"
            strokeWidth={0}
          />
          {item.message}
          <Quote
            className="inline-block w-4 h-4 text-primary ml-2 -mt-2"
            fill="currentColor"
            strokeWidth={0}
          />
        </p>
      </div>

      {/* Row 3: Name - pushed to bottom */}
      <h4 className="font-bold text-lg text-foreground font-manrope">
        {item.name}
      </h4>
    </div>
  );
}
