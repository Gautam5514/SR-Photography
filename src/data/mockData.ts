
export interface Client {
    id: string;
    name: string;
    category: string;
    coverImage: string;
    images: string[];
    videos: string[];
    date: string;
    location: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string; // e.g., "Drone Handler", "Cinematographer"
    image: string;
    description: string;
}

export interface Equipment {
    id: string;
    category: 'Camera' | 'Drone' | 'Lens' | 'Lighting' | 'Stabilizer' | 'Audio';
    name: string;
    image: string; // icon or image
    description: string;
}

export const CATEGORIES = {
    marriage: 'Marriage',
    engagement: 'Engagement',
    birthday: 'Birthday',
    puja: 'Puja',
    drone: 'Drone Shoot',
    photography: 'Photography',
};

// Helpers
const generateImages = (count: number) => Array(count).fill('/click.jpg');
const generateVideos = (count: number) => Array(count).fill('https://cdn.coverr.co/videos/coverr-wedding-couple-by-the-beach-5544/1080p.mp4');

const generateClients = (category: string, count: number): Client[] => {
    return Array.from({ length: count }).map((_, i) => ({
        id: `${category}-${i + 1}`,
        name: `Client ${i + 1}`,
        category,
        coverImage: i % 2 === 0 ? '/click.jpg' : '/click1.jpg',
        images: generateImages(6),
        videos: generateVideos(2),
        date: 'Dec 2024',
        location: 'Ballia, India'
    }));
};

export const MOCK_DATA: Record<string, Client[]> = {
    marriage: generateClients('marriage', 6),
    engagement: generateClients('engagement', 4),
    birthday: generateClients('birthday', 4),
    puja: generateClients('puja', 4),
    drone: generateClients('drone', 5),
    photography: generateClients('photography', 6),
};

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: '1',
        name: 'Suraj Kumar',
        role: 'Lead Photographer & Founder',
        image: '/suraj.webp',
        description: 'The visionary behind the lens, capturing emotions with precision. Specializes in candid and traditional wedding photography.'
    },
    {
        id: '2',
        name: 'Shubham',
        role: 'Drone Pilot & Cinematographer',
        image: '/suraj.webp',
        description: 'Expert in aerial cinematography, adding a cinematic perspective from the sky using FPV and Mavic drones.'
    },
    {
        id: '3',
        name: 'Amit Verma',
        role: 'Senior Cinematographer',
        image: '/suraj.webp',
        description: 'Crafting the wedding films that tell your unique love story with a documentary style approach.'
    },
    {
        id: '4',
        name: 'Rahul Singh',
        role: 'Candid Specialist',
        image: '/suraj.webp',
        description: 'Capturing those unposed, raw moments of laughter and tears that make your album truly special.'
    },
    {
        id: '5',
        name: 'Priya Sharma',
        role: 'Creative Director',
        image: '/suraj.webp',
        description: 'Ensures every frame aligns with the aesthetic vision, managing poses and styling.'
    },
    {
        id: '6',
        name: 'Vikram Das',
        role: 'Lead Editor',
        image: '/suraj.webp',
        description: ' The magician in post-production who color grades and edits your films to cinematic perfection.'
    }
];

export const EQUIPMENT_LIST: Equipment[] = [
    {
        id: '1',
        category: 'Camera',
        name: 'Sony Alpha A7RV',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80',
        description: '61MP full-frame sensor for impeccable detail in portraits and large prints.'
    },
    {
        id: '2',
        category: 'Camera',
        name: 'Canon EOS R5',
        image: 'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?auto=format&fit=crop&w=400&q=80',
        description: '8K video capabilities for cinematic wedding films and high-speed photography.'
    },
    {
        id: '3',
        category: 'Drone',
        name: 'DJI Mavic 3 Pro',
        image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=400&q=80',
        description: 'Hasselblad camera drone for breathtaking 5.1K aerial shots and landscape views.'
    },
    {
        id: '4',
        category: 'Lens',
        name: 'G Master 85mm f/1.4',
        image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=400&q=80',
        description: 'The ultimate portrait lens for creamy bokeh and subject separation.'
    },
    {
        id: '5',
        category: 'Lighting',
        name: 'Godox AD600 Pro',
        image: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=400&q=80',
        description: 'Professional outdoor lighting for dramatic couple portraits in any weather.'
    },
    {
        id: '6',
        category: 'Stabilizer',
        name: 'DJI RS 3 Pro',
        image: 'https://images.unsplash.com/photo-1588483977959-badc9893d432?auto=format&fit=crop&w=400&q=80',
        description: 'Cinema-grade gimbal for buttery smooth footage during movement.'
    },
    {
        id: '7',
        category: 'Drone',
        name: 'DJI Avata (FPV)',
        image: 'https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=400&q=80',
        description: 'First-person view drone for dynamic, high-speed indoor and outdoor chase shots.'
    },
    {
        id: '8',
        category: 'Lens',
        name: 'Canon RF 28-70mm f/2',
        image: 'https://images.unsplash.com/photo-1616423664033-63518d2c610a?auto=format&fit=crop&w=400&q=80',
        description: 'A beast of a zoom lens with prime-like sharpness, perfect for versatile event coverage.'
    },
    {
        id: '9',
        category: 'Audio',
        name: 'Rode Wireless Pro',
        image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=400&q=80',
        description: 'Crystal clear audio recording for vows and speeches, ensuring every word is heard.'
    }
];
