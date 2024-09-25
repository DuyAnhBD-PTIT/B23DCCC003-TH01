import React, { useState } from 'react';
import axios from 'axios';

const ImageFind = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchImages = async () => {
        if (!query) return;

        setLoading(true);
        setError('');
        
        try {
            const response = await axios.get(`https://pixabay.com/api/?key=46166847-40e887f0f1cbd269c98d3b401&q=${query.trim()}&image_type=photo`);
            setImages(response.data.hits);
        } catch (err) {
            setError('Error fetching images. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchImages();
    };

    return (
        <div>
            <h1>Tìm Kiếm Hình Ảnh</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for images..."
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading images...</p>}
            {error && <p>{error}</p>}

            <div className="image-gallery">
                {images.map((image) => (
                    <img key={image.id} src={image.webformatURL} alt={image.tags} />
                ))}
            </div>
        </div>
    );
};

export default ImageFind;
