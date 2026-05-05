import { HotspotSection } from "@/components/HotspotSection";
import { HotspotFAQ } from "@/components/HotspotFAQ";
import { InquirySection } from "@/components/InquirySection";

const Hotspots = () => (
  <div className="pt-24">
    <HotspotSection />
    <HotspotFAQ />
    <InquirySection />
  </div>
);

export default Hotspots;
