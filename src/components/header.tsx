import { Home } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "@/components/tiptap-templates/simple/theme-toggle";

export function EditorHeader() {
  return (
    <div className="p-2 bg-sidebar border flex gap-2 items-center justify-between">
      <Button size={"icon"} variant={"ghost"}>
        <Home />
      </Button>
      <div className="">Titolo della nota</div>
      <ThemeToggle />
    </div>
  );
}
