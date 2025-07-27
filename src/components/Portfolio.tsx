import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // Or your preferred icon library

// Define the structure of a portfolio item
interface PortfolioItem {
    img: string;
    title: string;
    desc: string;
}

// All your portfolio data lives inside this component file
const portfolioItems: PortfolioItem[] = [
    { img: "/click.jpg", title: "Sarah & Michael", desc: "Beach Wedding" },
    { img: "/click1.jpg", title: "Emily & James", desc: "Garden Ceremony" },
    { img: "/click5.jpg", title: "Jessica & David", desc: "Rustic Barn" },
    { img: "/click2.jpg", title: "Anna & Thomas", desc: "City Wedding" },
    { img: "/click3.jpg", title: "Olivia & William", desc: "Forest Elopement" },
    { img: "/click4.jpg", title: "Grace & Robert", desc: "Vineyard Ceremony" },
    // --- Add ALL your other portfolio items below ---
    { img: "/camera.webp", title: "Chloe & Daniel", desc: "Mountain Top Vows" },
    { img: "/gautam.webp", title: "Zoe & Lucas", desc: "Lakeside Celebration" },
    { img: "/shambhu.webp", title: "Mia & Ethan", desc: "Industrial Chic Venue" },
];

// Define the props for our component. It will accept a 'mode'.
interface PortfolioProps {
    mode: 'featured' | 'full'; // 'featured' for homepage, 'full' for the portfolio page
}

// A placeholder for your AnimatedSection component if you use one
const AnimatedSection = ({ children, className }: { children: React.ReactNode, className: string }) => (
    <div className={className}>{children}</div>
);


const Portfolio: React.FC<PortfolioProps> = ({ mode }) => {
    // Determine which items to show based on the mode
    const isFeaturedMode = mode === 'featured';
    const itemsToShow = isFeaturedMode ? portfolioItems.slice(0, 6) : portfolioItems;

    // Determine the title and subtitle based on the mode
    const title = isFeaturedMode ? "A Glimpse Into Our Stories" : "Our Complete Portfolio";
    const subtitle = isFeaturedMode
        ? "Each gallery is a unique chapter in a beautiful love story. Here are a few of our favorites."
        : "We are honored to have been a part of so many incredible stories. Explore our full gallery below.";

    return (
        <section id="portfolio" className="py-24 bg-brown-100/30">
            <AnimatedSection className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">{title}</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
                </div>

                {/* The Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {itemsToShow.map((item) => (
                        <div key={item.title} className="group relative rounded-lg overflow-hidden cursor-pointer aspect-w-1 aspect-h-1">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <h3 className="font-serif font-bold text-xl text-white">{item.title}</h3>
                                    <p className="text-white/80 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* The "View Full Portfolio" button, which only shows in 'featured' mode */}
                {isFeaturedMode && (
                    <div className="text-center mt-12">
                        <Link
                            to="/portfolio"
                            className="px-8 py-3 bg-transparent border-2 border-brown-500 text-brown-500 rounded-full font-semibold hover:bg-brown-500 hover:text-white transition-colors duration-300 flex items-center mx-auto"
                        >
                            View Full Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                )}
            </AnimatedSection>
        </section>
    );
};

export default Portfolio;