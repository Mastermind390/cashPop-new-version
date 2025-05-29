import { useState } from "react"

const FaqCard = ({title, answer}) => {
    const [displayOption, setDisplayOption] = useState('hidden')
    const [isOpened, setIsOpened] = useState(false)

    const openFaq = () => {
        if(!isOpened) {
            setDisplayOption("block")
            setIsOpened(true)
        } else {
            setDisplayOption("hidden")
            setIsOpened(false)
        }
    }

    
    return (
        <div>
        <div className="mb-3">
            <div className="flex items-center justify-between bg-white px-10 py-5" >
                <h1 className='font-bold'> {title} </h1>
                {isOpened ? (<span onClick={openFaq} className='text-xl font-bold cursor-pointer'>-</span>) : <span onClick={openFaq} className='text-xl font-bold cursor-pointer'>+</span>}
            </div>
            <div className={`bg-white px-7 py-5 ${displayOption} transition ease-in-out duration-500`} >
                {answer}
                {/* Creating an account is simple! Click on the "Sign Up" button on the top right of our homepage. Enter your email, create a password, and agree to our terms. Once you verify your email address, you're ready to start earning! */}
            </div>
        </div>
        </div>
    )
}

export default FaqCard
