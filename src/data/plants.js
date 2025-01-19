const plants = [
  {
    id: 'rose',
    name: 'Rose',
    image: '/images/rose.jpg', // Local image
    description: 'A fragrant flower symbolizing love and romance.',
    moreDetails: 'Roses have been cultivated for thousands of years for their beauty and fragrance. Rose petals can be used to make rosewater, which is often added to desserts, cosmetics, and medicinal preparations. Rose hips, the fruit of the rose plant, are rich in vitamin C and used in teas, jams, and herbal remedies. Roses also play a significant role in art, literature, and cultural traditions around the world.',
    tips: [
      'Regularly check for aphids and remove them by hand or with a strong jet of water.',
      'Prune the roses in early spring to promote new growth and remove dead or diseased wood.',
      'Mulch around the base of the plants to help retain moisture and suppress weeds.',
      'Water deeply and regularly, especially during dry periods.',
      'Deadhead spent flowers to encourage continuous blooming.'
    ]
  },
  {
    id: 'tulip',
    name: 'Tulip',
    image: '/images/tulip.jpg', // Local image
    description: 'A vibrant, popular spring flower.',
    moreDetails: 'Tulips come in a variety of colors, each carrying its own symbolism. They are a favorite in gardens and floral arrangements. The bulbs of some species are edible and were historically used as a food source during times of famine. Tulips played a major role in the Dutch Golden Age, leading to the economic phenomenon known as "Tulip Mania." They are also featured in many artworks and are a symbol of elegance and grace.',
    tips: [
      'Plant tulip bulbs in well-drained soil in a sunny location.',
      'Water the bulbs after planting, but avoid overwatering as it can cause the bulbs to rot.',
      'Apply a balanced fertilizer in early spring as the tulips begin to grow.',
      'Remove the spent flowers to prevent the plant from diverting energy into seed production.',
      'Allow the foliage to die back naturally to help the bulbs store energy for the next season.'
    ]
  },
  {
    id: 'lavender',
    name: 'Lavender',
    image: '/images/lavender.jpg', // Local image
    description: 'A plant known for its calming scent.',
    moreDetails: 'Lavender is widely used in aromatherapy to promote relaxation and better sleep. Its oil has antiseptic and anti-inflammatory properties, making it valuable in treating minor burns and insect bites. Lavender flowers are also used in culinary applications, adding a subtle flavor to baked goods and desserts. The plant is commonly grown in gardens for its beauty and fragrance, and dried lavender is often used in sachets to scent linens.',
    tips: [
      'Plant lavender in well-drained soil with full sun exposure.',
      'Prune the plants in early spring to promote healthy growth and prevent them from becoming woody.',
      'Avoid overwatering; lavender prefers dry conditions once established.',
      'Harvest the flowers when they are just starting to open for the best fragrance.',
      'Mulch with gravel or sand to improve drainage and keep the base of the plant dry.'
    ]
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    image: '/images/sunflower.jpg', // Local image
    description: 'A bright, sun-following flower.',
    moreDetails: 'Sunflowers are known for their large, cheerful blooms that track the sun’s movement across the sky. They produce seeds that are edible and nutritious, often enjoyed as snacks or used to make sunflower oil. Sunflowers are also used in phytoremediation to remove toxins from the soil. Their tall stature and vibrant appearance make them a popular choice in gardens and floral arrangements. They symbolize adoration, loyalty, and longevity.',
    tips: [
      'Plant sunflower seeds in well-drained soil in a sunny location.',
      'Water regularly, especially during dry periods, to keep the soil moist.',
      'Provide support for tall varieties to prevent them from toppling over.',
      'Fertilize with a balanced fertilizer to promote healthy growth and large blooms.',
      'Harvest the seeds when the flower heads turn brown and the seeds are plump and mature.'
    ]
  },
  {
    id: 'basil',
    name: 'Basil',
    image: '/images/basil.jpg', // Local image
    description: 'A common culinary herb.',
    moreDetails: 'Basil is a staple in many cuisines, particularly in Italian dishes like pesto. It has antibacterial properties and is rich in antioxidants. Basil also has anti-inflammatory effects and is used in traditional medicine to treat various ailments. Fresh basil leaves are a popular garnish for salads, pizzas, and pastas. The plant is easy to grow in home gardens and can be used fresh or dried in a variety of culinary applications.',
    tips: [
      'Plant basil in well-drained soil with full sun exposure.',
      'Pinch off the flower buds to encourage more leaf production.',
      'Water regularly, keeping the soil consistently moist but not waterlogged.',
      'Harvest the leaves frequently to promote new growth.',
      'Mulch around the base of the plant to retain moisture and suppress weeds.'
    ]
  },
  {
    id: 'mint',
    name: 'Mint',
    image: '/images/mint.jpg', // Local image
    description: 'A fresh and invigorating herb.',
    moreDetails: 'Mint is commonly used in beverages like mojitos and teas. It aids in digestion and has a cooling effect when applied to the skin. Mint leaves are also used in cooking to add a fresh flavor to dishes and salads. The plant is known for its aromatic properties and is often used in herbal remedies to treat digestive issues, headaches, and respiratory conditions. Mint is easy to grow and spreads quickly, making it a favorite in herb gardens.',
    tips: [
      'Plant mint in well-drained soil in a sunny or partially shaded location.',
      'Water regularly to keep the soil moist but not waterlogged.',
      'Harvest the leaves frequently to promote new growth and prevent the plant from becoming leggy.',
      'Contain the plant’s spread by planting it in a pot or using a root barrier in the garden.',
      'Mulch around the base of the plant to retain moisture and suppress weeds.'
    ]
  },
  {
    id: 'cactus',
    name: 'Cactus',
    image: '/images/cactus.jpg', // Local image
    description: 'A thorny plant adapted to arid environments.',
    moreDetails: 'Cacti store water in their stems and can survive in very dry conditions, making them ideal for low-maintenance gardens. They are popular as decorative plants and come in a variety of shapes and sizes. The fruit of some cacti, known as prickly pear, is edible and used in various dishes. Some cacti also have medicinal properties and are used in traditional remedies. Cacti symbolize endurance, protection, and warmth.',
    tips: [
      'Removing the pests manually: For Mealybugs use cotton swab dipped in alcohol, for Spider mites spray with water & for Scale insects use soft brush.',
      'Maintain good air circulation.',
      'Neem oil on mealybugs.',
      'Garlic spray-Blend garlic cloves with water, strain the mixture, and spray it on the cactus.',
      'Cinnamon powder prevents fungal infections.',
      'Place yellow sticky traps around the cactus to catch gnats.',
      'Avoid overcrowding as any infestation can spread quickly.'
    ]
  },
  {
    id: 'orchid',
    name: 'Orchid',
    image: '/images/orchid.jpg', // Local image
    description: 'An exotic, delicate flower.',
    moreDetails: 'Orchids are prized for their intricate and long-lasting blooms, and they come in a variety of shapes and colors. They are often used in decorative floral arrangements and are a symbol of luxury, beauty, and strength. Some species of orchids have medicinal properties and are used in traditional remedies. Orchids are also a popular subject in art and literature, admired for their beauty and elegance.',
    tips: [
      'Removal of Scale, Aphids, Mealybugs and Spider Mites: Use a small toothbrush or cotton swab soaked in rubbing alcohol.',
      'Grasshoppers can be removed by pruners or by handpicking.',
      'Ant traps contain a bait that lures ants into the trap where they consume poison and bring it back to their colony.',
      'Caterpillars, look for their eggs on the underside of leaves; remove them before they hatch.',
      'For snails and slugs, check under pots or near damp areas around the plant. You can also lure them out by placing a piece of lettuce near the plant overnight then dispose of it in the morning along with any snails that have gathered there.'
    ]
  },
  {
    id: 'fern',
    name: 'Fern',
    image: '/images/fern.jpg', // Local image
    description: 'Lush green foliage, no flowers.',
    moreDetails: 'Ferns are known for their feathery leaves and thrive in shady, humid environments, making them a great addition to indoor gardens. They are often used in landscaping for their rich foliage. Some species of ferns have medicinal properties and are used in traditional medicine to treat various health issues. Ferns are also valued for their ability to purify indoor air by removing toxins.',
    tips: [
      'Neem oil can repel aphids, mealybugs, beetles.',
      'Baking soda for fungus.',
      'Removal of Scale, Aphids, Mealybugs and Spider Mites: Use a small toothbrush or cotton swab soaked in rubbing alcohol.',
      'Weeds can harbor aphids so removing them is necessary.',
      'Whiteflies and fungus gnats require the sticky yellow tape.',
      'Holes in the foliage caused by weevils (larvae are white and grub-like) are handpicked.',
      'Trim ferns in early spring or when there is yellowing or browning fronds for optimal growth before new leaves emerge.'
    ]
  },
  {
    id: 'aloe vera',
    name: 'Aloe Vera',
    image: '/images/aloevera.jpg', // Local image
    description: 'A succulent with healing properties.',
    moreDetails: 'Aloe Vera gel is widely used in skincare for its soothing and moisturizing effects. It is great for soothing burns, cuts, and other skin irritations. Aloe Vera also has digestive benefits when consumed as a juice. The plant is easy to grow and can be used in a variety of cosmetic and medicinal products. Aloe Vera symbolizes healing, protection, and beauty.',
    tips: [
      'Snout Beetles are manually removed.',
      'The gall mites travel through the air and cutting away the affected tissue with a sharp blade is helpful. Aloes that touch an infected plant are particularly vulnerable.',
      'Aloe Rust (black or brown circular spots on the aloe leaves); one teaspoon of baking soda in one quart of water to help fight the rust.',
      'Chili sprays on mealybugs and aphids.',
      'Thrips can be destroyed with diatomaceous earth on the plant and soil as the sharp edges of the particles cut the skin of pests and absorb their moisture.'
    ]
  }
];

export default plants;