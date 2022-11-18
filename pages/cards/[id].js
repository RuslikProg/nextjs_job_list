import { BsBookmark, BsShareFill, BsGeoAltFill, BsStar } from "react-icons/bs";
import Map from '../../components/Map';
import {convertData} from '../../utils/index';
import Image from 'next/image';
import { useRouter } from 'next/router'

const AnyReactComponent = ({ text }) => (

  <div className="text-[#d1223f] text-3xl">
    <BsGeoAltFill/>
  </div>
);
const CardDetails = ({card}) => {
  const router = useRouter();
  let postDate = card?.updatedAt.substring(0,10).replace(/-/g,'/')

  const info = convertData(card.description, '\n')
  const benefitsList = convertData(info[4], '.')

  const defaultProps = {
    center: {
      lat: +card.location.lat,
      lng: +card.location.long,
    },
    zoom: 11
  };

  return (
    <div className="container bg-white mx-auto px-4 pt-6 pb-6 lg:pt-14 lg:pb-40">
      <div className="lg:flex lg:gap-x-8 xl:gap-x-[134px] max-w-[1257px] m-auto">
        <div>
          <div className="lg:border-b-2 lg:border-[#3a45624b] lg:pb-2 lg:flex lg:items-center lg:justify-between">
            <div className="border-b-2 border-[#3a45621c]  lg:border-none">
              <h1 className="sectionTitle pb-3 lg:pb-0">Job Details</h1>
            </div>
            <div className="pt-6 pb-8 lg:p-0 leading-[1.44] text-darkGray flex lg:text-[18px] lg:leading-[1.33] tracking-[-0.5px]">
              <div className="pr-4 flex gap-x-2 items-center">
                <BsBookmark
                  className="hidden lg:inline"
                />
                <BsStar
                  className="inline lg:hidden"
                />
                Save to my list
              </div>
              <div className="flex items-center gap-x-2">
                <BsShareFill/> Share
              </div>
            </div>
          </div>
          <div className="hidden lg:block pt-10 pb-8">
            <button className="w-[127px] h-[52px] bg-[#3A4562] text-white rounded-lg uppercase text-[12px] font-semibold">Apply now</button>
          </div>
          <main>
            <div className="lg:flex shrink-0 justify-between items-start lg:pb-2">
              <h2 className="font-bold text-[24px] leading-[1.25] tracking-[-0.75px] text-[#3A4562] pb-1 lg:max-w-[501px] lg:p-0">{card.title}</h2>
              <div className="flex items-center justify-between pb-3.5 lg:p-0">
                <p className="lg:hidden postCreatedAt">Posted {postDate}</p>
                <div className="flex flex-col items-end lg:items-start">
                  <p className="lg:hidden text-[18px] tracking-[-0.5625px] text-[#3A4562]">Brutto, per year</p>
                  <p className="font-bold text-[#3A4562] tracking-[-0.625px] text-[20px] leading-[1.25] pt-1 lg:pt-0 lg:pb-1">{card.salary}</p>
                  <p className="hidden lg:block roboto text-[#3A4562] tracking-[-0.5625px] text-[18px]">Brutto, per year</p>
                </div>
              </div>
            </div>
            <p className="hidden lg:block postCreatedAt pb-2"> Posted {postDate}</p>
            <div>
              <p className="pb-7 text-lg text-[#3A4562]">{info[0]}</p>
              <h4 className="pb-3 font-bold text-xl">Responsopilities:</h4>
              <p className="pb-7 text-lg text-[#3A4562]">{info[2]}</p>
              <h4 className="pb-3 font-bold text-xl">Benefits:</h4>
              <ul className="pl-4 lg:pl-4">
                {benefitsList.map(item=><li className=" text-lg text-[#3A4562]" key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="pt-9 pb-[135px] lg:pb-[86px] flex justify-center lg:justify-start">
              <button className="w-[127px] h-[52px] bg-[#3A4562] text-white rounded-lg uppercase text-[12px] font-semibold">Apply now</button>
            </div>
          </main>
          {/* ___________________________________________To do hidden images___________________________________  */}
          <div className="lg:hidden">
            <h3 className="sectionTitle border-b-2 border-[#3A4562] pb-3 mb-4">Attached images</h3>
            <div className="flex gap-2 lg:gap-3 justify-center lg:justify-start pb-[60px]">
              {card.pictures.map((item,index)=><Image className="w-2/6 lg:w-[200px] lg:h-[133px]  rounded-lg" alt="images" width={200}  loader={() => item}  height={133} key={index} src={item}/>)}
            </div>
          {/* ___________________________________________To do hidden images___________________________________ */}
          </div>
          {/* ___________________________________________Additional info___________________________________ */}
          <div>
            <h3 className="sectionTitle border-b-2 border-[#3a45624b] pb-3 mb-4">Additional info</h3>
            <p className="text-[18px] tracking-[-0.5625px] pb-4">Employment type</p>
            <div className="flex gap-2 pb-6">
              <div className="flex gap-4 flex-row">
                {card.employment_type.map(e=><div className="w-[122px] h-[52px] bg-[#e8e8f7] border border-[#718ace4b] flex items-center justify-center text-[#718ace] rounded-lg uppercase text-[14px] font-bold" key={e}>{e}</div>)}
              </div>
            </div>
            <p className="text-[18px] tracking-[-0.5625px] pb-4">Benefits</p>
            <div className="flex gap-2 pb-6">
              <div className="flex gap-4 flex-row pb-16">
                {card.benefits.map(e=><div className="h-[52px] w-[170px] md:w-[222px] bg-[#fff8d9] border border-yellow-300 flex flex-row items-center justify-center text-[#867d49] rounded-lg font-bold uppercase text-[14px] " key={e}>{e}</div>)}
              </div>
            </div>
          </div>
          {/* ___________________________________________Additional info___________________________________ */}
          {/* ___________________________________________Attached images___________________________________ */}
          <div className="hidden lg:block pb-94">
            <h3 className="sectionTitle border-b-2 border-[#3a45624b] pb-3 mb-4">Attached images</h3>
            <div className="flex gap-2 lg:gap-3 justify-center lg:justify-start pb-[60px]">
              {card.pictures.map((item,index)=><Image className="w-2/6 lg:w-[200px] lg:h-[133px] rounded-lg" alt="images" width={200}  loader={() => item}  height={133} key={index} src={item}/>)}
            </div>
          </div>
          {/* ___________________________________________Attached images___________________________________ */}
          <button onClick={()=>router.back()} className="w-[213px] h-[50px] bg-[#e8e8f7] border rounded-lg text-[#3A4562] text-[12px] font-semibold flex items-center justify-center">RETURN TO JOB BOARD</button>
        </div>
        {/* map section */}
        <div>
          <div className="w-full lg:w-[330px] xl:w-[402px]"> 
            <div className="bg-[#2A3047] border rounded-t-lg text-[#E8EBF3] py-8 h-[215px] w-full flex justify-center relative overflow-hidden">
              <div className="z-10">
                <p className="font-bold tracking-[0.23619px] leading-[1.18] text-[#E7EAF0] lg:text-[20px] pb-2 lg:pb-4">
                  {card.name}
                </p>
                <div className="flex ">
                  <p className='text-base font-normal flex row-auto items-center gap-x-1 text-[#E7EAF0]'>
                    <BsGeoAltFill/> {card?.address} 
                  </p>
                </div>
                <p className="text-[#E7EAF0] text-lg pb-2">{card.phone}</p>
                <p className="text-[#E7EAF0] text-lg pb-2">{card.email}</p>
              </div>
            </div>
            <div className="h-46"> 
              <Map
                center={defaultProps.center}
                zoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={+card.location.lat} 
                  lng={+card.location.long} 
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