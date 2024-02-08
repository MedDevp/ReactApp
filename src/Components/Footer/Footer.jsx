import React from "react"

const Sitemap =[
    {
        link : "Homepage",
        url : "#"
    },
    {
        link : "Pricing",
        url : "#"
    },
    {
        link : "Testimonials",
        url : "#"
    },
    {
        link : "Features",
        url : "#"
    },
]

const Resources =[
    {
        link : "Support",
        url : "#"
    },
    {
        link : "Contact",
        url : "#"
    },
    {
        link : "FAQ",
        url : "#"
    },
]

const Company =[
    {
        link : "About",
        url : "#"
    },
    {
        link : "Customers",
        url : "#"
    },
    {
        link : "Blog",
        url : "#"
    },
]

const Portfolio =[
    {
        link : "Sarah Andrews",
        url : "#"
    },
    {
        link : "Mathew Higgins",
        url : "#"
    },
    {
        link : "Janice Dave",
        url : "#"
    },
]

const Footer = ()=>{
    return(
        <>
            <div className="mt-32 bg-stone-50 pt-12">
                <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 pb-12">
                    <div className="mb-12 md:mb-0">
                        <h1 className="font-bold text-xl">Fiber</h1>
                        <p className="py-7">With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>
                        <p>Made with <span className="text-red-500">❤ </span>in the Netherlands</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 md:space-x-4">
                        <div className="space-y-4">
                            {/*Sitemap Colomn*/}
                            <h1 className="font-bold pb-4">Sitemap</h1>
                            {Sitemap.map((value,index) =>{
                                return <div key={index} className="">
                                            <a href={value.url}>{value.link}</a>
                                        </div>
                            })}
                        </div>
                        <div className="space-y-4">
                            {/*Resources Colomn*/}
                            <h1 className="font-bold pb-4">Resources</h1>
                            {Resources.map((value,index) =>{
                                return <div key={index} className="">
                                            <a href={value.url}>{value.link}</a>
                                        </div>
                            })}
                        </div>
                        <div className="space-y-4 mt-12 md:mt-0">
                            {/*Company Colomn*/}
                            <h1 className="font-bold pb-4">Company</h1>
                            {Company.map((value,index) =>{
                                return <div key={index} className="">
                                            <a href={value.url}>{value.link}</a>
                                        </div>
                            })}
                        </div>
                        <div className="space-y-4 mt-12 md:mt-0">
                            {/*Portfolio Colomn*/}
                            <h1 className="font-bold pb-4">Portfolio</h1>
                            {Portfolio.map((value,index) =>{
                                return <div key={index} className="">
                                            <a href={value.url}>{value.link}</a>
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="text-center py-4 bg-gray-800 text-white text-sm">
                    <div className="">
                        &copy; 2024 Med. Tous droits réservés.
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;