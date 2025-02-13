"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Brain, Send, Trophy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import ResponseCard from "@/components/response-card";
import RankingCard from "@/components/ranking-card";
import LoadingState from "@/components/loading-state";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState<any>(null);
  const { toast } = useToast();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) {
      toast({
        title: "Campo vazio",
        description: "Por favor, digite uma pergunta.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/openrouter/ask-and-rank`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) throw new Error("Falha na requisição");
      
      const data = await response.json();
      setResponses(data);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao processar sua pergunta.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">AI Response Analyzer</h1>
          </div>
          <p className="text-muted-foreground">
            Compare respostas de diferentes modelos de IA e veja suas avaliações
          </p>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              placeholder="Digite sua pergunta..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Enviando..." : <Send className="w-4 h-4" />}
            </Button>
          </form>
        </Card>

        {loading && <LoadingState />}

        {responses && !loading && (
          <Tabs defaultValue="responses" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="responses">Respostas</TabsTrigger>
              <TabsTrigger value="rankings">Rankings</TabsTrigger>
            </TabsList>

            <TabsContent value="responses" className="space-y-4">
              {Object.entries(responses.responses).map(([model, response]) => (
                <ResponseCard key={model} model={model} response={response as string} />
              ))}
            </TabsContent>

            <TabsContent value="rankings" className="space-y-4">
              {Object.entries(responses.rankings).map(([model, rankings]) => (
                <RankingCard key={model} model={model} rankings={rankings as string} />
              ))}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </main>
  );
}