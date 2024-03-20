import Image from "next/image";
import { FC } from "react";
import MovieCard from "./MovieCard";

interface ResultsProps {
  results: any;
}

const Results: FC<ResultsProps> = ({ results }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
      {results.map((result) => (
        <MovieCard key={result.nameRu} result={result}/>
      ))}
    </div>
  );
};

export default Results;
