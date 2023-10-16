import React from "react";
class Menu extends React.Component{
    render(){
        return(
            <div className=" bg-[#101112]">
                <ul className="w-11/12 mx-auto flex text-white text-lg font-medium py-3 gap-8">
                    <li>Special Deals</li>
                    <li>League of Legends</li>
                    <li>CS:GO</li>
                    <li>DOTA 2</li>
                    <li>Call of Duty</li>
                    <li>Pokemon</li>
                    <li>VALORANT</li>
                    <li>Gaming</li>
                    <li>Entertainment</li>
                    <li>FIFA</li>
                </ul>
            </div>
        )
    }
} 
export default Menu;