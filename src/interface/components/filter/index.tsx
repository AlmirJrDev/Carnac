import { CircleX, Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



interface FilterProps {
  filters: {
    makes: string[];
    priceRange: { min: number | null; max: number | null };
    mileageRange: { min: number | null; max: number | null };
    fuelTypes: string[];
    transmission: string[];
    driveTypes: string[];
    yearRange: { min: number | null; max: number | null };
  };
  onMakeFilter: (make: string) => void;
  onPriceRange: (min: number | null, max: number | null) => void;
  onMileageRange: (min: number | null, max: number | null) => void;
  onFuelType: (fuelType: string) => void;
  onTransmission: (transmission: string) => void;
  onDriveType: (driveType: string) => void;
  onYearRange: (min: number | null, max: number | null) => void;
  onResetMakes: () => void;
  onResetPrice: () => void;
  onResetMileage: () => void;
  onResetFuel: () => void;
  onResetTransmission: () => void;
  onResetDrive: () => void;
  onResetYear: () => void;
}

export function Filter({
  filters,
  onMakeFilter,
  onPriceRange,
  onMileageRange,
  onFuelType,
  onTransmission,
  onDriveType,
  onYearRange,
  onResetMakes,
  onResetPrice,
  onResetMileage,
  onResetFuel,
  onResetTransmission,
  onResetDrive,
  onResetYear,
}: FilterProps) {
  
  return (
    <aside>
      <div className="bg-white rounded-lg w-60 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3>Make and model</h3>
          <button
            className="text-orange-500 font-medium text-sm"
            onClick={onResetMakes}
          >
            Reset
          </button>
        </div>
        
       <Dialog>
  <DialogTrigger className="bg-orange-500 w-full rounded-lg p-2 text-sm font-light text-white flex items-center justify-center gap-2"><Plus size={20}/>Add model</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Make and model</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <div className="flex justify-between gap-2">
    <Select>
  <SelectTrigger className="">
    <SelectValue placeholder="Make" />
  </SelectTrigger>
  <SelectContent>
  {filters.makes.map((make) => (
          <SelectItem value={make}
            key={make}
            className="flex items-center justify-between border border-black rounded-lg p-2 mb-1"
          >
            <img src="./src/assets/mercedes.svg" alt="" />
            <div className="flex flex-col justify-center">
              <h5 className="text-sm">{make}</h5>
              <span className="text-xs text-gray-500 font-light">
               {make}
              </span>
            </div>
            <CircleX
              className="bg-black rounded-full text-white size-4 cursor-pointer"
              onClick={() => onMakeFilter(make)}
            />
          </SelectItem>
        ))}
  
  </SelectContent>
</Select>

</div>

  </DialogContent>
</Dialog>

      </div>

      <div className="bg-white rounded-lg w-60 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3>Price</h3>
          <button
            className="text-orange-500 font-medium text-sm"
            onClick={onResetPrice}
          >
            Reset
          </button>
        </div>
        <div className="flex gap-1">
          <input
            placeholder="Min"
            className="w-full text-sm bg-gray-100 rounded-lg px-2 p-1"
            type="number"
            value={filters.priceRange.min || '100000'}
            onChange={(e) =>
              onPriceRange(
                e.target.value ? Number(e.target.value) : null,
                filters.priceRange.max
              )
            }
          />
          <input
            placeholder="Max"
            className="w-full text-sm bg-gray-100 rounded-lg px-2 p-1"
            type="number"
            value={filters.priceRange.max || '900000'}
            onChange={(e) =>
              onPriceRange(
                filters.priceRange.min,
                e.target.value ? Number(e.target.value) : null
              )
            }
          />
        </div>
      </div>

      {/* Similar pattern for other filter sections */}
      
      <div className="bg-white rounded-lg w-60 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3>Fuel</h3>
          <button
            className="text-orange-500 font-medium text-sm"
            onClick={onResetFuel}
          >
            Reset
          </button>
        </div>
        <div className="flex flex-wrap gap-1">
          {['Gasolina', 'Flex', 'Diesel', 'Hybrid'].map((fuel) => (
            <div
              key={fuel}
              className={`p-2 rounded-xl cursor-pointer ${
                filters.fuelTypes.includes(fuel)
                  ? 'border border-black'
                  : 'bg-gray-100'
              }`}
              onClick={() => onFuelType(fuel)}
            >
              {fuel}
            </div>
          ))}
        </div>
        

      </div>

            
      <div className="bg-white rounded-lg w-60 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3>Transmission</h3>
          <button
            className="text-orange-500 font-medium text-sm"
            onClick={onResetTransmission}
          >
            Reset
          </button>
        </div>
        <div className="flex flex-wrap gap-1">
          {['CVT', 'Automática', 'Manual'  ].map((transmission) => (
            <div
              key={transmission}
              className={`p-2 rounded-xl cursor-pointer ${
                filters.transmission.includes(transmission)
                  ? 'border border-black'
                  : 'bg-gray-100'
              }`}
              onClick={() => onTransmission(transmission)}
            >
              {transmission}
            </div>
          ))}
        </div>
        

      </div>

      <div className="bg-white rounded-lg w-60 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3>Drive</h3>
          <button
            className="text-orange-500 font-medium text-sm"
            onClick={onResetDrive}
          >
            Reset
          </button>
        </div>
        <div className="flex flex-wrap gap-1">
          {['Dianteira', '4x4', 'Traseira',].map((drive) => (
            <div
              key={drive}
              className={`p-2 rounded-xl cursor-pointer ${
                filters.driveTypes.includes(drive)
                  ? 'border border-black'
                  : 'bg-gray-100'
              }`}
              onClick={() => onDriveType(drive)}
            >
              {drive}
            </div>
          ))}
        </div>
        

      </div>

      <div className="bg-white rounded-lg w-60 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3>Mileage</h3>
          <button
            className="text-orange-500 font-medium text-sm"
            onClick={onResetMileage}
          >
            Reset
          </button>
        </div>
        <div className="flex gap-1">
          <input
            placeholder="Min"
            className="w-full text-sm bg-gray-100 rounded-lg px-2 p-1"
            type="number"
            
            value={filters.mileageRange.min || '10000'}
            onChange={(e) =>
              onMileageRange(
                e.target.value ? Number(e.target.value) : null,
                filters.mileageRange.max
              )
            }
          />
          <input
            placeholder="Max"
            className="w-full text-sm bg-gray-100 rounded-lg px-2 p-1"
            type="number"
            value={filters.mileageRange.max || '900000'}
            onChange={(e) =>
              onMileageRange(
                filters.mileageRange.min,
                e.target.value ? Number(e.target.value) : null
              )
            }
          />
        </div>

      </div>

      <div className="bg-white rounded-lg w-60 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3>Year</h3>
          <button
            className="text-orange-500 font-medium text-sm"
            onClick={onResetYear}
          >
            Reset
          </button>
        </div>
        <div className="flex gap-1">
          <input
            placeholder="Min"
            className="w-full text-sm bg-gray-100 rounded-lg px-2 p-1"
            type="number"
            value={filters.yearRange.min || '2020'}
            onChange={(e) =>
              onYearRange(
                e.target.value ? Number(e.target.value) : null,
                filters.yearRange.max
              )
            }
          />
          <input
            placeholder="Max"
            className="w-full text-sm bg-gray-100 rounded-lg px-2 p-1"
            type="number"
            value={filters.yearRange.max || '2024'}
            onChange={(e) =>
              onYearRange(
                filters.yearRange.min,
                e.target.value ? Number(e.target.value) : null
              )
            }
          />
        </div>
      </div>
    </aside>
  );
}