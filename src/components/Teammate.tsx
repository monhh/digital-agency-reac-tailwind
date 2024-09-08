import { ITeammate } from "../types/teanmate"

export function Teammate({image, name, area, slogan}: ITeammate) {
    return (
        <div className="bg-white shadow-md p-5">
            <img src={image} alt="" />
            <h3 className="text-[20px]">{name}</h3>
            <p className="text-[#aab0bc] uppercase">{area}</p>
            <p>{slogan}</p>
            {/* <div className="social-networks">
                <div className="social-item">
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </div>
            </div> */}
        </div>
    )
}