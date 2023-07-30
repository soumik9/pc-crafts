import { ICategory } from '@/config/type'
import React from 'react'
import SectionTitle from '../Home/partials/SectionTitle';
import CatItemCard from './components/CatItemCard';
import Button from '@/components/Button/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useAppSelector } from '@/hooks/helpers';

interface Props {
    categories: ICategory[];
}

const PCBuild = ({ categories }: Props) => {

    // global
    const buildItems = useAppSelector((state) => state.pcBuild);
    console.log(buildItems);

    return (
        <div>
            <div className='my-[50px]'>
                <SectionTitle title='Choose Your PC Parts' />

                <div className="container mt-9">

                    <div className='flex justify-between items-center'>
                        <p className='text-error text-[18px] font-medium '>
                            This button will be disabled unless the user adds at least 5-6 of the mentioned components
                        </p>

                        <Button
                            text={<div className='flex items-center gap-2'>Complete Build <AiOutlineArrowRight className='relative top-[1px]' /></div>}
                            disabled={buildItems.length < 6}
                            type='button'
                        />
                    </div>

                    <div className="flex flex-col gap-y-5 mt-9">
                        {categories.map((item: ICategory, index: number) => <CatItemCard
                            key={`catItemCard${index}`}
                            data={item}
                        />)}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PCBuild