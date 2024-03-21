import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { IMovie } from "@/types/movie";
import { FC } from "react";

interface MovieCardProps {
  result: IMovie;
}

const MovieCard: FC<MovieCardProps> = ({ result }) => {
  return (
    <Link href={`/movie/${result.kinopoiskId}`}>
      <Card className="hover:scale-105 transition-transform">
        <CardHeader>
          <Image
            src={result.posterUrlPreview}
            alt="Постер"
            width={360}
            height={540}
            loading="eager"
          />
          <CardTitle className="text-2xl pt-4">{result.nameRu}</CardTitle>
          <CardDescription>Год выпуска: {result.year}</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          {result.ratingKinopoisk && (
            <Badge variant="outline">KINOPOISK {result.ratingKinopoisk}</Badge>
          )}
          {result.ratingImdb && (
            <Badge variant="default" className="bg-green-600">
              IMDB {result.ratingImdb}
            </Badge>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
