import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="mt-16 flex max-w-6xl px-4 mx-auto jusitfy-between gap-2 flex-col items-center lg:flex-row lg:items-stretch">
      <div className="w-3/4 lg:w-auto">
        <Image
          className="rounded-lg mx-auto"
          src="/assets/about.jpg"
          alt="Кинотеатр"
          width="550"
          height="825"
        />
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-5xl">О нас</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Добро пожаловать на наш сайт - базу данных фильмов, где каждый
            кинолюбитель найдет что-то по душе. Мы стремимся предоставить вам
            доступ к обширной коллекции киношедевров различных жанров и эпох.
            Независимо от того, интересуетесь ли вы классикой мирового
            кинематографа, последними голливудскими блокбастерами или
            экспериментальными инди-фильмами, у нас есть что-то для каждого.
          </p>

          <p className="mt-4">
            Наша база данных постоянно обновляется, чтобы вы могли быть в курсе
            последних новинок и классических шедевров, которые стали
            неотъемлемой частью кинематографического наследия. Кроме того, мы
            предоставляем подробные описания фильмов, рейтинги пользователей,
            рецензии критиков и многое другое, чтобы помочь вам выбрать фильмы,
            которые соответствуют вашим вкусам и предпочтениям. Добро пожаловать
            в мир кино на нашем сайте!
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/">
            <Button>Продолжить пользоваться</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
