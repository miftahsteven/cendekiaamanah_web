import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface FilterCategory {
  value: string;
  label: string;
}

interface CategoryFilterProps {
  activeFilter: string;
  onFilterChange: (value: string) => void;
  categories: readonly FilterCategory[] | FilterCategory[];
}

export function CategoryFilter({
  activeFilter,
  onFilterChange,
  categories,
}: CategoryFilterProps) {
  return (
    <>
      {/* Mobile Filter - Dropdown */}
      <div className="lg:hidden">
        <Select value={activeFilter} onValueChange={onFilterChange}>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Pilih Kategori" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Filter - Button Group */}
      <div className="hidden lg:flex flex-wrap bg-white p-2 rounded-full">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onFilterChange(category.value)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-normal transition-all duration-100 whitespace-nowrap cursor-pointer",
              activeFilter === category.value
                ? "bg-accent text-accent-foreground"
                : "text-foreground hover:text-foreground",
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
    </>
  );
}
