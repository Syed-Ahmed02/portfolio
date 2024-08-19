// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import RichText from "@/components/RichText";
// Asset imports
import type { HeroSimpleBlock } from "@/payload-types";
interface HeroSimpeProps {
  heroSimple: HeroSimpleBlock;
  
}
export const HeroSimple: React.FC<HeroSimpeProps> = ({ heroSimple}) => {
  const { media, richText,Buttons } = heroSimple;
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <RichText content={richText} />           
          <div className="not-prose flex items-center gap-2">
            {Buttons && Buttons.map((button, index) => (
              <Button key={index} className="w-fit" variant={typeof button === "object" ? button.variant : 'default'} asChild>
                <Link href={typeof button === "object" ? button.link : '/'} target={typeof button === "object" ? (button.openInNewTab ? "_blank" : "") : ""}>{typeof button === "object" ? button.text : ''}</Link>
              </Button>
            ))}
            
          </div>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={typeof media === "object" ? `${media?.url}` : ''}
            alt="placeholder"
            
            layout="fill"
            
          /> 
        </div>
      </Container>
    </Section>
  );
};

export default HeroSimple;
