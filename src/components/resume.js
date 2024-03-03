import { Spacer } from "@nextui-org/react";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="flex flex-row space-x-8 flex-grow py-8 mx-auto">
      <div className="flex flex-col space-y-16">
        <div className="flex flex-row flex-grow">
          <div className="text-2xl">Education</div>
          <div className="m-auto flex flex-col space-y-8">
            <div className="flex flex-row space-x-4 ">
              <Image
                src={"/assets/test.png"}
                className="w-24 h-24"
                width={150}
                height={150}
              />
              <div className="flex flex-col">
                <div>Name</div>
                <div>Time period</div>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <Image
                src={"/assets/test.png"}
                className="w-24 h-24"
                width={150}
                height={150}
              />
              <div className="flex flex-col">
                <div>Name</div>
                <div>Time period</div>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <Image
                src={"/assets/test.png"}
                className="w-24 h-24"
                width={150}
                height={150}
              />
              <div className="flex flex-col">
                <div>Name</div>
                <div>Time period</div>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <Image
                src={"/assets/test.png"}
                className="w-24 h-24"
                width={150}
                height={150}
              />
              <div className="flex flex-col">
                <div>Name</div>
                <div>Time period</div>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <Image
                src={"/assets/test.png"}
                className="w-24 h-24"
                width={150}
                height={150}
              />
              <div className="flex flex-col">
                <div>Name</div>
                <div>Time period</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-8 flex-grow">
          <div className="text-2xl">Experience</div>
          <div className="overflow-auto h-32">
            <div className="flex flex-row space-x-4">
              <Image
                src={"/assets/test.png"}
                className="w-24 h-24"
                width={150}
                height={150}
              />
              <div className="flex flex-col">
                <div>Name</div>
                <div className="italic">by line</div>
                <div>Time period</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
