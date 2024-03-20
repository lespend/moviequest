"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-8">
      <h1 className="text-xl">
        Что-то пошло не так. Пожалуйста, попробуйте ещё раз.
      </h1>
      <Button className="mt-2" onClick={reset}>
        Попробовать снова
      </Button>
    </div>
  );
};

export default Error;
