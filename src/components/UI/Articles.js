import { formatDate } from "@/src/Util/formatDate"
import { Avatar, CardBody, CardFooter, Card } from "@nextui-org/react"
import Link from "next/link"

export default function Articles({articles}) {
//articles have a title, link, published_date (day, month, year), author, image_url, title, 
//make it seem like blog posts?
    return <>
    
    {articles.map((e,index) => {

        return <Card>
            <CardBody>
                <Link href={e.link}>
                 <h2>{e.title}</h2></Link>
                 <Avatar src={e.image_url}></Avatar>


            </CardBody>
            <CardFooter>
                <p>{e.author} {formatDate(e.published_date)}</p>
            </CardFooter>
        </Card>
        return JSON.stringify(e)
    })}
    </>
}