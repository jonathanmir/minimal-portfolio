import React from "react";
import Title from "./Title";
const Contact = () =>  {
    return (<>
    <div className="flex flex-col mt-10 mb-10 mx-auto">
        <div className="flex justify-center items-center">
        <form action="https://getform.io/f/a13bd39e-e7db-466f-bd64-bf9c8f71d207" method="POST" className="flex flex-col w-full md:w-7/12">
        <Title>Contato</Title>
            <input type="text" name="name" placeholder="Name" id="" className="p-2 bg-transparent border-2 rounded-md focus:outline-none"/>
            
            <input type="email" name="email" placeholder="Email" id="" className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"/>

            <textarea name="message" placeholder="Mensagem" id="" cols={10} rows={10} className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"></textarea>

            <button type="submit" className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white">Trabalhe comigo!</button>
        </form>
        </div>
        </div>
    </>
        )
}

export default Contact