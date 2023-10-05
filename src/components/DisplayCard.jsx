import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"  ;
import Image from "next/image";

const DisplayCard = (props) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>{props.desc}</CardDescription>
        </CardHeader>
        <div className="relative w-auto h-48 m-2 rounded flex items-center justify-center ">
        <Image className="w-fit h-fit" src={`/assets/${props.img}`} fill='true' alt='img' priority></Image>  
        </div>
    </Card>

  )
}

export default DisplayCard