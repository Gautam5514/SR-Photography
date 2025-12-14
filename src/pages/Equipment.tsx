import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { EQUIPMENT_LIST } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

const Equipment = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen font-sans bg-soft-white text-rich-black">
            <Navbar />

            <main className="pt-24 pb-12">
                <section className="py-12 bg-soft-white">
                    <AnimatedSection className="container-custom">
                        <div className="grid lg:grid-cols-3 gap-12 items-start">

                            {/* Text Content */}
                            <div className="lg:col-span-1 sticky top-32">
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-rich-black mb-6">World-Class Gear <br />For Cinematic Brilliance.</h1>
                                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                    We believe that the best stories deserve the best tools. From 8K cinema cameras to high-altitude drones, our inventory is packed with state-of-the-art technology to ensure every frame is a masterpiece.
                                </p>

                                <ul className="space-y-4 mb-10">
                                    {['4K & 8K Recording', 'Low Light Mastery', 'Aerial Cinematography', 'Crisp Audio Capture'].map((feat) => (
                                        <li key={feat} className="flex items-center text-rich-black font-medium">
                                            <div className="w-2 h-2 rounded-full bg-brown-500 mr-3"></div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => navigate('/contact')}
                                    className="px-8 py-3 bg-rich-black text-white rounded-full font-semibold hover:bg-brown-500 transition-all duration-300 shadow-lg"
                                >
                                    Hire Us Now
                                </button>
                            </div>

                            {/* Equipment Grid */}
                            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                                {EQUIPMENT_LIST.map((item) => (
                                    <div key={item.id} className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brown-300">
                                        <div className="aspect-video w-full overflow-hidden rounded-lg mb-4 bg-gray-50 flex items-center justify-center">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-brown-500 mb-1 block">{item.category}</span>
                                            <h3 className="text-lg font-bold text-rich-black mb-2 group-hover:text-brown-500 transition-colors">{item.name}</h3>
                                            <p className="text-sm text-gray-500 leading-snug">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </AnimatedSection>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Equipment;
