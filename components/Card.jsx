import { BsBookmark, BsStarFill, BsGeoAlt } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';
import {starsGerenerator, dateMaker} from '../utils/index';

const Card = ({data,link}) => {
  const postDate = dateMaker(data);
  const src = link[1];
  const stars = starsGerenerator(5)
  
  return (
    <div className='mb-2'>
      <div className='border px-4 pt-3 pb-7 lg:py-6 rounded-lg bg-[#EFF0F5] lg:bg-white shadow-md'>
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
              <div className="flex justify-between font-light text-sm lg:hidden">
                <div className='flex items-center text-gray-400 pr-8'>
                  {
                    stars.map((item,index)=> <BsStarFill key={`${index}_star1`}/>)
                  }
                </div>
                <p className="font-light text=[14px] text-textGray">
                  Posted {postDate}
                </p>
              </div>
              <Link href={`/cards/${data?.id}`}>
                <h2 className='font-medium text-[#3A4562] lg:font-bold text-[18px] lg:text-[20px] pt-4 lg:pt-0 pb-1 lg:pb-2'>
                  {data?.title}
                </h2>
              </Link>
              <p className='text-base font-normal mb-1'>
                Department name • {data?.name} 
              </p>
              <p className='flex text-base font-normal row-auto items-center gap-x-1'>
                <BsGeoAlt/> {data?.address} 
              </p>
            </div>
          </div>
          <div className="hidden lg:flex shrink-0">
            <div className='flex items-center text-gray-400 pr-8'>
            {
              stars.map((item,index)=> <BsStarFill key={`${index}_star2`}/>)
            }
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