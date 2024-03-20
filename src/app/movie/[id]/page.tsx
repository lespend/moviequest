import { Badge } from "@/components/ui/badge";
import { instance } from "@/lib/http";
import { IMovieOne } from "@/types/movie";
import Image from "next/image";

const MoviePage = async ({ params }) => {
  const { id } = params;
  const res = await instance.get<IMovieOne>(`/films/${id}`);
  const data = await res.data;

  console.log(data);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8 grid sm:grid-cols-3 gap-8">
      <div className="">
        <Image
          className="w-full max-w-[667px]"
          src={data.posterUrlPreview}
          alt="Постер"
          width="360"
          height="540"
        />
      </div>
      <div className="sm:col-span-2 text-lg">
        <h2 className="sm:text-4xl text-3xl font-bold">{data.nameRu}</h2>
        <p className="mt-4">{data.description}</p>
        <div className="flex gap-2 mt-8 flex-wrap">
          {data.genres.map((item) => (
            <Badge key={item.genre} className="text-lg" variant="outline">{item.genre}</Badge>
          ))}
        </div>
        <p className="mt-8">Год выпуска: {data.year}</p>
        <p>Страны производства: {data.countries.map(i => i.country).join(", ")}</p>
        <p>Рейтинг Кинопоиск: {data.ratingKinopoisk ?? 'Нет'}</p>
        <p>Рейтинг Imdb: {data.ratingImdb ?? 'Нет'}</p>
      </div>
    </div>
  );
};

export default MoviePage;
