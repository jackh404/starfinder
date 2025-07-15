import Link from "next/link";

export default function Navbar () {
  return (
    <div className="navbar bg-base-100 fixed z-50">
  <div className="flex-1">
    <Link href="/" className="btn btn-ghost normal-case text-xl">SARI</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Assignments</Link></li>
      <li><Link href="/news">News</Link></li>
      <li><Link href="/archives">Archives</Link></li>
    </ul>
  </div>
</div>
  )
}
