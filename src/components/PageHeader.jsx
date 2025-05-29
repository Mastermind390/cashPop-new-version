const PageHeader = ({title, description}) => {
  return (
     <div className="mt-20 p-10 text-center flex justify-center flex-col">
            <h1 className="text-3xl font-bold text-secondary lg:text-5xl">{title}</h1>
            <p className="text-lg text-center lg:text-xl mt-3">{description}</p>
        </div>
  )
}

export default PageHeader
