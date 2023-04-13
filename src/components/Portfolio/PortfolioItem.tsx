interface iProjectDetails {
    title: string;
    imgUrl: string;
    stack: string[];
    link: string;
}
const PortfolioItem = ({title, imgUrl, stack, link}: iProjectDetails) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" 
        className="border-2 dark:border-white border-stone-900 rounded-md overflow-hidden">
            <img src={imgUrl} alt="projectImg" className="w-full h-36 md:h-48 object-cover cursor-pointer"/>
            <div>
                <div className="w-full p-4">
                <h3 className="dark:text-white text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                    <p className="flex flex-wrap gap-2 flex-row items-center justify-start dark:text-white text-xs md:text-sm">{stack.map((item:string) => 
                    (<span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        {item}
                    </span>))}
                    </p>
                    </div>
                </div>
            </a>
       
    )
}

export default PortfolioItem