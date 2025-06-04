import EventList from "@/components/Landing/EventList";
import Header from "@/components/Landing/Header";
import Loading from "@/components/Loading";
import { Suspense } from "react";


export default async function Home({ searchParams }) {
  const query = await searchParams?.query ?? "";
  return (
    <section className="container mx-auto px-2">
      <Header />
      <Suspense key={query} fallback={<Loading />}>
        <EventList query={query} />
      </Suspense>
    </section>
  );
}
