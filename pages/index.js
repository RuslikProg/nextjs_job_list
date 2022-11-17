import Card from '../components/Card';

export default function Home({cards}) {
  return (
    <div className='container mx-auto px-2 pt-2 pb-2 xl:px-0 lg:pt-7 lg:pb-16'>
      <div className='pb-4'>
          {
            cards?.map((item,i)=>{
              return <Card 
                        data={item}
                        key={i}
                        link={item.pictures}
                      />
            })
          }
      </div>
    </div>
  )
}


export async function getStaticProps() {

  const res = await fetch(`https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`);
  const cards = await  res.json();

  return {
    props: {
      cards,
    },
  }
}