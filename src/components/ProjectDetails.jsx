import Identicons from 'react-identicons'
import { FaEthereum } from 'react-icons/fa'

const ProjectDetails = () => {
return (
    <div className="pt-24 mb-5 px-6 flex justify-center">
        <div className='flex justify-center flex-col md:w-2/3'>
            <div className='flex justify-start items-start
                sm:space-x-4 flex-wrap'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQli1IRc2DFJf05FmE_DVMoGQbJnFiMmTIygQ&usqp=CAU" alt='project title'
            className='rounded-xl h-64 w-full sm:w-1/3 object-cover' 
            />

            <div className='flex-1 sm:py-0 py-4'>
                <div className='flex flex-col justify-start flex-wrap'>
                    <h5 className='text-gray-900 text-sm font-medium mb-2'>Creating a Household Robot</h5>
                    <small className='text-gray-500'>3 days left</small>
                </div>

                <div className='flex justify-between items-center w-full pt-1'>
                    <div className='flex justify-start space-x-2'>
                            <Identicons className='rounded-full shadow-md' string='0x9e...13af' size={20}/>
                            <small className='text-gray-700'>0x9e...13af</small>
                            <small className='text-gray-500 font-bold'>{16} Backings</small>
                        </div>  
                    <div className='font-bold'>
                        <small className='text-gray-500'>Open</small>
                    </div>
                </div>
            </div>
            </div>
            <p className='text-sm font-light mt-2'>A web3 platform where people can launch and showcase their crowdfunding campaigns to raise 
                funds from a community of investors or donors who can discover and support projects they care about 
                and participate in the success of those projects. Technologies used: NextJs, Tailwind, NodeJs and Solidity.</p>
            <div className='w-full bg-gray-300'>
            <div className='bg-green-600 text-xs font-medium text-green-100 text-center p-0.5
            leading-none rounded-l-full' style={{width: '50%'}} ></div>
            </div>

            <div className='flex justify-center items-center font-bold'>
                <small>{3} ETH Raised</small>
                <small className='flex justify-start items-center'>
                    <FaEthereum />
                    <span>{10} ETH</span>
                </small>
            </div>

            <div className='flex justify-start items-center space-x-2 mt-4'>
                <button type='button' className='inline-block px-6 py-2.5 bg-green-600 text-white
                    font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700'>Back Project</button>
                <button type='button' className='inline-block px-6 py-2.5 bg-gray-600 text-white
                    font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-700'>Edit</button>
                <button type='button' className='inline-block px-6 py-2.5 bg-red-600 text-white
                    font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700'>Delete</button>
                <button type='button' className='inline-block px-6 py-2.5 bg-orange-600 text-white
                    font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700'>Payout</button>
            </div>

        </div>
    </div>
    )
}

export default ProjectDetails