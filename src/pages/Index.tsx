import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Cloud, CloudRain, CloudSun, Wind, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Index = () => {
  const [cityName, setCityName] = useState("New York");
  const [cities, setCities] = useState([
    {
      id: "1",
      name: "New York",
      temperature: 30,
      condition: "Cloudy",
      metrics: {
        humidity: 65,
        cloudiness: 75,
        windspeed: 12,
        pressure: 1015,
        sunrise: "6:30 AM",
        sunset: "7:45 PM"
      }
    }
  ]);

  const handleAddCity = () => {
    if (cities.some(city => city.name.toLowerCase() === cityName.toLowerCase())) {
      toast.error("City already exists!");
      return;
    }
    
    const newCity = {
      id: Date.now().toString(),
      name: cityName,
      temperature: 30,
      condition: "Cloudy",
      metrics: {
        humidity: 65,
        cloudiness: 75,
        windspeed: 12,
        pressure: 1015,
        sunrise: "6:30 AM",
        sunset: "7:45 PM"
      }
    };
    
    setCities([...cities, newCity]);
    toast.success("City added successfully!");
  };

  const handleDeleteCity = (cityId: string) => {
    if (cities.length === 1) {
      toast.error("Cannot delete the last city!");
      return;
    }
    setCities(cities.filter(city => city.id !== cityId));
    toast.success("City removed successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-8">
      <div className="max-w-md mx-auto animate-fade-in">
        <div className="relative mb-6">
          <Input
            type="text"
            placeholder="Enter city name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            className="pr-12 h-12 text-lg"
          />
          <Button
            size="icon"
            className="absolute right-1 top-1 h-10 w-10"
            variant="ghost"
            onClick={handleAddCity}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <Tabs defaultValue={cities[0].id} className="w-full">
          <TabsList className="w-full mb-4 flex overflow-x-auto">
            {cities.map((city) => (
              <TabsTrigger key={city.id} value={city.id} className="flex-1">
                {city.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {cities.map((city) => (
            <TabsContent key={city.id} value={city.id}>
              <Card className="weather-card p-8 animate-slide-up relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2"
                  onClick={() => handleDeleteCity(city.id)}
                >
                  <X className="h-4 w-4" />
                </Button>

                <div className="text-center mb-8">
                  <h1 className="text-3xl font-semibold mb-2">{city.name}</h1>
                  <p className="text-gray-500">
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex justify-center mb-8">
                  <Cloud className="weather-icon h-24 w-24 text-gray-600" />
                </div>

                <div className="text-center mb-12">
                  <div className="text-6xl font-light mb-2">{city.temperature}°</div>
                  <div className="text-xl text-gray-600">{city.condition}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="col-span-2 sm:col-span-1 p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex space-x-3 items-center">
                      <CloudRain className="h-5 w-5 text-gray-500" />
                      <div className="text-sm">Today</div>
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex space-x-3 items-center">
                      <CloudSun className="h-5 w-5 text-gray-500" />
                      <div className="text-sm">Tomorrow</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Humidity", value: `${city.metrics.humidity}%` },
                    { label: "Cloudiness", value: `${city.metrics.cloudiness}%` },
                    { label: "Wind Speed", value: `${city.metrics.windspeed} km/h` },
                    { label: "Pressure", value: `${city.metrics.pressure} hPa` },
                  ].map((metric, index) => (
                    <div key={index} className="metric-circle w-full aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm text-gray-500">{metric.label}</div>
                        <div className="text-xl font-semibold">{metric.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between px-4">
                  <div className="text-sm text-gray-500">
                    <div>Sunrise</div>
                    <div className="font-semibold">{city.metrics.sunrise}</div>
                  </div>
                  <div className="h-1 flex-1 mx-4 bg-gray-200 rounded">
                    <div className="h-full w-1/3 bg-gray-400 rounded" />
                  </div>
                  <div className="text-sm text-gray-500">
                    <div>Sunset</div>
                    <div className="font-semibold">{city.metrics.sunset}</div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Index;