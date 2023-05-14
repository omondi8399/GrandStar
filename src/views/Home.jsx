import Hero from "../components/Hero"
import Projects from "../components/Projects"

const Home = () => {
  return (
    <>
    <Hero />
    <Projects />
    <div className="flex justify-center items-center my-5">
    <button type='button' className='inline-block px-6 py-2.5 bg-green-600 text-white
            font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700'>Load more</button>

    </div>
    </>
  )
}

export default Home