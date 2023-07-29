import { bdtSymbol, starCustomStyle } from '@/config/constants';
import { IProduct } from '@/config/type'
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react'
// @ts-ignore
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import Link from 'next/link';

type Props = {
    data: IProduct;
}

const ProductCard = ({ data }: Props) => {
    return (
        <div className="relative mx-auto w-full">
            <Link href={`/product/${data._id}`} className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                <div className="shadow p-4 rounded-lg bg-white">
                    <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                        <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full border-b-2 border-dashed">
                            <div className="absolute inset-0 bg-black opacity-10"></div>
                            <Image src={data.image} alt={data.name} layout='fill' />
                        </div>

                        <span className={classNames(
                            "absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10  text-sm font-medium text-white select-none",
                            data.status === 'In Stock' ? 'bg-success' : 'bg-error'
                        )}>
                            {data.status}
                        </span>
                    </div>

                    <div className="mt-4">
                        <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title={data.name}>
                            {data.name}
                        </h2>
                        <p className="mt-2 text-sm text-gray-800 line-clamp-1" title={data.category}>
                            {data.category}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 mt-8">

                        <div className="flex items-center gap-1">
                            <Rating style={{ maxWidth: 250 }} value={data.averageRating} readOnly={true} itemStyles={starCustomStyle} />
                            <p className=" text-gray-800">{data.averageRating}</p>
                        </div>

                        <div className="flex justify-end items-center">
                            <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl text-lg">
                                <span className='text-[28px]'>{bdtSymbol}</span>
                                <span className="">{data.price}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard