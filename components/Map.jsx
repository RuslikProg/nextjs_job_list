import GoogleMapReact from 'google-map-react';

export default function SimpleMap({center,zoom, children}){

  return (
    <div style={{ height: '14rem', width: '100%', borderRadius: '20px'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
}