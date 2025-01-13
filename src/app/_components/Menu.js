import Link from "next/link";

export default function Menu() {
    return (
        <menu>
            <Link className="mr-2" href="/">begeleiding</Link>
            <Link className="mr-2" href="/wie-ben-ik">wie ben ik</Link>
            <Link className="mr-2" href="/contact">contact</Link>
        </menu>
    )
}