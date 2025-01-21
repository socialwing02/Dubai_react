import { serviceCardContent } from "@/lib/constants";
import { ServiceCard } from "@/lib/types";

export default function HomeServices() {
  return (
    <section className="grid grid-cols-1  sm:grid-cols-[repeat(4,290px)] gap-10 justify-center  my-10 max-w-[1200px] mx-auto px-8  ">
      {serviceCardContent.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </section>
  );
}

function Card(props: ServiceCard) {
  return (
    <>
      <div className="service-card  text-center bg-[#171717] text-white  flex flex-col gap-3 items-center shadow-lg  p-6 rounded-xl">
        <props.icon sx={{ color: "#960215", fontSize: "3.3rem" }} />
        <h3 className="text-[clamp(1.5rem,1.5vw,4rem)]">{props.title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          molestiae similique temporibus!
        </p>
      </div>
    </>
  );
}
