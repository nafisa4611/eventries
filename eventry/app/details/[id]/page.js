import HeroSection from "@/components/details/HeroSection";
import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVenue";
import { getEventById } from "@/db/queries";

export default async function EventDetailsPage({params : { id }}) {
  const eventInfo = await getEventById(id);
  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <section class="container mx-auto px-2">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={eventInfo?.details} swags={eventInfo?.swags}/>
          <EventVenue location={eventInfo?.location}/>
        </div>
      </section>
    </>
  )
}
