import { Card, CardBody } from "@nextui-org/react"
import { Fragment } from "react"

export default function Activities({activities}) {
    //activities have a title, link and activity_status
    //dont worry about link for now?
    return <>
    {activities.map(e => { 
        return <Fragment key={e.title}>
 <Card >
      <CardBody>
     <p>{e.title}</p>
      </CardBody>
    </Card>


        </Fragment>
    })}
    </>
}