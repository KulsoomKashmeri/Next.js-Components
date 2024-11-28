import Link from 'next/link'

function Header() {
  return (
    <div>
<ul className="bg-blue-600 flex justify-center gap-4 text-sm px-8 pt-10">
   <Link href="/"><li>Home</li></Link>
   <Link href="/about-us"><li>About</li></Link>
   <Link href="/career"><li>Career</li></Link>
   <Link href="/education"><li>Education</li></Link>
</ul>

    </div>
  );
}

export default Header;