import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { Fragment } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { UserOtherContacts } from "../types/user";

interface FooterProps {
  phoneNumber : string,
  email : string,
  other : UserOtherContacts[],
  copyright: string;
}

export default function Footer({
  phoneNumber = "0414694206",
  email = "BillGates@gmail.com",
  other = [],
  copyright =  "Bill Gates",
}: FooterProps) {
  //contacts will be an array
  //copyright is an object with a name and image and year
  const year = new Date().getFullYear();
  return (
    <Fragment>
      <Divider />
      <div className="flex flex-col space-y-2 mx-auto my-4 text-center">
        <div className="flex flex-row space-x-2">
          <div className="text-xl items-center text-center my-auto">
            Contacts
          </div>
          {
            <div
              className="flex flex-row space-x-4 items-center cursor-pointer hover:underline"
              onClick={() => navigator.clipboard.writeText(email)}
            >
              <MdEmail className=" w-10 h-10" />
              {email}
            </div>
          }
          {
            <div
              className="flex flex-row space-x-4 items-center cursor-pointer hover:underline"
              onClick={() => navigator.clipboard.writeText(phoneNumber)}
            >
              {" "}
              <MdPhone className=" w-10 h-10" /> {phoneNumber}{" "}
            </div>
          }
        </div>
        <div>
          ©{year} {copyright} Powered by{" "}
          <Link href="./about-us" className="underline">
            My Personal Page
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
