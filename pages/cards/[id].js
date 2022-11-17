import { useRouter } from "next/router";
import { BsBookmark } from "react-icons/bs";
import Map from '../../components/Map';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'red',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);
const CardDetails = ({card}) => {
  const {query} = useRouter();

  const defaultProps = {
    center: {
      lat: +card.location.lat,
      lng: +card.location.long,
    },
    zoom: 11
  };

  console.log(defaultProps)

  return (
    <div className="container bg-white mx-auto px-4 pt-6 pb-6 lg:pt-14 lg:pb-40">
      <div className="lg:flex lg:gap-x-8 xl:gap-x-[134px] max-w-[1257px] m-auto">
        <div>
          <div className="lg:border-b-2 lg:border-[#3A4562] lg:pb-2 lg:flex lg:items-center lg:justify-between">
            <div className="border-b-2 border-[#3A4562] lg:border-none">
              <h1 className="font-medium pb-3 lg:pb-0">Job Details</h1>
            </div>
            <div className="pt-6 pb-8 lg:p-0 leading-[1.44] text-darkGray flex lg:text-[18px] lg:leading-[1.33] tracking-[-0.5px]">
              <div className="pr-4 flex gap-x-2 items-center">
                <BsBookmark
                  className="hidden lg:inline"
                />
                Save to my list
              </div>
              <div>
                {card.name}
              </div>
            </div>
          </div>
        </div>
        {/* map section */}
        <div>
          <div className="w-full lg:w-[330px] xl:w-[402px]"> 
            <div className="h-46"> 
              <Map
                center={defaultProps.center}
                zoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={+card.location.lat} 
                  lng={+card.location.long} 
                  text={'point'} 
                />
              </Map>
            </div>
          </div>
        </div>
        {/* map section */}
      </div>
    </div>
  )
}

export default CardDetails;

export async function getServerSideProps({params}) {
  const res = await fetch(`https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`)
  const cards = await res.json()
  const card = cards.find(item=>item.id === params.id)
  return {
    props: {card},
  }
}