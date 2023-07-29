import Button from '@/components/Button/Button';
import { ICategory } from '@/config/type'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsJournalArrowUp } from 'react-icons/bs';

type Props = {
    data: ICategory;
}

const CatItemCard = ({ data }: Props) => {
    return (
        <div className="relative cursor-default">
            <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                <div className="shadow p-4 rounded-lg bg-white">

                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className="font-medium text-base md:text-lg text-gray-600 flex items-center gap-2.5">
                                <BsJournalArrowUp className='text-[22px] text-primary' /> {data.name}
                            </h2>
                        </div>

                        <Button
                            text={<div className='flex items-center gap-2'>Choose <AiOutlineArrowRight className='relative top-[1px]' /></div>}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CatItemCard