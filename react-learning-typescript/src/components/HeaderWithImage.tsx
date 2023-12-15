import { ReactNode } from "react";

type HeaderWithImageProps = {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode
};

/* 
Here concept of {props.children} is used to create a generic header component.

In general the role of {props.children} is to create a generic template component that can be modified by the parent when 
it is invoked. Now as per example below when HeaderWithImage will be used, the parent can pass whatever it needs and the
passed content is rendered accordingly.

How the children is passed from parent?

Well when a component using {props.children} is used then instead of invoking it with a self-closing tag one needs to invoke
with a standard open/closing tag, within those tags one places the children component. For example :

<HeaderWithImage image={ {src: reactLogo, alt: "A logo for header"} }>
    <h1>Header with image</h1>
</HeaderWithImage>


*/
export default function HeaderWithImage(props: HeaderWithImageProps) {
    return (<header>
        <img src={props.image.src} alt={props.image.alt}/>
        {props.children}
    </header>
    );
}