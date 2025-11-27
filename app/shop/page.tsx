import Link from "next/link"

const wines = [
    {
        id: 1,
        name: "The Bottle of Kadesh",
        description: "A rich, complex blend balancing intensity and smoothness, inspired by the clash of great empires at Kadesh.",
        price: 20,
        gradient: "from-red-900/20",
    },
    {
        id: 2,
        name: "The Bottle of Alesia",
        description: "Structured and enduring, this wine mirrors the strategic brilliance and tension of Caesar’s siege at Alesia.",
        price: 20,
        gradient: "from-yellow-600/20",
    },
    {
        id: 3,
        name: "The Bottle of Gaugamela",
        description: "A powerful, commanding wine with bold layers and long momentum, echoing Alexander’s decisive victory at Gaugamela.",
        price: 20,
        gradient: "from-red-700/20",
    },
    {
        id: 4,
        name: "The Bottle of Actium",
        description: "A bright, crisp wine with sharp clarity and elegant depth, evoking the naval victory that reshaped an empire.",
        price: 20,
        gradient: "from-pink-400/20",
    },
    {
        id: 5,
        name: "The Bottle of Plataea",
        description: "A confident, triumphant wine with clean strength and steady character, celebrating the final blow against Persian domination.",
        price: 20,
        gradient: "from-amber-500/20",
    },
    {
        id: 6,
        name: "The Bottle of Issus",
        description: "Vibrant and assertive, this wine captures the dynamic clash and forward drive of Alexander’s charge at Issus.",
        price: 20,
        gradient: "from-purple-900/20",
        isCase: true,
    },
    {
        id: 7,
        name: "The Bottle of Zama",
        description: "Smooth yet commanding, this blend reflects the disciplined power that ended the age of Hannibal at Zama.",
        price: 20,
        gradient: "from-red-800/20",
    },
    {
        id: 8,
        name: "The Bottle of Megiddo",
        description: "A layered, ancient-feeling wine with earthy depth, inspired by the first recorded battle in history at Megiddo.",
        price: 82,
        gradient: "from-purple-800/20",
    },
    {
        id: 9,
        name: "The Bottle of Syracuse",
        description: "Innovative and bright, with surprising twists, echoing the ingenuity behind the dramatic naval turning point at Syracuse.",
        price: 95,
        gradient: "from-yellow-500/20",
    },
]

export default function ShopPage() {
    return (
        <div className="min-h-screen px-6 lg:px-12 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-balance">Our Wine Collection</h1>
                    {/* <p className="text-lg text-muted-foreground leading-relaxed">
                        Explore our complete selection of estate-grown wines. Each bottle is carefully crafted and shipped
                        directly to your door.
                    </p> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {wines.map((wine) => (
                        <div
                            key={wine.id}
                            className="bg-backgroundrounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div
                                className={`aspect-[3/4] bg-gradient-to-br ${wine.gradient} to-muted ${wine.isCase ? "flex items-center justify-center" : ""}`}
                            >
                                {wine.isCase && <span className="text-4xl font-bold text-muted-foreground/50">Mixed</span>}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{wine.name}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{wine.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold">${wine.price}</span>
                                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
