import { useState, useRef, useEffect } from 'react'
import { FiChevronDown, FiDollarSign, FiUsers, FiUser, FiHome, FiArrowUp } from 'react-icons/fi'
import Slider from '@mui/material/Slider'
import '../styles/animations.css'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs'

function Search({ onSearch }) {
  const [activeTab, setActiveTab] = useState('room')
  const [location, setLocation] = useState('')
  const [apartmentArea, setApartmentArea] = useState('')
  const [roomType, setRoomType] = useState('')
  const [preference, setPreference] = useState('')
  const [showPriceSlider, setShowPriceSlider] = useState(false)
  const [showRoomType, setShowRoomType] = useState(false)
  const [showPreference, setShowPreference] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [locations] = useState({
    room: [
      'Üsküdar, Istanbul',
      'Şişli, Istanbul',
      'Avcılar, Istanbul',
      'Beşiktaş, Istanbul',
      'Davutpaşa, Istanbul',
      'Kâğıthane, Istanbul',
      'Alibeyköy, Istanbul',
      'Çekmeköy, Istanbul',
      'Fatih, Istanbul',
      'Esenyurt, Istanbul',
      'Mecidiyeköy, Istanbul',
      'Yenibosna, Istanbul',
      'Bostancı, Kadıköy, Istanbul',
      'Maslak, Istanbul'
    ],
    apartment: [
      'Yeşilpınar, Istanbul',
      'Şişli, Istanbul'
    ],
    student_housing: [
      'Avcılar, Istanbul'
    ]
  })
  const preferences = ['male', 'female']
  const apartmentAreas = ['1+1', '2+1', '3+1', '4+1', "duplex"]

  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Room type options
  const roomTypes = ['individual', 'shared']

  const handleDropdownClick = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const handleLocationSelect = (loc) => {
    setLocation(loc)
    setActiveDropdown(null)
    onSearch({
      activeTab,
      location: loc,
      roomType,
      preference,
      apartmentArea
    })
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setLocation('')
    setRoomType('')
    setPreference('')
    setApartmentArea('')
    
    onSearch({
      activeTab: tab,
      location: '',
      roomType: '',
      preference: '',
      apartmentArea: ''
    })
  }

  const handleRoomTypeSelect = (type) => {
    setRoomType(type)
    setActiveDropdown(null)
    onSearch({
      activeTab,
      location,
      roomType: type,
      preference,
      apartmentArea
    })
  }

  const handlePreferenceSelect = (pref) => {
    setPreference(pref)
    setActiveDropdown(null)
    onSearch({
      activeTab,
      location,
      roomType,
      preference: pref,
      apartmentArea
    })
  }

  const handleAreaSelect = (area) => {
    setApartmentArea(area)
    setActiveDropdown(null)
    onSearch({
      activeTab,
      location,
      roomType,
      preference,
      apartmentArea: area,
      isDuplex: area === 'duplex'
    })
  }

  const handleClearFilters = () => {
    setActiveTab('room')
    setLocation('')
    setApartmentArea('')
    setRoomType('')
    setPreference('')
    setActiveDropdown(null)
    
    onSearch({
      activeTab: 'room',
      location: '',
      roomType: '',
      preference: '',
      apartmentArea: ''
    })
  }

  const handleSearch = () => {
    onSearch({
      activeTab,
      location,
      roomType,
      preference
    })
  }

  const handleApartmentTypeSelect = (type) => {
    setApartmentArea(type)
    setActiveDropdown(null)
    onSearch({
      activeTab,
      location,
      roomType,
      preference,
      apartmentArea: type
    })
  }

  return (
    <div ref={searchRef} className="w-full max-w-[1000px] relative">
      {/* Light reflection effect */}
      <div className="absolute -top-10 left-0 w-full h-[160px] bg-gradient-to-b from-[#F5C992] to-transparent opacity-20 blur-[40px]" />
      
      {/* Shadow effect */}
      <div className="absolute -bottom-4 left-0 w-full h-[120px] bg-[#F5C992] opacity-20 blur-[40px]" />
      
      {/* Main container */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-lg">
        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-[#E0DEF7]">
          <div className="relative min-w-[120px] h-[56px]">
            <button 
              className={`absolute inset-0 flex items-center justify-center font-medium whitespace-nowrap ${activeTab === 'room' ? 'text-[#E9A159]' : 'text-[#10103B]'}`}
              onClick={() => handleTabChange('room')}
            >
              Rooms
            </button>
            {activeTab === 'room' && (
              <div className="absolute bottom-0 w-full h-[3px] bg-[#E9A159]" />
            )}
          </div>

          <div className="relative min-w-[120px] h-[56px]">
            <button 
              className={`absolute inset-0 flex items-center justify-center font-medium whitespace-nowrap ${activeTab === 'apartment' ? 'text-[#E9A159]' : 'text-[#10103B]'}`}
              onClick={() => handleTabChange('apartment')}
            >
              Apartments
            </button>
            {activeTab === 'apartment' && (
              <div className="absolute bottom-0 w-full h-[3px] bg-[#E9A159]" />
            )}
          </div>

          <div className="relative min-w-[120px] h-[56px]">
            <button 
              className={`absolute inset-0 flex items-center justify-center font-medium whitespace-nowrap ${activeTab === 'student_housing' ? 'text-[#E9A159]' : 'text-[#10103B]'}`}
              onClick={() => handleTabChange('student_housing')}
            >
              Student Housing
            </button>
            {activeTab === 'student_housing' && (
              <div className="absolute bottom-0 w-full h-[3px] bg-[#E9A159]" />
            )}
          </div>

          {/* Add Clear Filters button */}
          <div className="ml-auto self-center h-[56px] flex items-center pr-8">
            <button 
              onClick={handleClearFilters}
              className="text-[#E9A159] text-[11px] font-medium border-b border-[#E9A159]
                hover:text-[#d08236] hover:border-[#d08236] transition-colors duration-300 cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Search Fields */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center p-4 lg:p-8 gap-4 lg:gap-6">
          {/* Location Dropdown */}
          <div className="flex-1 min-w-0 relative">
            <p className="text-sm text-[#161629]/70">Location</p>
            <div 
              className="flex items-center justify-between mt-1 cursor-pointer gap-2"
              onClick={() => handleDropdownClick('location')}
            >
              <p className={`font-medium truncate ${location ? 'text-[#10103B]' : 'text-[#161629]/50'}`}>
                {location || "Select location"}
              </p>
              <FiChevronDown className={`text-[#10103B] w-4 h-4 flex-shrink-0 transition-transform duration-200 ${activeDropdown === 'location' ? 'rotate-180' : ''}`} />
            </div>
            
            {/* Location Dropdown Menu */}
            {activeDropdown === 'location' && (
              <div className="absolute top-full left-0 mt-2 bg-white p-2 rounded-lg shadow-lg z-50 w-[300px] dropdown-enter">
                {locations[activeTab].map((loc) => (
                  <div
                    key={loc}
                    className={`px-4 py-2 cursor-pointer hover:bg-[#F0EFF9] rounded-md ${
                      location === loc ? 'text-[#E9A159]' : 'text-[#10103B]'
                    }`}
                    onClick={() => handleLocationSelect(loc)}
                  >
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="hidden lg:block w-[1px] h-10 bg-[#E0DEF7]" />

          {activeTab === 'room' ? (
            <>
              {/* Room Type */}
              <div className="flex-1 min-w-0 relative">
                <p className="text-sm text-[#161629]/70">Room Type</p>
                <div 
                  className="flex items-center justify-between mt-1 cursor-pointer gap-2"
                  onClick={() => handleDropdownClick('roomType')}
                >
                  <div className="flex items-center gap-2">
                    {roomType ? (
                      <>
                        {roomType === 'individual' ? 
                          <FiUser className="text-[#E9A159] w-4 h-4" /> : 
                          <FiUsers className="text-[#F5C992] w-4 h-4" />
                        }
                        <p className="text-[#10103B] font-medium capitalize">{roomType}</p>
                      </>
                    ) : (
                      <p className="text-[#161629]/50 font-medium">Select room type</p>
                    )}
                  </div>
                  <FiChevronDown className={`text-[#10103B] w-4 h-4 flex-shrink-0 transition-transform duration-200 ${activeDropdown === 'roomType' ? 'rotate-180' : ''}`} />
                </div>

                {/* Room Type Dropdown */}
                {activeDropdown === 'roomType' && (
                  <div className="absolute top-full left-0 mt-2 bg-white p-2 rounded-lg shadow-lg z-50 w-[300px] dropdown-enter">
                    {roomTypes.map((type) => (
                      <div
                        key={type}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-[#F0EFF9] rounded-md ${
                          roomType === type ? 'text-[#E9A159]' : 'text-[#10103B]'
                        }`}
                        onClick={() => handleRoomTypeSelect(type)}
                      >
                        {type === 'individual' ? 
                          <FiUser className="text-[#E9A159] w-4 h-4" /> : 
                          <FiUsers className="text-[#F5C992] w-4 h-4" />
                        }
                        <span className="capitalize">{type}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="hidden lg:block w-[1px] h-10 bg-[#E0DEF7]" />

              {/* Preference */}
              <div className="flex-1 min-w-0 relative">
                <p className="text-sm text-[#161629]/70">Preference</p>
                <div 
                  className="flex items-center justify-between mt-1 cursor-pointer gap-2"
                  onClick={() => handleDropdownClick('preference')}
                >
                  <div className="flex items-center gap-2">
                    {preference && (
                      preference === 'male' ? 
                        <BsGenderMale className="text-[#007BFF] w-4 h-4" /> :
                        <BsGenderFemale className="text-[#FF69B4] w-4 h-4" />
                    )}
                    <p className={`font-medium capitalize ${preference ? 'text-[#10103B]' : 'text-[#161629]/50'}`}>
                      {preference || "Select preference"}
                    </p>
                  </div>
                  <FiChevronDown className={`text-[#10103B] w-4 h-4 flex-shrink-0 transition-transform duration-200 ${activeDropdown === 'preference' ? 'rotate-180' : ''}`} />
                </div>

                {/* Preference Dropdown */}
                {activeDropdown === 'preference' && (
                  <div className="absolute top-full left-0 mt-2 bg-white p-2 rounded-lg shadow-lg z-50 w-[300px] dropdown-enter">
                    {preferences.map((pref) => (
                      <div
                        key={pref}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-[#F0EFF9] rounded-md ${
                          preference === pref ? 'text-[#E9A159]' : 'text-[#10103B]'
                        }`}
                        onClick={() => handlePreferenceSelect(pref)}
                      >
                        {pref === 'male' ? (
                          <BsGenderMale className="text-[#007BFF] w-4 h-4" />
                        ) : (
                          <BsGenderFemale className="text-[#FF69B4] w-4 h-4" />
                        )}
                        <span className="capitalize">{pref}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : activeTab === 'apartment' ? (
            <>
              {/* Apartment Area */}
              <div className="flex-1 min-w-0 relative">
                <p className="text-sm text-[#161629]/70">Area</p>
                <div 
                  className="flex items-center justify-between mt-1 cursor-pointer gap-2"
                  onClick={() => handleDropdownClick('area')}
                >
                  <p className={`font-medium capitalize ${apartmentArea ? 'text-[#10103B]' : 'text-[#161629]/50'}`}>
                    {apartmentArea || "Select area"}
                  </p>
                  <FiChevronDown className={`text-[#10103B] w-4 h-4 flex-shrink-0 transition-transform duration-200 ${activeDropdown === 'area' ? 'rotate-180' : ''}`} />
                </div>

                {/* Area Dropdown */}
                {activeDropdown === 'area' && (
                  <div className="absolute top-full left-0 mt-2 bg-white p-2 rounded-lg shadow-lg z-50 w-[300px] dropdown-enter">
                    {apartmentAreas.map((area) => (
                      <div
                        key={area}
                        className={`px-4 py-2 cursor-pointer hover:bg-[#F0EFF9] rounded-md ${
                          apartmentArea === area ? 'text-[#E9A159]' : 'text-[#10103B]'
                        }`}
                        onClick={() => handleAreaSelect(area)}
                      >
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : activeTab === 'student_housing' ? (
            <></>
          ) : null}

          {/* Add back the Search Button */}
          <button 
            onClick={handleSearch}
            className="w-full lg:w-auto bg-[#E9A159] text-white px-8 py-4 rounded-lg whitespace-nowrap 
              hover:bg-[#d08236] transition-colors duration-300 cursor-pointer
              hover:shadow-md"
          >
            Search {
              activeTab === 'room' ? 'Rooms' : 
              activeTab === 'apartment' ? 'Apartments' : 
              'Student Housing'
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search