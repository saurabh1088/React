import { ReactNode } from "react";

type HeaderWithImageProps = {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode
};

export default function HeaderWithImage(props: HeaderWithImageProps) {
    return (<header>
        <img src={props.image.src} alt={props.image.alt}/>
        {props.children}
    </header>
    );
}