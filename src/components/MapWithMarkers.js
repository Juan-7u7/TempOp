import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapWithGoogleMaps = () => {
  const [userLocation, setUserLocation] = useState(null); // Ubicación del usuario
  const [places, setPlaces] = useState([]); // Lugares cercanos
  const [selectedPlace, setSelectedPlace] = useState(null); // Lugar seleccionado para mostrar en el InfoWindow

  const mapContainerStyle = {
    width: '100%',
    height: '500px',
  };

  const defaultCenter = { lat: 19.4326, lng: -99.1332 }; // Coordenadas por defecto (CDMX)

  useEffect(() => {
    // Obtener ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          fetchNearbyPlaces(latitude, longitude); // Buscar lugares cercanos
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error);
        }
      );
    }
  }, []);

  const fetchNearbyPlaces = async (lat, lng) => {
    try {
      // Usar la API de Google Places para obtener restaurantes y gasolineras cercanos
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));

      const request = {
        location: new window.google.maps.LatLng(lat, lng),
        radius: 1000, // Radio en metros
        types: ['restaurant', 'gas_station'], // Tipos de lugares a buscar
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const formattedPlaces = results.map((place) => ({
            id: place.place_id,
            name: place.name,
            position: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            },
            type: place.types.includes('restaurant') ? 'Restaurante' : 'Gasolinera',
          }));
          setPlaces(formattedPlaces);
        } else {
          console.error('Error al buscar lugares:', status);
        }
      });
    } catch (error) {
      console.error('Error al buscar lugares cercanos:', error);
    }
  };

  return (
    <LoadScript googleMapsApiKey="TU_CLAVE_DE_API"> {/* Sustituye TU_CLAVE_DE_API */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={userLocation || defaultCenter}
        zoom={14}
      >
        {/* Marcador del usuario */}
        {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            }}
          />
        )}

        {/* Marcadores de lugares cercanos */}
        {places.map((place) => (
          <Marker
            key={place.id}
            position={place.position}
            onClick={() => setSelectedPlace(place)} // Muestra información al hacer clic
          />
        ))}

        {/* InfoWindow para el lugar seleccionado */}
        {selectedPlace && (
          <InfoWindow
            position={selectedPlace.position}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div>
              <h3>{selectedPlace.name}</h3>
              <p>{selectedPlace.type}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithGoogleMaps;
