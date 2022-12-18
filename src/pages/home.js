import React, { useEffect } from "react";
import { Box, Button, Divider } from '@mui/material'
import HomeStyle from './home.module.css'
// import HomeResCSS from './home_responsive.module.css'

const resColor = (width) => {
    if (width > 1200 && width <= 1600) {
        return 'red'
    }
    else if (width <= 1200 && width >= 900) {
        return 'blue'
    }
    else {
        return 'black'
    }
}

const Home = () => {
    let width
    useEffect(() => {
        width = window.innerWidth
    }, [])
    useEffect(() => {
        console.log(resColor(width))
    }, [width])
    
    return (
        <div>
            <div style = {{height: '40px'}}>

            </div>
            <Divider fullWidth style = {{margin: '16px 0px'}}/>
            <div className = {HomeStyle.banner}>
            <Box className = {HomeStyle.box}>
                <div className={HomeStyle.innerbox}>
                    <div className={HomeStyle.textbox}></div>
                    <div className={HomeStyle.imgbox}>
                        <div>
                            <img 
                            src = 'https://education.lego.com/v3/assets/blt293eea581807678a/blt393b7ca2feefb0c1/60d2cd32ae0d50495b4f911f/LLS_ModDetail_04.png?auto=webp&format=png&width=1200&quality=90&fit=bounds'
                            className={HomeStyle.imginbox}></img>
                        </div>
                    </div>
                </div>
            </Box>
            </div>
            <div className={HomeStyle.posts}>
                <div className={HomeStyle.post}>
                    <h1> Ứng dụng LEGO® <br /> Education SPIKE™ </h1>
                    <Button variant = 'outlined' style = {{height: '32px'}}>
                        Trang web toàn cầu Tiếng Anh
                    </Button>
                    <div>
                    <img src = 'https://education.lego.com/v3/assets/blt293eea581807678a/bltf591d7884eeb37fd/61816145dfb1f576f886e49f/Find_distributor.png?auto=webp&format=png&width=1200&quality=90&fit=bounds'
                    style = {{width: '80%', height: '80%'}}/>
                    </div>
                </div>
                <div className={HomeStyle.post}>
                    <h1> Ứng dụng LEGO® <br /> Education SPIKE™ </h1>
                    <Button variant = 'outlined' style = {{height: '32px'}}>
                        Trang web toàn cầu Tiếng Anh
                    </Button>
                    <div>
                    <img src = 'https://education.lego.com/v3/assets/blt293eea581807678a/bltf591d7884eeb37fd/61816145dfb1f576f886e49f/Find_distributor.png?auto=webp&format=png&width=1200&quality=90&fit=bounds'
                    style = {{width: '80%', height: '80%'}}/>
                    </div>
                </div>
                <div className={HomeStyle.post}>
                    <h1> Ứng dụng LEGO® <br /> Education SPIKE™ </h1>
                    <Button variant = 'outlined' style = {{height: '32px'}}>
                        Trang web toàn cầu Tiếng Anh
                    </Button>
                    <div>
                    <img src = 'https://education.lego.com/v3/assets/blt293eea581807678a/bltf591d7884eeb37fd/61816145dfb1f576f886e49f/Find_distributor.png?auto=webp&format=png&width=1200&quality=90&fit=bounds'
                    style = {{width: '80%', height: '80%'}}/>
                    </div>
                </div>
                <div className={HomeStyle.post}>
                    <h1> Ứng dụng LEGO® <br /> Education SPIKE™ </h1>
                    <Button variant = 'outlined' style = {{height: '32px'}}>
                        Trang web toàn cầu Tiếng Anh
                    </Button>
                    <div>
                    <img src = 'https://education.lego.com/v3/assets/blt293eea581807678a/bltf591d7884eeb37fd/61816145dfb1f576f886e49f/Find_distributor.png?auto=webp&format=png&width=1200&quality=90&fit=bounds'
                    style = {{width: '80%', height: '80%'}}/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home