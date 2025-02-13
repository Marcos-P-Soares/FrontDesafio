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
  rankings: string;
}

export default function RankingCard({ model, rankings }: RankingCardProps) {
  const modelName = model.split("/")[1].split(":")[0];

  // Parse the rankings string to extract scores
  const parseRankings = (rankingsStr: string) => {
    try {
      // Extract JSON objects from the string
      const jsonStrings = rankingsStr.match(/\{[^}]+\}/g) || [];
      const [scores, finalRankings] = jsonStrings.map(str => JSON.parse(str));
      
      return { scores, finalRankings };
    } catch (error) {
      console.error("Error parsing rankings:", error);
      return { scores: {}, finalRankings: {} };
    }
  };

  const { scores, finalRankings } = parseRankings(rankings);

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-2">
        <Trophy className="w-5 h-5 text-primary" />
        <CardTitle className="text-sm font-medium">
          Avaliação por {modelName}
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(scores).map(([model, scoreStr]) => {
              const scoreMatches = (scoreStr as string).match(/clareza: (\d+), Precisão da informação: (\d+), Criatividade: (\d+), Consistência gramatical: (\d+)/);
              if (!scoreMatches) return null;
              
              const [_, clarity, precision, creativity, grammar] = scoreMatches;
              
              return (
                <TableRow key={model}>
                  <TableCell className="font-medium">{model}</TableCell>
                  <TableCell>{clarity}</TableCell>
                  <TableCell>{precision}</TableCell>
                  <TableCell>{creativity}</TableCell>
                  <TableCell>{grammar}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div className="space-y-2">
          <h4 className="font-semibold">Ranking Final</h4>
          <div className="grid gap-2">
            {Object.entries(finalRankings).map(([rank, score]) => (
              <div
                key={rank}
                className="flex items-center justify-between p-2 rounded bg-muted"
              >
                <span>{rank}</span>
                <span className="font-semibold">{score}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}