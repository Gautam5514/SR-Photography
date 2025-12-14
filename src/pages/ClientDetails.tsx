import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { MOCK_DATA, CATEGORIES } from '../data/mockData';

const ClientDetails = () => {
    const { categoryId, clientId } = useParams<{ categoryId: string; clientId: string }>();
    // Default to images view
    const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');

    if (!categoryId || !clientId) return <Navigate to="/my-work" replace />;

    const categoryClients = MOCK_DATA[categoryId];
    const client = categoryClients?.find(c => c.id === clientId);

    if (!client) return <div className="pt-32 text-center text-2xl">Client not found</div>;

    const categoryName = CATEGORIES[categoryId as keyof typeof CATEGORIES];

    return (
        <div className="pt-24 min-h-screen bg-off-white">
            <div className="container-custom py-12">
                <div className="mb-8">
                    <Link to={`/my-work/${categoryId}`} className="inline-flex items-center text-brown-500 hover:text-brown-700 transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back to {categoryName}
                    </Link>
                </div>

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-rich-black mb-2">{client.name}</h1>
                    <p className="text-brown-600 font-medium uppercase tracking-wide mb-4">{client.event} | {client.date}</p>
                    <p className="text-gray-600 max-w-2xl mx-auto">{client.description}</p>
                </div>

                {/* Toggle Buttons - Centered and Styled */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1 rounded-full shadow-md inline-flex">
                        <button
                            onClick={() => setActiveTab('images')}
                            className={`flex items-center px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'images'
                                    ? 'bg-brown-500 text-white shadow-sm'
                                    : 'text-gray-500 hover:text-brown-500'
                                }`}
                        >
                            <ImageIcon className="w-4 h-4 mr-2" /> Images
                        </button>
                        <button
                            onClick={() => setActiveTab('videos')}
                            className={`flex items-center px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'videos'
                                    ? 'bg-brown-500 text-white shadow-sm'
                                    : 'text-gray-500 hover:text-brown-500'
                                }`}
                        >
                            <VideoIcon className="w-4 h-4 mr-2" /> Videos
                        </button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="min-h-[400px] animate-fade-in-up">
                    {activeTab === 'images' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {client.images.map((img, index) => (
                                <div key={index} className="group relative rounded-lg overflow-hidden shadow-sm aspect-w-4 aspect-h-3 cursor-pointer">
                                    <img
                                        src={img}
                                        alt={`Shot ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {client.videos.map((video, index) => (
                                <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-black">
                                    <div className="relative aspect-video">
                                        <video
                                            controls
                                            className="w-full h-full object-cover"
                                            poster={client.images[0]}
                                        >
                                            <source src={video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className="p-4 bg-white">
                                        <h3 className="font-serif font-bold text-lg text-rich-black">Cinematic Highlight {index + 1}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;
