const Card = ({description, context, number}) => {
  return (
    <>
      <div className="bg-white relative mt-8 p-8 lg:mr-8">
          <div className="bg-reddish absolute top-0  translate-x-1/2 text-white rounded-full right-full w-10 h-10 text-center ml-8 p-1">{number}
          </div>
          <div className="flex justify-center flex-col items-center">
              <h3 className="text-xl font-bold text-blueish text-center mb-4">{description}</h3>
              <p className="text-center">{context}</p>
          </div>
        </div>
    </>
  )
}

export default Card
