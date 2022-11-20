import GoogleMapReact from 'google-map-react';
import {BsGeoAltFill} from "react-icons/bs";

const AnyReactComponent = ({ text }) => (
  <div className="text-[#d1223f] text-3xl">
    <BsGeoAltFill/>
  </div>
);

export default function SimpleMap({center, zoom, children, lat, long}){

  return (
    <div style={{ height: '14rem', width: '100%', borderRadius: '20px'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key:""}}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {children 
        ? 
          children
        :  
          <AnyReactComponent
            lat={lat} 
            lng={long} 
          />
        }
      </GoogleMapReact>
    </div>
  );
}