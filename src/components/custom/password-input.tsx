import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

export default function PasswordInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div className="relative">
      <Input
        className={cn("", className)}
        {...props}
        type={isVisible ? "text" : "password"}
      />
      <Button
        variant={"ghost"}
        size={"icon"}
        className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
        type="button"
        onClick={toggleVisibility}
      >
        {isVisible ? <EyeClosedIcon /> : <EyeIcon />}
      </Button>
    </div>
  );
}
