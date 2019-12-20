import React from 'react';
import Content from './Content';
import Googlepic from './pic/pic.jpg';
import Yahoopic from './pic/yahoo.jpg';

class FavoriteContent extends React.Component{


    render(){
        const favoriteList=[
            {
                Cname:"google",
                Curl:"https://www.google.co.jp/",
                Cimg:Googlepic,
            },
            {
                Cname:"Yahoo",
                Curl:"https://www.yahoo.co.jp/",
                Cimg:Yahoopic,
            },
            {
                Cname:"google",
                Curl:"https://www.google.co.jp/",
                Cimg:Googlepic,
            },
        ]




        return(
            <div>
                <p>お気に入り一覧</p>
                <div className="favoriteContents">
                    {favoriteList.map((favoriteItem)=>{
                        return(
                            <Content
                            Cname={favoriteItem.Cname}
                            Curl={favoriteItem.Curl}
                            Cimg={favoriteItem.Cimg}
                            />
                        )
                    }
                        )}
                </div>
                

            </div>



        );
    }
}

export default FavoriteContent;