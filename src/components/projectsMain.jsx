import React from 'react'
import { Link } from 'react-router-dom'

const projectsMain = () => {
    return (
        <div className='w-full min-h-[80vh] px-6 md:px-10'>
            <div className=' w-full h-[100%] flex flex-col gap-10 items-center'>
                <div>
                    <h1 className='montagu-slab text-3xl'>OUR PROJECTS</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='montagu-slab text-xl'>WHAT'S NEED</h2>
                    <p className='text-[#5e0000] lg:text-xl text-lg  montagu-slab brightness-200'>India is one of the fastest-growing economies in the world, yet there is a significant gender disparity in the country. Women and girls make up nearly half of the population, representing half of its potential, but face poor economic representation due to patriarchal practice of restricting the mobility of girls and women and keeping them home-bound. This limits their education, skills and opportunities in the labour market.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='montagu-slab text-xl'>OUR INITIATIVE: BAKE SALE FOR A CAUSE</h2>
                    <p className='montagu-slab lg:text-xl text-lg text-[#5e0000] brightness-200'>Join us in making a sweet difference! Our Bake Sale for Women Empowerment is more than just a treat — it's a step toward change. Every cookie, cake, and brownie sold supports our programs that uplift women through education, skill training, and health awareness.
                        By indulging in our homemade goodies, you're helping a woman take a step closer to independence, dignity, and opportunity.
                        Together, we can turn small bites into big impact.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='montagu-slab'>JOIN THE INITIATIVE</h1>
                    <Link to="/contact"><button className='montagu-slab px-3 py-2 bg-[#5e0000] cursor-pointer rounded-full hover:scale-102 brightness-200 mb-10 lg:mb-0'>VOLUNTEER NOW</button></Link>
                </div>
            </div>
        </div>
    )
}

export default projectsMain
