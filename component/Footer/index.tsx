import Image from "next/image"

const Footer = () => {

    return (
        <div className="flex flex-col md:flex-row items-center px-5 md:px-20 py-6 bg-black justify-between gap-4 md:gap-0">
            <div className="flex gap-3 items-center">
                <Image src='/assets/icons/logo.png' alt="logo" height={40} width={40} />
                <div className="font-bold text-xl ">
                    septianscp
                </div>
            </div>
            <div className="font-semibold text-white text-base text-center md:text-right">
                @2026 septianscp. All rights reserved.
            </div>
        </div>
    )
}

export default Footer