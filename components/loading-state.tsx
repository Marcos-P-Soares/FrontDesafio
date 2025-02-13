import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";

export default function LoadingState() {
  return (
    <Card className="p-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Brain className="w-8 h-8 animate-pulse text-primary" />
        <p className="text-muted-foreground">Processando sua pergunta...</p>
      </div>
    </Card>
  );
}