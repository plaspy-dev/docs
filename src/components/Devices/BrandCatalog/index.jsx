// src/components/Devices/BrandCatalog/index.jsx
import React from 'react';
import Link from '@docusaurus/Link';
import './styles.css';

export default function BrandCatalog({ brand }) {
    if (!brand) return null;

    const {
        name,
        image: brandLogo,
        website: brandWebsite,
        description: brandDescription,
        trackers = []
    } = brand;

    return (
        <div className="brand-catalog">
            <div className="brand-catalog-grid">
                {trackers.map((model) => (
                    <div
                        key={model.slug}
                        className='device-card'
                    >
                        <div className="device-card-image-container">
                            <Link to={`./${model.slug}`}>
                                {model.image && (
                                    <img
                                        src={model.image}
                                        alt={model.name}
                                        className="device-card-image"
                                    />
                                )}
                            </Link>
                        </div>
                        <div className='device-card-name'>
                            <Link to={`./${model.slug}`}>
                                <h3>{model.name}</h3>
                                {model.summary && <p>{model.summary}</p>}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
