import { FC } from "react";

interface IHead {
    size: 'large' | 'base' | 'small';
    type: 'token' | 'user';
    src: string;
}

const Head: FC<IHead> = ({ size, type, src }) => {
    const sizeClass = {
        large: "w-16 h-16",
        base: "w-[40px]",
        small: "w-[20px]",
    }[size];

    const roundedClass = type === 'token' ? 'rounded-full' : 'rounded-lg'; // token 为圆形，user 有圆角

    return (
        <div className={`inline-flex items-center justify-center ${sizeClass}`}>
            <img src={src} alt="head" className={`${sizeClass} ${roundedClass}`} />
        </div>
    );
};

export default Head;
