import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { MapPin, Sparkles, ChevronDown, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// --- WEDDING SPECIFIC DATA ---
const slides = [
    {
        id: 2,
        type: 'image',
        // Indian Wedding Vibes
        src: '/fame2.webp',
        title: "Where Tradition Meets Timelessness.",
        subtitle: "From the vibrant Haldi to the emotional Vidai, we are there."
    },
    {
        id: 1,
        type: 'video',
        // High quality wedding video placeholder
        src: 'https://cdn.coverr.co/videos/coverr-wedding-couple-by-the-beach-5544/1080p.mp4',
        title: "Capturing Emotions, Crafting Legacies.",
        subtitle: "We don't just click photos; we bottle up the soul of your wedding."
    },

    {
        id: 3,
        type: 'image',
        // Cinematic Couple Shot
        src: '/fame7.webp',
        title: "Your Love Story, Cinema Quality.",
        subtitle: "Based in Ballia, telling love stories across Bihar & Jharkhand."
    }
];

const HeroSlider = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const navigate = useNavigate();

    // Typing Effect Logic
    useEffect(() => {
        const fullText = slides[activeSlideIndex].title;
        setTypedText('');

        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setTypedText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 60); // Slightly slower for elegance

        return () => clearInterval(typingInterval);
    }, [activeSlideIndex]);

    const handleScrollDown = () => {
        const nextSection = document.getElementById('about'); // Changed to typical next section
        if (nextSection) {
            window.scrollTo({ top: nextSection.offsetTop - 80, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen w-full bg-rich-black overflow-hidden font-sans">
            <Swiper
                spaceBetween={0}
                effect={'fade'}
                speed={1500} // Slower transition for luxury feel
                autoplay={{
                    delay: 7000, // Longer dwell time to read text
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + ' !bg-white/50 !w-2 !h-2 hover:!bg-brown-300 transition-all"></span>';
                    },
                }}
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative h-full w-full">
                        {/* --- Background Layer --- */}
                        <div className="absolute inset-0 z-0">
                            {slide.type === 'video' ? (
                                <video
                                    src={slide.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover opacity-90"
                                />
                            ) : (
                                <img
                                    src={slide.src}
                                    alt={slide.title}
                                    className="w-full h-full object-cover transform scale-100 animate-slow-zoom"
                                />
                            )}
                        </div>

                        {/* --- Gradient Overlays for Readability --- */}
                        {/* Bottom Up Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/50 to-transparent z-10" />
                        {/* Top Down Gradient (for Navbar visibility) */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10 h-32" />

                        {/* --- Content Layer --- */}
                        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
                            <div className="container mx-auto max-w-5xl space-y-8 mt-12">

                                {/* Typing Main Title */}
                                <div className="min-h-[120px] md:min-h-[160px] flex items-center justify-center">
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] tracking-wide drop-shadow-2xl">
                                        {typedText}
                                        <span className="animate-pulse text-brown-300 font-light ml-1">|</span>
                                    </h1>
                                </div>

                                {/* Subtitle */}
                                <p
                                    className="text-lg md:text-2xl text-white/80 font-light max-w-3xl mx-auto opacity-0 animate-fade-in-up font-sans tracking-wide"
                                    style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
                                >
                                    {slide.subtitle}
                                </p>

                                {/* Location Badges */}
                                <div
                                    className="flex flex-wrap justify-center items-center gap-4 pt-4 opacity-0 animate-fade-in-up"
                                    style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
                                >
                                    <span className="text-brown-300 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mr-2">
                                        Available In
                                    </span>
                                    {['Koderma', 'Dhanbad', 'Giridih', 'Ranchi'].map((state) => (
                                        <div key={state} className="group relative">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-brown-500 to-white/20 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                                            <span className="relative flex items-center px-5 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-sm text-white transition-all cursor-default group-hover:bg-black/60">
                                                <MapPin className="w-3.5 h-3.5 mr-2 text-brown-300" />
                                                {state}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <div
                                    className="pt-10 opacity-0 animate-fade-in-up"
                                    style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
                                >
                                    <button
                                        onClick={() => navigate('/contact')}
                                        className="group relative inline-flex items-center justify-center px-10 py-4 bg-brown-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                                    >
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                        <span className="font-cinzel font-bold text-white group-hover:text-rich-black mr-3 tracking-widest text-sm md:text-base">
                                            Book Your Date
                                        </span>
                                        <Camera className="w-5 h-5 text-white group-hover:text-brown-500 transition-transform duration-300 group-hover:rotate-12" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Scroll Down Indicator */}
            <div
                onClick={handleScrollDown}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer group"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] font-sans group-hover:tracking-[0.5em] transition-all duration-300">
                    Scroll
                </span>
                <ChevronDown className="w-6 h-6 animate-bounce text-brown-300" />
            </div>
        </section>
    );
};

export default HeroSlider;