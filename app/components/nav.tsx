import Link from "next/link";
import { menuItems } from "./nav-items";

function Nav() {
    return (
        <nav>
            <ul>
                {menuItems.map((elm) => (
                    <li key={elm.id}>
                        <Link href={elm.href}>{elm.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
