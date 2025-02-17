"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trophy } from "lucide-react";

interface RankingCardProps {
  model: string;
  rankings: { position: number; model: string; average: number }[];
  evaluations: Record<string, { clarity: number; accuracy: number; creativity: number; grammar: number; average: number }>;
}

export default function RankingCard({ model, rankings, evaluations }: RankingCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-2">
        <Trophy className="w-5 h-5 text-primary" />
        <CardTitle className="text-sm font-medium">
          Avaliação por {model}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Modelo</TableHead>
              <TableHead>Clareza</TableHead>
              <TableHead>Precisão</TableHead>
              <TableHead>Criatividade</TableHead>
              <TableHead>Gramática</TableHead>
              <TableHead>Média</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(evaluations).map(([evaluatedModel, scores]) => (
              <TableRow key={evaluatedModel}>
                <TableCell className="font-medium">{evaluatedModel}</TableCell>
                <TableCell>{scores.clarity.toFixed(1)}</TableCell>
                <TableCell>{scores.accuracy.toFixed(1)}</TableCell>
                <TableCell>{scores.creativity.toFixed(1)}</TableCell>
                <TableCell>{scores.grammar.toFixed(1)}</TableCell>
                <TableCell className="font-bold">{scores.average.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="space-y-2">
          <h4 className="font-semibold">Ranking Final</h4>
          <div className="grid gap-2">
            {rankings.map(({ position, model, average }) => (
              <div
                key={model}
                className="flex items-center justify-between p-2 rounded bg-muted"
              >
                <span>{position}. {model}</span>
                <span className="font-semibold">{average.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
