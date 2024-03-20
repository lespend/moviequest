
import Results from "@/components/Results";
import { instance } from "@/lib/http";
import { FC } from "react";

async function fetchFilms(genre: string, limit: number) {
  switch (genre) {
    case 'fetchTrending':
      return await instance.get('/films/collections', {
        params: {
          limit,
        }
      })
    case 'fetchTopRating':
      return await instance.get('/films/collections', {
        params: {
          type: 'TOP_250_MOVIES',
          limit,
        }
      })
  }
}

interface PageProps {
  searchParams: {
    genre?: string;
  }
}

const Page: FC<PageProps> = async ({ searchParams }) => {
  const genre = searchParams.genre ?? 'fetchTrending';
  const res = await fetchFilms(genre, 10);
  const data = await res?.data.items;

  console.log(data);

  return (
    <div className="max-w-6xl px-4 mx-auto">
      <Results results={data}/>
    </div>
  );
}
 
export default Page;