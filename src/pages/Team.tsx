import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Sparkles } from 'lucide-react';
import { TEAM_MEMBERS } from '@/data/mockData';

const Team = () => {
    return (
        <div className="min-h-screen font-sans bg-rich-black text-white">
            <Navbar />

            <main className="pt-24 pb-12">
                <section className="py-12 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brown-500/10 via-rich-black to-rich-black z-0"></div>

                    <AnimatedSection className="container-custom relative z-10">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-white">Meet The Visionaries</h1>
                            <div className="h-1 w-24 bg-brown-500 mx-auto mt-4 rounded-full"></div>
                            <p className="mt-6 text-white/70 max-w-2xl mx-auto font-sans text-lg">
                                Behind every perfect shot is a team of dedicated artists. We are the storytellers of <span className="text-brown-300">The Wedding Click</span>.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {TEAM_MEMBERS.map((member) => (
                                <div key={member.id} className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-brown-500/50 transition-all duration-500 hover:-translate-y-2">
                                    {/* Image Container */}
                                    <div className="aspect-[3/4] overflow-hidden relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-300"></div>

                                        {/* Floating Badge */}
                                        <div className="absolute top-4 right-4 bg-brown-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            <Sparkles className="w-3 h-3 inline-block mr-1" /> Specialist
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 text-center transform transition-transform duration-500">
                                        <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-brown-300 transition-colors">{member.name}</h3>
                                        <p className="text-brown-300 text-sm font-medium uppercase tracking-widest mb-3">{member.role}</p>
                                        <p className="text-white/60 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Team;
