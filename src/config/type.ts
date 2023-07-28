export interface IProduct {
    _id?: string;
    image: string;
    name: string;
    category: string;
    status: string;
    price: number;
    description: string;
    keyFeatures: {
        brand: string;
        model: string;
        specification: string;
        port: string;
        type: string;
        resolution: string;
        voltage: string;
    };
    individualRating: number;
    averageRating: number;
    reviews: Review[];
    isFeatured: boolean;
}

export interface Review {
    user: string;
    rating: number;
    comment: string;
}
