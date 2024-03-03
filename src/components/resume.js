import { Spacer } from "@nextui-org/react";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="flex flex-row mx-16 space-x-8 flex-grow py-8 mx-auto">
      <div className="flex flex-col space-y-8">
        <div  style={{display: "flex", width: "100vw", flexDirection: "row",}}>

          <div style={{fontSize: '3rem', paddingLeft: "3rem"}} className="text-2xl" >Education</div>
              <div style={{position: "relative", margin: "auto"}}>
            <div className="flex flex-row space-x-4" style={{marginBottom: "4rem"}}>
              <Image
                src={"/assets/test.png"}
                className="w-24 h-24"
                width={150}
                height={150}
              />
              <div>

                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div>
                <div style={{fontWeight: "bold"}}>Comapny</div>
                <div style={{fontWeight: "bold"}}>Title</div>
                </div>

                <div style={{position: "relative", top: "10px"}}>Time period   </div>
                </div>
                <p>Job description or something?</p>
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
        <div className="flex flex-col space-y-8" style={{display: "flex", width: "100vw", flexDirection: "row"}}>
          <div style={{fontSize: '3rem'}} className="text-2xl">Experience</div>
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
