import Image from "next/image";
import { MdMessage, MdPhone } from "react-icons/md";
import Resume from "./resume";
import { useContext } from "react";
import { Context } from "../lib/context";

export default function profile({
    name = "John Doe",
    imgsrc = "/assets/image.png",
    location = "Australia",
    about = "Sample Text",
    email = "1234",
    phone = "1234",
    byline = "",
    educations = [],
    experiences = [],
}) {
    return (
        <div className="flex flex-row mx-16 space-x-8 flex-grow">
            <div className="flex flex-col space-y-8">
                <Image
                    src={imgsrc !== null ? imgsrc : "/assets/image.png"}
                    className=" rounded !h-64 !w-64"
                    width={250} //used to satisfy param requirements but not actually used
                    height={250}
                />
            </div>

            <div className="flex flex-col flex-grow space-y-4">
                <div className="text-6xl pb-4 border-b-1">{name}</div>
                <div className="text-4xl pb-4">{byline !== null ? byline : ""} - {location !== null ? about : ""}</div>
                <div className="flex flex-col space-y-4">
                    <div className="text-lg mt-8 text-wrap">{about !== null ? about : ""}</div>
                </div>

                <Resume educations={educations} experiences={experiences} />
            </div>
        </div>
    );
}
