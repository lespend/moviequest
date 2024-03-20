import Results from "@/components/Results";
import { instance } from "@/lib/http";

async function fetchFilms(query: string, limit: number) {
  return await instance.get("/films/search-by-keyword", {
    params: {
      keyword: query,
      limit,
    },
  });
}

const Search = async ({ params }) => {
  const query = params.query ?? "";
  const res = await fetchFilms(query, 10);
  const data = await res?.data.items;

  return (
    <div className="max-w-6xl px-4 mx-auto">
      <Results results={data} />
    </div>
  );
};

export default Search;
