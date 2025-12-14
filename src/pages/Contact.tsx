import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen font-sans bg-rich-black text-white">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 bg-rich-black relative overflow-hidden">
                <div className="absolute inset-0 bg-brown-500/5 blur-[120px] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                <div className="container-custom text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Let's Start Your Journey</h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Your story deserves to be told with passion and precision. Reach out to us, and let's craft something timeless together.
                    </p>
                </div>
            </section>

            <section className="pb-24">
                <AnimatedSection className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brown-500/50 transition-colors">
                                <h3 className="text-2xl font-serif font-bold mb-6 text-brown-300">Get in Touch</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-brown-500/20 p-3 rounded-lg text-brown-300">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Phone</p>
                                            <p className="text-white/70">+91 98765 43210</p>
                                            <p className="text-white/50 text-sm">Mon - Sat, 9am - 7pm</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-brown-500/20 p-3 rounded-lg text-brown-300">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Email</p>
                                            <p className="text-white/70">skgraphics@email.com</p>
                                            <p className="text-white/50 text-sm">Online support</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-brown-500/20 p-3 rounded-lg text-brown-300">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Studio</p>
                                            <p className="text-white/70">Koderma, Jharkhand</p>
                                            <p className="text-white/50 text-sm">Visit by appointment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/80">Your Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-rich-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brown-500 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/80">Phone Number</label>
                                        <input type="tel" placeholder="+91 98765 43210" className="w-full bg-rich-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brown-500 transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80">Event Date</label>
                                    <input type="date" className="w-full bg-rich-black/50 border border-white/20 rounded-lg px-4 py-3 text-white/80 focus:outline-none focus:border-brown-500 transition-colors [color-scheme:dark]" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80">Why do you want to talk?</label>
                                    <textarea rows={4} placeholder="Tell us about your event..." className="w-full bg-rich-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brown-500 transition-colors"></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-brown-500 rounded-lg font-bold text-white hover:bg-white hover:text-rich-black transition-all duration-300 shadow-lg flex items-center justify-center">
                                    Connect with Owner
                                    <Heart className="ml-2 w-5 h-5 fill-current" />
                                </button>
                            </form>
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
};

export default Contact;
