import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

type Props = {}

const linkCls = 'block text-gray-800 hover:bg-primary-200 hover:text-white py-1 px-2'

const CategoriesDropdown = (props: Props) => {
    return (
        <div className="absolute top-8 right-0 bg-white py-2 shadow-lg w-[120px] rounded-md">
            {/* {categories.map((item: any) => <Link key={item._id} href="#" className={classNames(linkCls)}>Service 1</Link>)} */}
            <Link href="#" className={classNames(linkCls)}>Service 1</Link>
            <Link href="#" className={classNames(linkCls)}>Service 2</Link>
            <Link href="#" className={classNames(linkCls)}>Service 3</Link>
        </div>
    )
}

export default CategoriesDropdown