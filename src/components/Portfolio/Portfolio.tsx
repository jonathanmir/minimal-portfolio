import React from "react";
import portfolioData from "./portfolioData";
import PortfolioItem from './PortfolioItem'
import Title from "../Title";
const Portfolio = () =>  {
    return (<>
    
    <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-4">
            {
                portfolioData.map((e)=> (
                    <PortfolioItem imgUrl={e.imgUrl} stack={e.stack} title={e.title} link={e.link}></PortfolioItem>
                ))
            }
         </div>
    </div>
    </>
        )
} 

export default Portfolio