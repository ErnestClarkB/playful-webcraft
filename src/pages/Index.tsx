import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Cloud, CloudRain, CloudSun, Wind } from "lucide-react";

const Index = () => {
  const [cityName, setCityName] = useState("New York");
  const [temperature] = useState(30);
  const [condition] = useState("Cloudy");
  const [metrics] = useState({
    humidity: 65,
    cloudiness: 75,
    windspeed: 12,
    pressure: 1015,
  });

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
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <Card className="weather-card p-8 animate-slide-up">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold mb-2">{cityName}</h1>
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
            <div className="text-6xl font-light mb-2">{temperature}°</div>
            <div className="text-xl text-gray-600">{condition}</div>
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
            <div className="metric-circle">
              <div className="text-center">
                <div className="text-sm text-gray-500">Humidity</div>
                <div className="text-xl font-semibold">{metrics.humidity}%</div>
              </div>
            </div>
            <div className="metric-circle">
              <div className="text-center">
                <div className="text-sm text-gray-500">Cloudiness</div>
                <div className="text-xl font-semibold">{metrics.cloudiness}%</div>
              </div>
            </div>
            <div className="metric-circle">
              <div className="text-center">
                <div className="text-sm text-gray-500">Wind Speed</div>
                <div className="text-xl font-semibold">{metrics.windspeed} km/h</div>
              </div>
            </div>
            <div className="metric-circle">
              <div className="text-center">
                <div className="text-sm text-gray-500">Pressure</div>
                <div className="text-xl font-semibold">{metrics.pressure} hPa</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between px-4">
            <div className="text-sm text-gray-500">Sunrise</div>
            <div className="h-1 flex-1 mx-4 bg-gray-200 rounded">
              <div className="h-full w-1/3 bg-gray-400 rounded" />
            </div>
            <div className="text-sm text-gray-500">Sunset</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;