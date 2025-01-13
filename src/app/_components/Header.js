import Image from "next/image";
import Menu from "@/app/_components/Menu";
import Link from "next/link";
export default function Header() {
    return (
        <header className="uppercase text-sm">
            <div className="flex w-[773px] justify-between">
                <Link href="/">
                    <Image src={'/logo@2x.png'} alt={'Logo Meriem'} width={104} height={23}/>
                </Link>
                <Image src={'/topstreep.png'} alt={'Streep'} width={652} height={23}/>
            </div>
            <div className="flex w-[773px] justify-between leading-10">
                <Menu />
                <address>
                    Heb je vragen? Bel me op 06 145 29 630
                </address>
            </div>
        </header>
    )
}