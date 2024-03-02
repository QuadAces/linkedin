import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { Fragment } from "react";
export default function Footer({phoneNumber="Not Provided", email="Not Provided", contacts=[], copyRight={name: "John Doe"}}) {
//contacts will be an array
//copyright is an object with a name and image and year
const year = new Date().getFullYear()
return <footer>
<div style={{margin: "50px"}}>
    <Divider/>
    <ul style={{paddingTop: "10px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", justifyContent: "space-evenly", textAlign: "center", textDecoration: "none"}}>
    <li>
    <h4 style={{fontSize: "1.25rem", fontWeight: "bold"}}>Phone</h4>
    <p>{phoneNumber}</p>
    </li>
    <li>
    <h4 style={{fontSize: "1.25rem", fontWeight: "bold"}}>Email</h4>
    <p>{email}</p>
    </li>
    <li>
    <h4 style={{fontSize: "1.25rem", fontWeight: "bold"}}>Follow Me!</h4>
{contacts.map((e, index) => {
    <Fragment style={{display: "flex"}}>
    <img src={e.url}></img>
    <p>{e.text}</p>
    </Fragment>
})}
    </li>
    <li >
        <h4 style={{fontSize: "1.25rem", fontWeight: "bold"}}>
        ©{year} {copyRight.name}
        </h4>
        <h4>

            Powered by <Link href="./about-us"> <p style={{textDecoration: "underline"}}>My Personal Page
                </p> </Link>
        </h4>
    </li>


    </ul>
</div>
</footer>
}