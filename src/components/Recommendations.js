import React, { useState } from 'react';
import '../style.css';

function Recommendations() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="recommendations-container">
      <div className="recommendation-item" onClick={() => handleCategoryClick('Books')}>
        <h2 className="recommendations-title">Books</h2>
        {selectedCategory === 'Books' && (
          <div className="recommendation-details">
            <p>
              1. <i>The Power of Now</i> by Eckhart Tolle - A guide to spiritual enlightenment, focusing on mindfulness and being present.
            </p>
            <p>
              2. <i>Lost Connections</i> by Johann Hari - Exploring the causes of depression and solutions beyond conventional medication.
            </p>
            <p>
              3. <i>Atomic Habits</i> by James Clear - Practical advice on building healthy habits, which can be beneficial for mental well-being.
            </p>
          </div>
        )}
      </div>

      <div className="recommendation-item" onClick={() => handleCategoryClick('Podcasts')}>
        <h2 className="recommendations-title">Podcasts</h2>
        {selectedCategory === 'Podcasts' && (
          <div className="recommendation-details">
            <p>
              1. <i>On Being</i> with Krista Tippett - Conversations about life's big questions, spirituality, and mental health.
            </p>
            <p>
              2. <i>The Happiness Lab</i> with Dr. Laurie Santos - Discussing research and practical advice on leading a happier life.
            </p>
            <p>
              3. <i>Feel Better, Live More</i> with Dr. Rangan Chatterjee - Conversations on health and well-being with leading experts.
            </p>
          </div>
        )}
      </div>

      <div className="recommendation-item" onClick={() => handleCategoryClick('Meditation')}>
        <h2 className="recommendations-title">Meditation</h2>
        {selectedCategory === 'Meditation' && (
          <div className="recommendation-details">
            <p>
              1. Headspace - A popular app that provides guided meditation and mindfulness practices to reduce stress and anxiety.
            </p>
            <p>
              2. Insight Timer - Offers a large variety of free guided meditations from different teachers around the world.
            </p>
            <p>
              3. Calm - Guided meditations, sleep aids, and breathing exercises for improved mental clarity and relaxation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recommendations;