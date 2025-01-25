import React from 'react';
import { FiArrowUp, FiArrowDown, FiHome } from 'react-icons/fi';

function ApartmentDetails({ property }) {
  const renderDuplexDetails = () => {
    if (property.apartment?.type !== 'duplex') return null;
    
    return (
      <div className="bg-white rounded-lg border border-[#F0EFF9] p-6 mb-8">
        <h2 className="text-xl font-semibold text-[#10103B] mb-4">Duplex Details</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FiArrowUp className="text-[#E9A159] w-5 h-5" />
            <span className="text-gray-600">
              Upstairs: {property.apartment.rooms.upstairs} rooms
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FiArrowDown className="text-[#E9A159] w-5 h-5" />
            <span className="text-gray-600">
              Downstairs: {property.apartment.rooms.downstairs} rooms
            </span>
          </div>
          {property.apartment.furnished && (
            <div className="flex items-center gap-3">
              <FiHome className="text-[#E9A159] w-5 h-5" />
              <span className="text-gray-600">Fully Furnished</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {renderDuplexDetails()}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <FiHome className="text-[#E9A159] w-5 h-5" />
          <span className="text-[#10103B] font-medium">
            {property.apartment?.type === 'duplex' ? 'Duplex' : 'Apartment'} Details
          </span>
        </div>
        {property.apartment?.type === 'duplex' ? (
          <div className="flex flex-col gap-2 ml-7">
            <div className="flex items-center gap-2">
              <FiArrowUp className="text-[#E9A159] w-4 h-4" />
              <span className="text-gray-600">Upstairs: {property.apartment.rooms.upstairs} rooms</span>
            </div>
            <div className="flex items-center gap-2">
              <FiArrowDown className="text-[#E9A159] w-4 h-4" />
              <span className="text-gray-600">Downstairs: {property.apartment.rooms.downstairs} rooms</span>
            </div>
          </div>
        ) : (
          <div className="ml-7">
            <span className="text-gray-600">Area: {property.apartmentArea}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default ApartmentDetails; 