
import { instance } from "@/lib/http";

async function fetchFilms(genre: string, limit: number) {
  switch (genre) {
    case 'fetchTrending':
      return await instance.get('/movie', {
        params: {
          ['sort-field']: 'rating.kp',
          year: 2024,
        }
      })
    case 'fetchTopRating':
      return await instance.get('/movie', {
        params: {
          lists: 'top250',
          limit,
        }
      })
  }
}

const Page = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetchFilms(genre, 10);
  const data = await res?.data;
  
  return (
    <div>salam</div>
  );
}
 
export default Page;