import React, { useState } from 'react';
// Import house data
import { housesData } from '../data';
// useParams
import { useParams } from 'react-router-dom';
// Import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => house.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="container mx-auto min-h-[800px] mb-14">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <div className="relative">
              <img
                src={property.images[currentImageIndex]}
                alt={`${property.name} ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
              >
                &#8249;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
              >
                &#8250;
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-2">{property.name}</h2>
              <p className="text-lg text-gray-600 mb-4">{property.address}</p>
              <div className="flex gap-x-4 text-violet-700 mb-6 justify-end">
                <div className="flex gap-x-2 items-center">
                  <BiBed className="text-2xl" />
                  <div className="text-lg font-medium">{property.bedrooms}</div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <BiBath className="text-2xl" />
                  <div className="text-lg font-medium">{property.bathrooms}</div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <BiArea className="text-2xl" />
                  <div className="text-lg font-medium">{property.surface} m²</div>
                </div>
              </div>
              <p className="text-gray-700 text-right">{property.description}</p>
            </div>
          </div>
          <div className="lg:w-1/3 bg-gray-50 p-6 flex flex-col justify-between">
            <div>
              <div className="bg-green-500 text-white px-4 py-2 inline-block rounded-full mb-2">
                {property.type}
              </div>
              <div className="bg-violet-500 text-white px-4 py-2 inline-block rounded-full mb-4">
                {property.country}
              </div>
              <div className="text-4xl font-bold text-violet-600 mb-4">
                {property.price}
              </div>
              <div className="text-lg font-semibold mb-4 text-gray-800">معلومات الشقة</div>
              <p className="mb-2"><strong>المدينة:</strong> {property.country}</p>
              <p className="mb-2"><strong>المنطقة:</strong> {property.address}</p>
              {/* <p className="mb-2"><strong>الوكيل:</strong> {property.agent.name}</p> */}
              <p className="mb-2"><strong>عدد الغرف:</strong> {property.bedrooms}</p>
              <p className="mb-2"><strong>عدد الحمامات:</strong> {property.bathrooms}</p>
              <p className="mb-2"><strong>المساحة:</strong> {property.surface} متر مربع</p>
              <p className="mb-2"><strong>الوصف:</strong> {property.description}</p>
              <p className="mb-2"><strong>السعر:</strong> ${property.price} ({property.usd_equivalent} ليرة تركية)</p>
            </div>
            <button className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-violet-700 transition duration-300">
              تواصل مع الوكيل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
