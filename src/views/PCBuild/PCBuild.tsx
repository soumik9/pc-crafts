import { ICategory } from '@/config/type'
import React from 'react'
import SectionTitle from '../Home/partials/SectionTitle';
import CatItemCard from './components/CatItemCard';

interface Props {
    categories: ICategory[];
}

const PCBuild = ({ categories }: Props) => {
    return (
        <div>
            <div className='my-[50px]'>
                <SectionTitle title='Choose Your PC Parts' />

                <div className="container mt-9">
                    <div className="flex flex-col gap-y-5 ">

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