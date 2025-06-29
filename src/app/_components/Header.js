import Image from "next/image";
import Menu from "@/app/_components/Menu";
import Link from "next/link";
import remarkBreaks from "remark-breaks";
import Markdown from "react-markdown";
import {fetchData} from "@/utils/fetchData";
export default async function Header() {
    const header = await fetchData('header');
    return (
        <header className="sticky top-0 z-50 bg-background uppercase text-sm pt-8 md:pt-20 w-full px-4 md:px-0 flex flex-col items-center">
            <div className="flex w-full max-w-[773px] justify-between flex-col md:flex-row">
                <Link href="/">
                <Image src={'/logo@2x.png'} alt={'Logo Meriem'} width={104} height={23}/>
                </Link>
                <Image src={'/topstreep.png'} alt={'Streep'} layout="responsive" width={652} height={23}/>
            </div>
            <div className="flex w-full max-w-[773px] justify-between leading-10 flex-col md:flex-row">
                <Menu />
                <address className="hidden sm:block leading-tight">
                    {header.map((item) => (
                        <Markdown key={item.id} remarkPlugins={[remarkBreaks]}>{item.contactInfo}</Markdown>
                    ))}
                </address>
            </div>
        </header>
    )
}