// import { useState } from "react";
// import { FiDownload } from "react-icons/fi";

// const galleryImages = [
//   { src: "src/assets/images/sofo.jpg", alt: "Church Event 1" },
//   { src: "src/assets/images/sofomaame.jpg", alt: "Church Event 2" },
//   { src: "src/assets/images/jef.jpg", alt: "Church Event 3" },
//   { src: "src/assets/images/mama.jpg", alt: "Church Event 6" },
//   { src: "src/assets/images/img4.jpg", alt: "Church Event 4" },
//   { src: "src/assets/images/sof3.jpg", alt: "Church Event 5" },
//   { src: "src/assets/images/band.jpg", alt: "Church Event 6" },
//   { src: "src/assets/images/img8.jpg", alt: "Church Event 4" },
//   { src: "src/assets/images/preci.jpg", alt: "Church Event 5" },
//   { src: "src/assets/images/sec.jpg", alt: "Church Event 6" },
//   // Add more images as needed
// ];

// const Gallery = () => {
//   const [visibleCount, setVisibleCount] = useState(3); // Number of initially visible images

//   const handleViewMore = () => {
//     setVisibleCount((prevCount) => prevCount + 3); // Show 3 more images each time "View More" is clicked
//   };

//   return (
//     <section className="mb-8">
//       <h2 className="text-3xl font-bold mb-4">Gallery</h2>

//       {/* Gallery Images - Vertical Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {galleryImages.slice(0, visibleCount).map((image, idx) => (
//           <div key={idx} className="relative">
//             <img
//               src={image.src}
//               alt={image.alt}
//               loading="lazy" // Lazy loading for better performance
//               className="w-full h-48 object-cover rounded-lg"
//             />
//             <a
//               href={image.src}
//               download
//               className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-2 rounded-full"
//             >
//               <FiDownload size={20} />
//             </a>
//           </div>
//         ))}
//       </div>

//       {/* View More Button */}
//       {visibleCount < galleryImages.length && (
//         <div className="mt-6 text-center">
//           <button
//             onClick={handleViewMore}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             View More
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Gallery;

import { useEffect, useRef, useState } from "react";
import { FiDownload } from "react-icons/fi";

const galleryImages = [
  { src: "src/assets/images/sofo.jpg", alt: "Church Event 1" },
  { src: "src/assets/images/sofomaame.jpg", alt: "Church Event 2" },
  { src: "src/assets/images/jef.jpg", alt: "Church Event 3" },
  { src: "src/assets/images/mama.jpg", alt: "Church Event 6" },
  { src: "src/assets/images/img4.jpg", alt: "Church Event 4" },
  { src: "src/assets/images/sof3.jpg", alt: "Church Event 5" },
  { src: "src/assets/images/band.jpg", alt: "Church Event 6" },
  { src: "src/assets/images/img8.jpg", alt: "Church Event 4" },
  { src: "src/assets/images/preci.jpg", alt: "Church Event 5" },
  { src: "src/assets/images/sec.jpg", alt: "Church Event 6" },
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            if (!visibleImages.includes(index)) {
              setVisibleImages((prev) => [...prev, index]);
            }
          }
        });
      },
      {
        root: null, // Observe relative to viewport
        threshold: 0.1, // Trigger when 10% of the image is visible
      }
    );

    imageRefs.current.forEach((image) => observer.observe(image));

    return () => {
      imageRefs.current.forEach((image) => observer.unobserve(image));
    };
  }, [visibleImages]);

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4">Gallery</h2>

      {/* Gallery Images - Vertical Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, idx) => (
          <div
            key={idx}
            ref={(el) => (imageRefs.current[idx] = el)}
            data-index={idx}
            className="relative"
          >
            {visibleImages.includes(idx) ? (
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-48 object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
            )}
            {visibleImages.includes(idx) && (
              <a
                href={image.src}
                download
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-2 rounded-full"
              >
                <FiDownload size={20} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
