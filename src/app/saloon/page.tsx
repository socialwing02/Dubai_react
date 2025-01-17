import GridColumns from "@/pages/Saloon/GridColumns";
import SaloonEvalute from "@/pages/Saloon/SaloonEvalute";
import SaloonHero from "@/pages/Saloon/SaloonHero";
import SaloonShowcase from "@/pages/Saloon/SaloonShowcase";

export default function Saloon() {
  return (
    <main>
      <SaloonHero />
      <GridColumns />
      <SaloonEvalute />
      <SaloonShowcase />
    </main>
  );
}
