"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

interface ResponseCardProps {
  model: string;
  response: string;
}

export default function ResponseCard({ model, response }: ResponseCardProps) {
  const modelName = model.split("/")[1].split(":")[0];

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-2">
        <Bot className="w-5 h-5 text-primary" />
        <CardTitle className="text-sm font-medium">{modelName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{response}</p>
      </CardContent>
    </Card>
  );
}