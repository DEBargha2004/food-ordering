import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function AddonInput({
  prefix,
  suffix,
  className,
  ...props
}: React.ComponentProps<"input"> & { prefix?: string; suffix?: string }) {
  return (
    <div className={"flex rounded-md shadow-xs"}>
      {prefix && (
        <span className="border-input bg-background text-muted-foreground inline-flex items-center rounded-s-md border px-3 text-sm">
          {prefix}
        </span>
      )}
      <Input
        className={cn(
          "-ms-px shadow-none",
          prefix && "rounded-s-none",
          suffix && "rounded-e-none",
          className
        )}
        type="text"
        {...props}
      />
      {suffix && (
        <span className="border-input bg-background text-muted-foreground inline-flex items-center rounded-s-md border px-3 text-sm">
          {suffix}
        </span>
      )}
    </div>
  );
}
