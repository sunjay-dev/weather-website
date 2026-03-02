import React from "react";

export default function loading() {
  return (
    <div className="p-6">
      <div className="flex items-start justify-between">
        <button className="w-10 h-10 flex items-center justify-center bg-gray-100/30 rounded-full shadow-lg animate-pulse">
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
        </button>
      </div>
      <div className="w-full mt-14">
        <div className="bg-red-100 border mb-4 border-red-400 text-red-700 px-4 py-3 rounded hidden" id="err">
          <strong className="font-bold">Error in fetching weather!</strong>
          <span className="block sm:inline"></span>
        </div>

        <div>
          <div className="text-center mb-10 animate-pulse">
            <div className="h-12 w-32 bg-gray-100/30 mx-auto rounded"></div>
            <div className="h-5 w-48 bg-gray-100/30 mx-auto rounded mt-2"></div>
          </div>
        </div>

        <div className="bg-gray-600/5 rounded-2xl flex justify-between items-center p-4 border border-white/10 shadow-lg">
          <div className="text-center animate-pulse">
            <p className="text-sm bg-gray-100/30 rounded w-12 h-4 mx-auto"></p>
            <div className="w-11 h-11 bg-gray-100/30 rounded-full mt-2 mx-auto"></div>
            <p className="text-sm mt-2 bg-gray-100/30 rounded w-16 h-4 mx-auto"></p>
            <p className="text-xs bg-gray-100/30 rounded w-12 h-3 mx-auto mt-1"></p>
          </div>
          <div className="text-center animate-pulse">
            <p className="text-sm bg-gray-100/30 rounded w-12 h-4 mx-auto"></p>
            <div className="w-11 h-11 bg-gray-100/30 rounded-full mt-2 mx-auto"></div>
            <p className="text-sm mt-2 bg-gray-100/30 rounded w-16 h-4 mx-auto"></p>
            <p className="text-xs bg-gray-100/30 rounded w-12 h-3 mx-auto mt-1"></p>
          </div>
          <div className="text-center animate-pulse">
            <p className="text-sm bg-gray-100/30 rounded w-12 h-4 mx-auto"></p>
            <div className="w-11 h-11 bg-gray-100/30 rounded-full mt-2 mx-auto"></div>
            <p className="text-sm mt-2 bg-gray-100/30 rounded w-16 h-4 mx-auto"></p>
            <p className="text-xs bg-gray-100/30 rounded w-12 h-3 mx-auto mt-1"></p>
          </div>
          <div className="text-center animate-pulse">
            <p className="text-sm bg-gray-100/30 rounded w-12 h-4 mx-auto"></p>
            <div className="w-11 h-11 bg-gray-100/30 rounded-full mt-2 mx-auto"></div>
            <p className="text-sm mt-2 bg-gray-100/30 rounded w-16 h-4 mx-auto"></p>
            <p className="text-xs bg-gray-100/30 rounded w-12 h-3 mx-auto mt-1"></p>
          </div>
        </div>

        <div className="bg-gray-600/5 rounded-2xl p-6 mt-4 border border-white/10 shadow-lg">
          <div className="flex items-center justify-between animate-pulse">
            <div className="h-6 w-36 bg-gray-100/30 rounded"></div>
            <div className="h-5 w-5 bg-gray-100/30 rounded-full"></div>
          </div>
          <div className="flex justify-between items-center mt-9 mb-6 animate-pulse">
            <div className="space-y-3">
              <div className="h-12 w-32 bg-gray-100/30 rounded"></div>
              <div className="h-4 w-20 bg-gray-100/30 rounded"></div>
              <div className="h-3 w-28 bg-gray-100/30 rounded"></div>
              <div className="h-3 w-24 bg-gray-100/30 rounded"></div>
            </div>
            <div className="h-28 w-28 bg-gray-100/30 rounded-full"></div>
          </div>
        </div>

        <div className="bg-gray-600/5 rounded-2xl p-4 mt-4 mb-8 border border-white/10 shadow-lg">
          <div className="flex justify-between items-center p-2 animate-pulse">
            <div className="w-10 h-6 bg-gray-100/30 rounded"></div>

            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100/30 rounded-full"></div>
              <div className="ml-2 w-16 h-5 bg-gray-100/30 rounded"></div>
            </div>

            <div className="flex flex-col items-end">
              <div className="w-16 h-6 bg-gray-100/30 rounded"></div>
              <div className="w-12 h-4 bg-gray-100/30 rounded mt-1"></div>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 animate-pulse">
            <div className="w-10 h-6 bg-gray-100/30 rounded"></div>

            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100/30 rounded-full"></div>
              <div className="ml-2 w-16 h-5 bg-gray-100/30 rounded"></div>
            </div>

            <div className="flex flex-col items-end">
              <div className="w-16 h-6 bg-gray-100/30 rounded"></div>
              <div className="w-12 h-4 bg-gray-100/30 rounded mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
