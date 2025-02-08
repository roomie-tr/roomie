import React from 'react';
import { FiUser, FiUsers } from 'react-icons/fi';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { IoMaleFemale } from 'react-icons/io5';

function StudentHousingDetails({ property }) {
  if (property.type !== 'student_housing') return null;
  
  return (
    <div className="bg-white rounded-lg border border-[#F0EFF9] p-6 mb-8">
      <h2 className="text-xl font-semibold text-[#10103B] mb-4">Student Housing Details</h2>
      <div className="space-y-4">
        {/* Room Types and Prices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {property.rooms.single?.available && (
            <div className="bg-white rounded-lg p-4 border border-[#E9A159]">
              <div className="flex items-center gap-2 mb-2">
                <FiUser className="text-[#E9A159] w-5 h-5" />
                <span className="text-[#10103B] font-medium">Single Room</span>
              </div>
              <div className="text-[#E9A159] font-medium">{property.rooms.single.price}₺</div>
            </div>
          )}
          {property.rooms.double?.available && (
            <div className="bg-white rounded-lg p-4 border border-[#E9A159]">
              <div className="flex items-center gap-2 mb-2">
                <FiUsers className="text-[#E9A159] w-5 h-5" />
                <span className="text-[#10103B] font-medium">Double Room</span>
              </div>
              <div className="text-[#E9A159] font-medium">{property.rooms.double.price}₺</div>
            </div>
          )}
          {property.rooms.triple?.available && (
            <div className="bg-white rounded-lg p-4 border border-[#E9A159]">
              <div className="flex items-center gap-2 mb-2">
                <FiUsers className="text-[#E9A159] w-5 h-5" />
                <span className="text-[#10103B] font-medium">Triple Room</span>
              </div>
              <div className="text-[#E9A159] font-medium">{property.rooms.triple.price}₺</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentHousingDetails; 