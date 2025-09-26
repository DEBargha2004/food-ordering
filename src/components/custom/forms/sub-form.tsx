import { cn } from "@/lib/utils";

function SubForm({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "p-6 border rounded-xl shadow space-y-8 bg-accent/70",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

SubForm.Header = function Header({
  className,
  children,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header className={cn("space-y-1", className)} {...props}>
      {children}
    </header>
  );
};

SubForm.Title = function Title({
  children,
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2 className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </h2>
  );
};

SubForm.Description = function Description({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm text-muted-foreground font-medium", className)}
      {...props}
    >
      {children}
    </p>
  );
};

SubForm.Body = function Body({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("gap-4", className)} {...props}>
      {children}
    </div>
  );
};

export default SubForm;
