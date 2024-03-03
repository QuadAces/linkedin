import { Spacer } from "@nextui-org/react";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import Image from "next/image";

export default function Resume({ educations = [], experiences = [] }) {
    return (
        <div className="flex flex-row space-x-8 flex-grow py-8 mx-auto">
            <div className="flex flex-col space-y-16 ">
                <div className="flex flex-row flex-grow space-x-12">
                    <div className="text-2xl">Education</div>
                    <div className=" flex flex-col space-y-8">
                        {educations.map(({ URL, name, year_period }, index) => (
                            <div key={index} className="flex flex-row space-x-4">
                                <Image
                                    src={URL !== null ? URL : "/assets/image.png"}
                                    className="w-16 h-16"
                                    width={150}
                                    height={150}
                                />
                                <div className="flex flex-col">
                                    <div>{name}</div>
                                    <div className="italic">{year_period}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row space-x-8 flex-grow">
                    <div className="text-2xl">Experience</div>
                    <div className="overflow-auto h-32  space-y-8">
                        {experiences.map(({ URL, name, role, year_period }, index) => (
                            <div key={index} className="flex flex-row space-x-4">
                                <Image
                                    src={URL !== null ? URL : "/assets/image.png"}
                                    className="w-16 h-16"
                                    width={150}
                                    height={150}
                                />
                                <div className="flex flex-col">
                                    <div>
                                        {name} - {role}
                                    </div>
                                    <div className="italic">{year_period}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
