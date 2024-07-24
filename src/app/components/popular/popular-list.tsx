
import Link from 'next/link';

import { ProductListResType, ProductResType } from '@/schemaValidations/product.schema';

import PopularItem from './popular-item';

export default function PopularList(props:ProductListResType ) {
  const {data} = props
  console.log("🚀 ~ PopularList ~ data:", data)

  

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[#05073C] text-2xl font-bold mb-11">
          Find Popular Tours22
        </h1>
        <Link href="" className="text-[#05073C] text-sm">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data && data.map((item) => {
           return <PopularItem key={item.id} data={item} />
          })
        }
      </div>
    </div>
  );
}
