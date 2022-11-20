import Card from '../components/Card';
import Pagination from '@etchteam/next-pagination';
import apiURL from '../constants/index';

export default function Home({cards}) {

  return (
    <div className='container mx-auto px-2 pt-2 pb-2 xl:px-0 lg:pt-7 lg:pb-16'>
      <div className='pb-4'>
          {
            cards.length ? cards?.map((item,i)=>
              <Card 
                data={item}
                key={i}
                link={item.pictures}
              />
            ) 
            : 
            <h1 className='font-boldy'>No Data</h1>
          }
      </div>
      <Pagination total={360}/>
    </div>
  )
};

export async function getStaticProps() {
  const res = await fetch(apiURL);
  const cards = await  res.json();

  return {
    props: {
      cards,
    },
  }
};