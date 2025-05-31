

export const DashboardCardNoNairaSign = ({icon, description, amount}) => {
  return (
    <>
        <div className="flex flex-row items-center bg-purple-100 p-4 mt-3">
            <div>
                {icon}
            </div>
            <div className='flex flex-col ml-3'>
                <span className=''>{description}</span> <br />
                <span className='font-black text-3xl text-blueish'>{amount}</span>
            </div>
        </div>
    </>
  )
}

export const DashboardCardWithNairaSign = ({icon, description, amount}) => {
  return (
    <>
        <div className="flex flex-row items-center bg-purple-100 p-4 mt-3">
            <div>
                {icon}
            </div>
            <div className='flex flex-col ml-3'>
                <span className=''>{description}</span> <br />
                <span className='font-black text-3xl text-blueish'>&#8358;{amount}</span>
            </div>
        </div>
    </>
  )
}

// export DashboardCard
