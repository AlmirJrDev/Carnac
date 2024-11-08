
import { useState } from "react";
import { Filter } from "@/interface/components/filter";
import CardCars from "@/interface/components/cardCars";

// Define filter types
interface FilterState {
  makes: string[];
  priceRange: { min: number | null; max: number | null };
  mileageRange: { min: number | null; max: number | null };
  fuelTypes: string[];
  transmission: string[];
  driveTypes: string[];
  yearRange: { min: number | null; max: number | null };
}

export function Homepage() {
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    makes: [],
    priceRange: { min: null, max: null },
    mileageRange: { min: null, max: null },
    fuelTypes: [],
    transmission: [],
    driveTypes: [],
    yearRange: { min: null, max: null },
  });

  const handleSelect = (carType: string) => {
    setSelectedCar(selectedCar === carType ? null : carType);
  };

  // Filter handlers
  const handleMakeFilter = (make: string) => {
    setFilters(prev => {
      const makes = prev.makes.includes(make)
        ? prev.makes.filter(m => m !== make)
        : [...prev.makes, make];
      return { ...prev, makes };
    });
  };

  const handlePriceRange = (min: number | null, max: number | null) => {
    setFilters(prev => ({
      ...prev,
      priceRange: { min, max },
    }));
  };

  const handleMileageRange = (min: number | null, max: number | null) => {
    setFilters(prev => ({
      ...prev,
      mileageRange: { min, max },
    }));
  };

  const handleFuelType = (fuelType: string) => {
    setFilters(prev => {
      const fuelTypes = prev.fuelTypes.includes(fuelType)
        ? prev.fuelTypes.filter(f => f !== fuelType)
        : [...prev.fuelTypes, fuelType];
      return { ...prev, fuelTypes };
    });
  };

  const handleTransmission = (transmission: string) => {
    setFilters(prev => {
      const transmissions = prev.transmission.includes(transmission)
        ? prev.transmission.filter(t => t !== transmission)
        : [...prev.transmission, transmission];
      return { ...prev, transmission: transmissions };
    });
  };

  const handleDriveType = (driveType: string) => {
    setFilters(prev => {
      const driveTypes = prev.driveTypes.includes(driveType)
        ? prev.driveTypes.filter(d => d !== driveType)
        : [...prev.driveTypes, driveType];
      return { ...prev, driveTypes };
    });
  };

  const handleYearRange = (min: number | null, max: number | null) => {
    setFilters(prev => ({
      ...prev,
      yearRange: { min, max },
    }));
  };

  // Reset handlers
  const handleResetMakes = () => {
    setFilters(prev => ({ ...prev, makes: [] }));
  };

  const handleResetPrice = () => {
    setFilters(prev => ({ ...prev, priceRange: { min: null, max: null } }));
  };

  const handleResetMileage = () => {
    setFilters(prev => ({ ...prev, mileageRange: { min: null, max: null } }));
  };

  const handleResetFuel = () => {
    setFilters(prev => ({ ...prev, fuelTypes: [] }));
  };

  const handleResetTransmission = () => {
    setFilters(prev => ({ ...prev, transmission: [] }));
  };

  const handleResetDrive = () => {
    setFilters(prev => ({ ...prev, driveTypes: [] }));
  };

  const handleResetYear = () => {
    setFilters(prev => ({ ...prev, yearRange: { min: null, max: null } }));
  };

  return (
    <>
      

      <div className="px-8 py-4 bg-slate-100">
        <main>
          <section className="flex items-center justify-between mt-8 mb-12">
            <h2 className="text-7xl">Buy a car</h2>
            <section className="flex gap-4">
              {[
                { type: 'Sedan', src: './src/assets/sedan.svg' },
                { type: 'SUV', src: './src/assets/suv.svg' },
                { type: 'Hatchback', src: './src/assets/hatch.svg' },
                { type: 'Coupe', src: './src/assets/coupe.svg' },
                { type: 'Pickup', src: './src/assets/pickup.svg' },
              ].map((car) => (
                <div
                  key={car.type}
                  className={`flex flex-col bg-white items-center justify-center w-24 h-20 rounded-2xl cursor-pointer ${
                    selectedCar === car.type ? 'border border-black' : ''
                  }`}
                  onClick={() => handleSelect(car.type)}
                >
                  <img className="object-cover pb-2" src={car.src} alt={car.type} />
                  <span className="text-xs">{car.type}</span>
                </div>
              ))}
            </section>
          </section>

          <main className="flex">
            <Filter
            
              filters={filters}
              onMakeFilter={handleMakeFilter}
              onPriceRange={handlePriceRange}
              onMileageRange={handleMileageRange}
              onFuelType={handleFuelType}
              onTransmission={handleTransmission}
              onDriveType={handleDriveType}
              onYearRange={handleYearRange}
              onResetMakes={handleResetMakes}
              onResetPrice={handleResetPrice}
              onResetMileage={handleResetMileage}
              onResetFuel={handleResetFuel}
              onResetTransmission={handleResetTransmission}
              onResetDrive={handleResetDrive}
              onResetYear={handleResetYear}
            />
            <CardCars selectedCar={selectedCar} filters={filters} />
          </main>
        </main>
      </div>
    </>
  );
}