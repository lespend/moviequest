import SkeletonCard from "@/components/SkeletonCard";

const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
      {Array.from(Array(9).keys()).map(i => (
        <SkeletonCard key={i}/>
      ))}
    </div>
  );
}
 
export default Loading;