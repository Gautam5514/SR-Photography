import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';
import { MOCK_DATA, CATEGORIES } from '../data/mockData';

const CategoryWork = () => {
    const { categoryId } = useParams<{ categoryId: string }>();

    // Validate category
    if (!categoryId || !MOCK_DATA[categoryId]) {
        return <Navigate to="/my-work" replace />;
    }

    const categoryName = CATEGORIES[categoryId as keyof typeof CATEGORIES] || 'Our Work';
    const clients = MOCK_DATA[categoryId];

    return (
        <div className="pt-24 min-h-screen bg-off-white">
            <div className="container-custom py-12">
                <div className="mb-8">
                    <Link to="/my-work" className="inline-flex items-center text-brown-500 hover:text-brown-700 transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back to My Work
                    </Link>
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-rich-black mb-3">{categoryName}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our latest projects in {categoryName}. Select a client to view their full gallery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clients.map((client) => (
                        <Link
                            to={`/my-work/${categoryId}/${client.id}`}
                            key={client.id}
                            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                                <img
                                    src={client.coverImage}
                                    alt={client.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brown-600 uppercase tracking-wider">
                                    {client.event}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-serif font-bold text-rich-black group-hover:text-brown-600 transition-colors">
                                        {client.name}
                                    </h3>
                                    <User className="w-5 h-5 text-gray-400" />
                                </div>
                                <p className="text-gray-500 text-sm mb-4">{client.date}</p>

                                <div className="w-full py-2 bg-brown-50 text-brown-600 rounded-lg text-center text-sm font-semibold group-hover:bg-brown-500 group-hover:text-white transition-colors duration-300">
                                    View Gallery
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryWork;
