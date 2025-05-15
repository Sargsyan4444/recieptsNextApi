import Link from "next/link";
import Nav from "./nav";

function Header() {
    return <header className="w-full bg-[#f5f5f5]">
        <div className="mx-auto my-0 p-4 w-[1220px] flex justify-between items-center">
        <Link href="/"><img className="w-[100px] h-[100px] object-contain" src="/logo.png" alt="" /></Link>
        <Nav/>
        </div>
    </header>
}
export default Header