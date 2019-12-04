import React from 'react';
import MenuBlock from './MenuBlock';

class Menu extends React.Component{
    render(){

        const MenuList=[
            {
                menuName:'Gmail',
                menuUrl:'MyPage.com',
            },

            {
                menuName:'画像',
                menuUrl:'Setting.com',
            
            },
        ]
        
        return(
            <div>
                <div className="Menus">
                <header className="head">
                <div className="Menu3">
                <div className="Menu2">    
                    {MenuList.map((MenuItem)=>{
                        return(
                            <MenuBlock
                            Mname={MenuItem.menuName}
                            Murl={MenuItem.menuUrl}
                            /> 

                            
                            
                                        
                        )
                    }
                    )
                    }
                </div>
                </div>
                </header>
                </div>



            </div>

        )
    }
}

export default Menu;