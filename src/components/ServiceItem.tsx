import { IServiceItem } from "../types/ServiceItem";

export function ServiceItem( { image, title, description }: IServiceItem ) {
    return (
        <div>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="">Learn More</a>
        </div>
    )
}
