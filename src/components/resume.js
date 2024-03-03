import { Spacer } from "@nextui-org/react";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="flex flex-row space-x-8 flex-grow py-8 mx-auto">
      <div className="flex flex-col space-y-16 ">
        <div className="flex flex-row flex-grow space-x-12">
          <div className="text-2xl">Education</div>
          <div className=" flex flex-col space-y-8">
            <div className="flex flex-row space-x-4">
              <Image
                src={"https://media.licdn.com/dms/image/C4E0BAQF5t62bcL0e9g/company-logo_100_100/0/1631318058235?e=1717632000&v=beta&t=FElWdgTUNUObUK_nHgn1jptqPkaCLxAKSPLQMaJDjaM"}
                className="w-16 h-16"
                width={150}
                height={150}
              />
              <div className="flex flex-col">
                <div>Havard University</div>
                <div className="italic">1973 - 1975</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-8 flex-grow">
          <div className="text-2xl">Experience</div>
          <div className="overflow-auto h-32  space-y-8">
            <div className="flex flex-row space-x-4 ">
              <Image
                src={
                  "https://media.licdn.com/dms/image/C4E0BAQE7Na_mKQhIJg/company-logo_100_100/0/1633731811337/bill__melinda_gates_foundation_logo?e=1717632000&v=beta&t=dqTE2_luAEsdt7uT5ySHnegsBeQqQ0GnedXQD8l3_T8"
                }
                className="w-16 h-16"
                width={150}
                height={150}
              />
              <div className="flex flex-col">
                <div>Bill & Melinda Gates Foundation - Co-chair</div>
                <div>2000 - Present · 24 yrs 3 mos</div>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <Image
                src={
                  "https://media.licdn.com/dms/image/C4D0BAQGwD9vNu044FA/company-logo_100_100/0/1630531940051/breakthrough_energy_ventures_logo?e=1717632000&v=beta&t=bsg1P_PI7unMoXFUDv5cnMeshSukrgnHAWNiVIgKDkw"
                }
                className="w-16 h-16"
                width={150}
                height={150}
              />
              <div className="flex flex-col">
                <div>Breakthrough Energy - Founder</div>
                <div>2015 - Present · 9 yrs 3 mos</div>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <Image
                src={
                  "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1630652622688/microsoft_logo?e=1717632000&v=beta&t=rXcK6PYi_Ps1hk7lU2eWqGTSGHAyApj0GeneKCL48xE"
                }
                className="w-16 h-16"
                width={150}
                height={150}
              />
              <div className="flex flex-col">
                <div>Microsoft - Co-founder</div>
                <div>1975 - Present · 49 yrs 3 mos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
