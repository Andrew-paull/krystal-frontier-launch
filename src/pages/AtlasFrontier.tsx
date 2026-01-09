import AtlasHeader from "@/components/atlas/AtlasHeader";
import AtlasHero from "@/components/atlas/AtlasHero";
import AtlasAbout from "@/components/atlas/AtlasAbout";
import AtlasServices from "@/components/atlas/AtlasServices";
import AtlasPhilosophy from "@/components/atlas/AtlasPhilosophy";
import AtlasWhy from "@/components/atlas/AtlasWhy";
import AtlasVision from "@/components/atlas/AtlasVision";
import AtlasContact from "@/components/atlas/AtlasContact";
import AtlasFooter from "@/components/atlas/AtlasFooter";

const AtlasFrontier = () => {
  return (
    <div className="min-h-screen">
      <AtlasHeader />
      <main>
        <AtlasHero />
        <AtlasAbout />
        <AtlasServices />
        <AtlasPhilosophy />
        <AtlasWhy />
        <AtlasVision />
        <AtlasContact />
      </main>
      <AtlasFooter />
    </div>
  );
};

export default AtlasFrontier;
