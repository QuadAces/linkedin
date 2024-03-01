import { Fragment } from "react"

export default function Interests({interests}) {
if (!interests) {
    return null
}
    return <>
    {interests.map((e, index) => {
return<Fragment key={index}>

<p>{e}</p>
</Fragment>


    })}
    </>
}