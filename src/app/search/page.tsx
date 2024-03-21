import Results from "@/components/Results";
import { instance } from "@/lib/http";
import { FC } from "react";

async function fetchFilms(query: string, limit: number) {
  let res = await instance.get("/v2.1/films/search-by-keyword", {
    params: {
      keyword: query,
      limit,
    },
  });
  console.log(res, query);
  return res;
}

interface SearchProps {
  searchParams: {
    query: string;
  }
}

const Search: FC<SearchProps> = async ({ searchParams }) => {
  const query = searchParams.query ?? "";
  const res = await fetchFilms(query, 10);
  const data = await res?.data.films;

  return (
    <div className="max-w-6xl px-4 mx-auto">
      <Results results={data} />
    </div>
  );
};

export default Search;
