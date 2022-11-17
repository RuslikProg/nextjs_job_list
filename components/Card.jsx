import { BsBookmark, BsStarFill, BsGeoAlt } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';


const Card = ({data,link}) => {
  let postDate = data?.updatedAt.substring(0,10).replace(/-/g,'/')

  const src = link[1];

  return (
    <div className='mb-2'>
      <div className='border px-4 pt-3 pb-7 lg:py-6 rounded-lg bg-jobCard_bg_color_mob bg-white cardShadow'>
        <div className="lg:flex lg:justify-between">
          <div className="flex">
              <div>
              <Image
                width='66'
                height='66'
                src={src} 
                loader={() => src} 
                alt="title" 
                className='w-[66px] h-[66px] lg:w-[85px] lg:h-[85px] rounded-full mr-5 mt-10 lg:mt-0 lg:mr-[26px]'
              />
              </div>

            <div className='w-full'>
              {/* hidden div */}
              <div className="flex justify-between font-light text-sm lg:hidden">
                <div className='flex items-center text-gray-400 pr-8'>
                  <BsStarFill/>
                  <BsStarFill/>
                  <BsStarFill/>
                  <BsStarFill/>
                  <BsStarFill/>
                </div>
                <p className="font-light text=[14px] text-textGray">
                  Posted 2 days ago
                </p>
              </div>
              <Link href={`/cards/${data?.id}`}>
                <h2 className='font-medium tracking-[-0.560px] text-[18px] lg:text-[20px] pt-4 lg:pt-0 pb-1 lg:pb-2'>
                  {data?.title}
                </h2>
              </Link>
              <p className='text-base font-normal mb-1'>
                Department name • {data?.name} 
              </p>
              <p className='text-base font-normal flex row-auto items-center gap-x-1'>
                <BsGeoAlt/> {data?.address} 
              </p>
            </div>
          </div>
          <div className="hidden lg:flex shrink-0">
            <div className='flex items-center text-gray-400 pr-8'>
              <BsStarFill/>
              <BsStarFill/>
              <BsStarFill/>
              <BsStarFill/>
              <BsStarFill/>
            </div>
            <div className='flex flex-col justify-between items-end'>
                <p className='hover:text-sky-900 hidden md:block lx:block 2xl:block '>
                  <BsBookmark/>
                </p>
                <p>
                  Posted {postDate}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;