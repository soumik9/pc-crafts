import { ICategory } from '@/config/type'
import React from 'react'
import SectionTitle from '../Home/partials/SectionTitle';
import CatItemCard from './components/CatItemCard';
import Button from '@/components/Button/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '@/hooks/helpers';
import { clearPCBuild } from '@/redux/features/pcBuild/pcBuildSlice';
import { bdtSymbol } from '@/config/constants';

interface Props {
    categories: ICategory[];
}

const PCBuild = ({ categories }: Props) => {

    // global
    const dispatch = useAppDispatch();
    const buildItems = useAppSelector((state) => state.pcBuild);

    // handler
    const handleCompleteBuild = () => dispatch(clearPCBuild());

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
                            onClick={handleCompleteBuild}
                        />
                    </div>

                    <div className='flex justify-between mt-4'>
                        <p className='font-semibold'>Total items selected: <span className='text-primary-300 font-bold'>{buildItems.length}</span></p>
                        <p className='font-semibold'>Total: <span className='text-primary-300 font-bold'>
                            <span className='text-[24px]'> {bdtSymbol}</span>
                            {buildItems.reduce((acc, item) => acc + item.price, 0)}</span></p>
                    </div>

                    <div className="flex flex-col gap-y-5 mt-9">
                        {categories.map((item: ICategory, index: number) => <CatItemCard
                            key={`catItemCard${index}`}
                            data={item}
                            buildItems={buildItems}
                        />)}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PCBuild