import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EllipsisVertical } from "lucide-react";

type ShopCardProps = React.ComponentProps<"div">;

export function ShopCard({ children, className, ...props }: ShopCardProps) {
  return (
    <div
      className={cn(
        "aspect-video w-full border rounded-lg p-3 group",
        className
      )}
      {...props}
    >
      <header className="flex justify-between items-center">
        {children}
        <Button
          variant={"outline"}
          size={"icon"}
          className="rounded-full invisible group-hover:visible cursor-pointer"
        >
          <EllipsisVertical />
        </Button>
      </header>
    </div>
  );
}

type ShopCardTitleProps = React.ComponentProps<"h2">;

export function ShopCardTitle({
  children,
  className,
  ...props
}: ShopCardTitleProps) {
  return (
    <h2 className={cn("text-lg font-medium", className)} {...props}>
      {children}
    </h2>
  );
}
