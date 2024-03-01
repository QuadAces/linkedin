"use client"
import { Avatar, Card, CardBody, CardHeader, Chip, Divider, commonColors, semanticColors } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { UnifrakturCook } from "next/font/google";
import { motion } from "framer-motion"

export default function InfoWidget({date, title = null, subtitle, url, redirectURl }) {
//check about that date stuff
console.log("SUBTITLE", subtitle);

return<>
<motion.div  initial="hidden"
whileInView="visible"
variants={{visible: {opacity: 1, ease: "easeOut" }, hidden: {opacity: 0, }}}
    transition={{ duration: 2 }}>

<a href={redirectURl} target="_blank" style={{ display: "flex", justifyContent: "center", textDecoration: "none" }}> {/* Centering each component */}
  <Card 
    isPressable
    isBlurred
    fullWidth={true}
    
    style={{ padding: "0rem", margin: "1rem", width: "calc(100% - 4rem)", maxWidth: "800px", display: "flex", flexDirection: "column", backgroundColor: "grey" }} // Increased max width and applied flexbox for consistent styling
    >
    <CardBody style={{  padding: "1.5rem", borderRadius: "10px", flex: 1 }}> {/* Applied flex: 1 for content to take up remaining space */}
      <CardHeader className="flex gap-3 items-center"> {/* No need for justify-center */}
        <div style={{ flex: "none" }}> {/* Ensure the Avatar does not resize */}
          <Avatar
            color="primary"
            isBordered
            style={{ height: 120, width: 120 }} // Keep the logo in the same place and same size
            radius="sm"
            src={url}
            />
        </div>
        <div className="flex flex-col" style={{ flex: 1 }}> {/* Allow the text to take up remaining space */}
          <p className="text-2xl font-bold text-center" style={{ fontSize: "2rem", margin: "0" }}>{title}</p> {/* Centering title, increasing font size */}
          <p className="text-default-500 text-sm text-center" style={{ margin: "0" }}>{date}</p> {/* Centering date */}
        </div>
      </CardHeader>

      {(subtitle == null || subtitle == undefined || subtitle == "") ? null :
        <>
          <Divider />
          <CardBody>
            <p className="text-lg font-semibold text-center" style={{ fontSize: "2rem", margin: "0" }}>{subtitle}</p> {/* Centering subtitle, increasing font size */}
          </CardBody>
        </>
      }
    </CardBody>
  </Card>
</a>
      </motion.div>
</>





}

{/* <Avatar  radius="sm" 
isBordered
color="primary"
src={url}

/>
<p style={{padding: "0.4rem"}}> {title}</p>

{date ? <Chip>

{date}

</Chip> : null } */}