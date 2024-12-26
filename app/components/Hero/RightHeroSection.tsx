import Image from 'next/image';

const RightHeroSection = () => {
    return (
        <div className="main__view aos-init aos-animate">
            <div className="main__preview">
                <Image 
                    className="main__pic" 
                    src="/assets/images/main-pic-6.png" 
                    alt="Preview image 6"
                    width={500}
                    height={500}
                />
            </div>
            <div className="main__preview">
                <Image 
                    className="main__pic js-parallax" 
                    src="/assets/images/main-pic-1.png"
                    alt="Preview image 1"
                    width={156}
                    height={156}
                    style={{
                        willChange: "transform",
                        transform: "translate3d(0px, -10px, 0px)",
                        transition: "transform 0.5s cubic-bezier(0, 0, 0, 1)",
                        position: "relative",
                        top: "200px"
                    }}
                    data-scale="2.5"
                    data-orientation="up"
                />
            </div>
            <div className="main__preview">
                <Image 
                    className="main__pic js-parallax"
                    src="/assets/images/main-pic-2.png"
                    alt="Preview image 2" 
                    width={500}
                    height={500}
                    style={{
                        willChange: "transform",
                        transform: "translate3d(0px, 1px, 0px)",
                        transition: "transform 0.5s cubic-bezier(0, 0, 0, 1)"
                    }}
                    data-scale="1.5"
                    data-orientation="up"
                />
            </div>
            <div className="main__preview">
                <Image 
                    className="main__pic"
                    src="/assets/images/main-pic-3.png"
                    alt="Preview image 3"
                    width={500}
                    height={500}
                />
            </div>
            <div className="main__preview">
                <Image 
                    className="main__pic"
                    src="/assets/images/main-pic-4.png"
                    alt="Preview image 4"
                    width={500}
                    height={500}
                />
            </div>
            <div className="main__preview">
                <Image 
                    className="main__pic js-parallax"
                    src="/assets/images/main-pic-5.png"
                    alt="Preview image 5"
                    width={500}
                    height={500}
                    style={{
                        willChange: "transform",
                        transform: "translate3d(0px, 128px, 0px)",
                        transition: "transform 0.5s cubic-bezier(0, 0, 0, 1)"
                    }}
                    data-scale="4.5"
                    data-orientation="up"
                />
            </div>
            <div className="main__preview">
                <Image
                    className="main__pic js-parallax"
                    src="/assets/images/main-pic-7.png" 
                    alt="Preview image 7"
                    width={500}
                    height={500}
                    style={{
                        willChange: "transform",
                        transform: "translate3d(0px, -54px, 0px)",
                        transition: "transform 0.5s cubic-bezier(0, 0, 0, 1)"
                    }}
                    data-scale="1.5"
                    data-orientation="down"
                />
            </div>
        </div>)
}
export default RightHeroSection