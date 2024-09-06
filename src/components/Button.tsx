interface IButton {
    content: string;
    href: string;
}

export function Button({content, href}: IButton) {
    return (
        <a 
            className="bg-primary-color rounded-3xl text-white h-fit p-4 w-fit 
                        no-underline shadow-md " 
            href={href}
        >
            {content}
        </a>
    )
}
