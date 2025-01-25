import React from 'react';
import { FiUser, FiUsers } from 'react-icons/fi';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';

function RoomDetails({ property }) {
  const getPreferenceIcon = () => {
    if (property.preference === 'male') {
      return <BsGenderMale className="text-[#007BFF] w-5 h-5" />;
    } else if (property.preference === 'female') {
      return <BsGenderFemale className="text-[#FF69B4] w-5 h-5" />;
    }
    return null;
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {property.roomType === 'individual' ? (
            <FiUser className="text-[#E9A159] w-5 h-5" />
          ) : (
            <FiUsers className="text-[#E9A159] w-5 h-5" />
          )}
          <span className="text-[#10103B] capitalize">{property.roomType} Room</span>
        </div>
      </div>
      {/* Apartment Type */}
      {property.apartment && (
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <svg 
                                  className="w-5 h-5 text-[#E9A159]" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                                  />
                                </svg>
                                <span className="text-[#10103B]">
                                  {property.apartment.type} Apartment
                                  {property.apartment.location && (
                                    <span className="text-gray-500 text-sm ml-1">
                                      • {property.apartment.location}
                                    </span>
                                  )}
                                </span>
                              </div>
                            </div>
                          )}
      {property.utilities && (
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <svg 
                                  className="w-5 h-5 text-[#E9A159]" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                  />
                                </svg>
                                <div className="flex flex-col">
                                  <span className="text-[#10103B] text-right" dir="rtl">
                                    {property.utilities.description}
                                  </span>
                                  <span className="text-gray-500 text-sm">
                                    {property.utilities.included ? 'Bills Included' : 'Bills Not Included'}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
      {/* Residency Permit */}
      {property.residencyPermit?.available && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#E9A159]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-[#10103B] text-right" dir="rtl">
              {property.residencyPermit.description}
            </span>
          </div>
        </div>
      )}
        {/* Occupancy Information */}
        {property.occupancy && (
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="relative">
                                  <FiUsers className="text-[#E9A159] w-5 h-5" />
                                  <span className="absolute -top-1 -right-1 bg-[#E9A159] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    {property.occupancy.available}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[#10103B] text-right" dir="rtl">
                                    {property.occupancy.description}
                                  </span>
                                  <span className="text-gray-500 text-sm">
                                    {property.occupancy.current}/{property.occupancy.total} Occupied
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
      {/* Preference */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getPreferenceIcon()}
          <span className="text-[#10103B] capitalize">
            {property.preference} Only
          </span>
        </div>
      </div>
    </>
  );
}

export default RoomDetails; 