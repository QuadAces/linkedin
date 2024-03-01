import { formatDate, getFullDate } from "@/src/Util/formatDate"
import { format } from "@auth/mongodb-adapter"
import { Avatar, Button, Card, CardBody, Chip, Snippet } from "@nextui-org/react"
import { Fragment } from "react"
import InfoWidget from "./InfoWorkEdu"
import { concatenateStrings } from "@/src/Util/formatSubtitle"
import { isValid } from "@/src/Util/isValid"

export default function Educations({educations}) {
//each education has "starts at" and "ends at" for when the education started/ended -> each date has "day" "month" and "year" props
//each has field_of_study, degree_name, and school 
//!and has a logo_url
//and grade, and activities_and_societies
    return <>
    {educations.map((e,index) => { 
//format date here:
console.log(e);
const fullDate = getFullDate(e)
const subtitle = concatenateStrings(e.degree_name, e.field_of_study)

        return <InfoWidget date={fullDate} key={index} title={e.school} url={e.logo_url} subtitle={isValid(subtitle) ? subtitle : ""} redirectURl={e.school_linkedin_profile_url}>

        </InfoWidget>
    })}
    </>
}

