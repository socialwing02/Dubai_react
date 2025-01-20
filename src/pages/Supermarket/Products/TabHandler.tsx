import { category } from "@/lib/constants";
import { TabOnClick } from "./Tabs";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type TabHandlerProps = {
  children: React.ReactNode;
  onClick: TabOnClick;
  buttonType: category;
  isActive: boolean;
};

export default function TabHandler({
  children,
  onClick,
  buttonType,
  isActive,
}: TabHandlerProps) {
  return (
    <Button
      className={cn(isActive ? "font-bold text-blue-600" : "")}
      onClick={() => onClick(buttonType)}
      variant="ghost"
    >
      {children}
    </Button>
  );
}
