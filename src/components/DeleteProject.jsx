import { FaTimes } from "react-icons/fa"
import { setGlobalState, useGlobalState } from "../store"

const DeleteProject = () => {
    const [deleteModal] = useGlobalState('deleteModal')
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black
    bg-opacity-50 transform transition-tranform duration-300 ${deleteModal}`}>
        <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <form className="flex flex-col">
                <div className="flex justify-between items-center">
                    <p className="font-semibold">Project Title</p>
                    <button type="button" className="border-0 bg-transparent focus:outline-none"
                    onClick={() => setGlobalState('deleteModal', 'scale-0')}>
                        <FaTimes />
                    </button>
                </div>

                <div className="flex justify-center items-center mt-5">
                    <div className="rounded-xl overflow-hidden h-20 w-20">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQli1IRc2DFJf05FmE_DVMoGQbJnFiMmTIygQ&usqp=CAU" alt='project title'
            className=' h-full w-full object-cover cursor-pointer' 
            />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center rounded-xl mt-5">
                    <p>Are you sure ? </p>
                    <small className="text-red-400">This is irreversible</small>
                </div>

                <button type='submit' className='mt-5 inline-block px-6 py-2.5 bg-red-600 text-white
                    font-medium text-md leading-tight rounded-full shadow-md hover:bg-red-700'>Delete Project</button>
            </form>
        </div>
    </div>
  )
}

export default DeleteProject