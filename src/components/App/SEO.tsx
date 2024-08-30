
import React, { useEffect } from 'react';

interface SEOProps {
    data: {
        title: string;
        description: string;
        keywords: string[];
    };
}

export const SEO: React.FC<SEOProps> = ({ data }) => {
  useEffect(() => {
    // Set the page title
    document.title = data.title;

    // Create or update meta tags for description and keywords
    const updateMetaTag = (name: string, content: string) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    if (data.description) {
      updateMetaTag('description', data.description);
    }

    if (data.keywords) {
      updateMetaTag('keywords', data.keywords.join(','));
    }
  }, [data]);

  return null;
};

export default SEO;
