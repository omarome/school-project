import React from 'react'
import Image from 'material-ui-image';

export default function HomePage(){
    return(
        <div>
            <Image 
            src={require('../../media/home2.jpg')}
            imageStyle={
                {
                    height:'33%',
                    top:'0',
                    left:'0',
                    overflow:'hidden',
                    poisition:'relative',
                    width:'100%',
                }
            }
            />
        </div>
    )
}