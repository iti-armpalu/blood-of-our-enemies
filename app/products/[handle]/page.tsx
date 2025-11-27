import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type PageProps = {
    params: {
        handle: string;
    };
};

export default function ProductPage({ params }: PageProps) {
    const handle = params.handle;


    return (
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                        src='/bottle-of-thermopylae.png'
                        alt="Bottle"
                        className="object-cover"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance [font-family:var(--font-impact)]">Bottle of Thermopylae</h1>
                    <p className="text-2xl font-bold mb-6">$18</p>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Our Estate Reserve Cabernet is a testament to the art of winemaking. Bold and structured, this wine
                        showcases deep notes of blackcurrant, cedar, and dark chocolate. Aged 18 months in French oak barrels,
                        it develops exceptional depth and complexity.
                    </p>

                    <div className="space-y-4 mb-8">
                        <h3 className="text-xl font-semibold">Wine Details</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Vintage</p>
                                <p className="font-medium">2020</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Region</p>
                                <p className="font-medium">Estate Vineyard</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Alcohol</p>
                                <p className="font-medium">14.5%</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Aging</p>
                                <p className="font-medium">18 months in French oak</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Production</p>
                                <p className="font-medium">Limited to 6592 bottles</p>
                            </div>
                        </div>
                    </div>

                    <Button size="lg" className="w-full lg:w-auto mb-8">
                        Add to Cart
                    </Button>

                    {/* Accordion for Battle Story and Historical Videos */}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="bottle-story">
                            <AccordionTrigger className="text-lg font-semibold">Bottle Story</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    Chosen for its symbolism of courage and unwavering spirit,
                                    Thermopylae inspires a wine built on intensity and depth.
                                    Just as a small band of warriors stood firm against overwhelming odds,
                                    this bottle represents strength of character—structured, bold, and
                                    unapologetically powerful. Crafted to honor resilience, it carries
                                    the essence of standing one’s ground with dignity and fire.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="battle-story">
                            <AccordionTrigger className="text-lg font-semibold">Battle Story</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    Thermopylae, the narrow pass where King Leonidas and his 300 Spartans 
                                    held back the vast Persian army, remains one of history’s most iconic 
                                    defenses. Their stand turned a mountain pass into a symbol of bravery, 
                                    sacrifice, and unity. Though vastly outnumbered, the Greeks fought with 
                                    precision, strategy, and unwavering resolve—creating a legend that 
                                    endures as a testament to courage against impossible odds.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="historical-videos">
                            <AccordionTrigger className="text-lg font-semibold">
                                Historical Videos
                                <span className="text-sm text-muted-foreground font-normal ml-2">Curated by History Channel</span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h4 className="font-semibold">The Wine Battles of Napoleon</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Explore how wine played a crucial role in Napoleons campaigns and military strategy.
                                        </p>
                                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                            <p className="text-sm text-muted-foreground">Video: The Wine Battles of Napoleon</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="font-semibold">Ancient Winemaking: Roman Legions</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Discover how Roman soldiers relied on wine rations during their conquests across Europe.
                                        </p>
                                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                            <p className="text-sm text-muted-foreground">Video: Ancient Winemaking: Roman Legions</p>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
