import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Heart, Video, PartyPopper, Flame } from 'lucide-react'; // Example icons

const categories = [
    { id: 'marriage', name: 'Marriage', icon: Heart, description: 'Capturing your forever moments.', image: '/click.jpg', link: '/my-work/marriage' },
    { id: 'engagement', name: 'Engagement', icon: Heart, description: 'The beginning of your journey.', image: '/click1.jpg', link: '/my-work/engagement' },
    { id: 'birthday', name: 'Birthday Party', icon: PartyPopper, description: 'Celebrating life\'s milestones.', image: '/click5.jpg', link: '/my-work/birthday' },
    { id: 'puja', name: 'Puja', icon: Flame, description: 'Divine and traditional ceremonies.', image: '/click2.jpg', link: '/my-work/puja' },
    { id: 'drone', name: 'Drone', icon: Video, description: 'Cinematic aerial perspectives.', image: '/click3.jpg', link: '/my-work/drone' },
    { id: 'photography', name: 'Photography', icon: Camera, description: 'Professional shoots for all occasions.', image: '/click4.jpg', link: '/my-work/photography' },
];

const MyWork = () => {
    return (
        <div className="pt-24 min-h-screen bg-off-white">
            <div className="container-custom py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-rich-black mb-4">My Work</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Explore our diverse portfolio across different events and styles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link
                            to={category.link || "#"} // Update links as pages are built
                            key={category.id}
                            className="group block relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                                {/* Using placeholder images from existing assets or fallback */}
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="p-2 bg-brown-500/80 backdrop-blur-sm rounded-full">
                                        <category.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold">{category.name}</h3>
                                </div>
                                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {category.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyWork;
