import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {

  const products = [
    {
      handle: "bottle-of-thermopylae",
      title: "The Bottle of Thermopylae",
      description:
        "A bold, unwavering wine with deep, concentrated character. Crafted to reflect the strength, intensity, and unbreakable spirit of Thermopylae.",
      image: "/bottle-of-thermopylae.png",
    },
    {
      handle: "bottle-of-marathon",
      title: "The Bottle of Marathon",
      description:
        "A bright, invigorating wine with energetic notes that capture the momentum and triumph of Marathon. Fresh, uplifting, and confidently charged.",
      image: "/bottle-of-marathon.png",
    },
    {
      handle: "bottle-of-salamis",
      title: "The Bottle of Salamis",
      description:
        "An energetic, sharply defined wine with bright, cutting clarity—echoing the tactical brilliance and decisive naval victory at Salamis.",
      image: "/bottle-of-salamis.png",
    },
  ];

  return (
    <div className="space-y-0 p-0">
      {/* HERO */}
      <section
        id="hero"
        className="h-[calc(100vh-4rem)] pt-12 pl-60 flex items-center p-12"
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-9xl font-bold mb-6 text-balance [font-family:var(--font-impact)]" >
            A Wine Meant to Be Spilled
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Wine was never meant to be a dainty affair. It was meant to flow like the lifeblood of the fallen, to be poured in great torrents over the victor’s feast. The Romans knew this. The Vikings lived by it. The legions, the warbands, the conquerors of old. They didn’t sip their wine while debating its bouquet. They drank. They spilled. They celebrated.
          </p>
        </div>
      </section>

      {/* SHOP */}
      <section
        id="shop"
        className="h-[calc(100vh-4rem)] pt-8 flex flex-col justify-start items-center p-12 bg-gray-50"
      >
        <div className="max-w-6xl w-full h-full">

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance [font-family:var(--font-impact)]">Featured Wines</h2>
            <Link
              href="/shop"
              className="inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm lg:text-base"
            >
              View All Wines
            </Link>
          </div>

          <p className="text-md text-gray-600 text-muted-foreground leading-relaxed mb-8">
            Discover our signature collection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.handle} className="max-w-md pt-0">
                <CardContent className="px-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="aspect-video h-85 rounded-t-xl object-cover"
                  />
                </CardContent>

                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription className="h-20">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
                  <Button asChild>
                    <Link href={`/products/${product.handle}`}>
                      Enter the Bottle
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        className="min-h-[calc(100vh-4rem)] pt-16 pl-60 flex items-center p-12"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="mt-4 text-gray-600">
            More content here…
          </p>
        </div>
      </section>

      <section id="note" className="h-[calc(100vh-4rem)] pt-12 pl-60 flex items-center p-12">
        <div className="max-w-3xl">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-balance [font-family:var(--font-impact)]">A Note on Respect for History</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We acknowledge that the battles and historical events featured in our wine collection carry profound
              human weight. These were moments of courage, sacrifice, and often tragedy that shaped the course of
              nations and the lives of countless individuals.
            </p>
            <p>
              Our aim is to honor history, not trivialize it. Every bottle in our collection is paired with carefully
              researched historical narratives that respect the gravity of these events while celebrating the human
              spirit and resilience they represent.
            </p>
            <p>
              Through storytelling, we seek to educate and inspire. We believe that pairing exceptional wine with
              compelling history creates a unique opportunity to reflect on our shared past while savoring the present
              moment. Each sip becomes a toast to those who came before us and the lessons their experiences continue
              to teach.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
