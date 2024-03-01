import { getFullDate } from "@/src/Util/formatDate"
import { format } from "@auth/mongodb-adapter"
import { Avatar, Card, Chip, CircularProgress } from "@nextui-org/react"
import Link from "next/link"
import InfoWidget from "./InfoWorkEdu"
import { concatenateStrings } from "@/src/Util/formatSubtitle"
import { isValid } from "@/src/Util/isValid"

export default async function Experiences({experiences}) {
//experiences contain a starts_at, ends_at (both have day, month, year props), company, company_linkedin_profile_url, title, description, location, logo_url

return <>




{experiences.map((e, index) => {
    
    const subtitle = concatenateStrings(e.description, e.location)
    const formattedDate = getFullDate(e)
    return <InfoWidget date={formattedDate} url={e.logo_url} title={e.company} redirectURl={e.company_linkedin_profile_url} subtitle={isValid(subtitle) ? subtitle : ""} >

    </InfoWidget>
    
    
//     <Card style={{marginTop: '2rem',padding: "0.5rem"}} key={index}>
// <Link href={e.company_linkedin_profile_url}>
// <h2>{e.company}</h2>
// </Link>
// <Avatar src={e.logo_url}></Avatar>
// <h2>{e.description}</h2>
// <h2>{e.location}</h2>

//         <Chip>

// {formattedDate}
//         </Chip>
//     </Card>
})}

</>

}