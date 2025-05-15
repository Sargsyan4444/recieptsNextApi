import Link from "next/link";
import { menuItems } from "./nav-items";

function Nav() {
    return (
        <nav>
            <ul className="flex gap-6 items-center">
                {menuItems.map((elm) => (
                    <li key={elm.id}>
                        <Link className="text-orange-400 text-[21px] font-bold" href={elm.href}>{elm.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
