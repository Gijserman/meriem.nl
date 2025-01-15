import Image from "next/image";
import Menu from "@/app/_components/Menu";
import Link from "next/link";
export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white uppercase text-sm pt-8 md:pt-20 w-full px-8 md:px-0 flex flex-col items-center">
            <div className="flex w-full max-w-[773px] justify-between flex-col md:flex-row">
                <Link href="/">
                <Image src={'/logo@2x.png'} alt={'Logo Meriem'} width={104} height={23}/>
                </Link>
                <Image src={'/topstreep.png'} alt={'Streep'} layout="responsive" width={652} height={23}/>
            </div>
            <div className="flex w-full max-w-[773px] justify-between leading-10 flex-col md:flex-row">
                <Menu />
                <address>
                    Heb je vragen? Bel me op <strong>06 145 29 630</strong>
                </address>
            </div>
        </header>
    )
}