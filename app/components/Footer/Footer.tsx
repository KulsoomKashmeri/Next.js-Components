import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-pink-500 flex justify-center gap-4 text-sm">
        <ul>
        <Link href="/"><li>Home</li></Link>
   <Link href="/about-us"><li>About</li></Link>
   <Link href="/career"><li>Career</li></Link>
   <Link href="/education"><li>Education</li></Link>
   <Link href="/terms"><li>Terms & Condition</li></Link>
   <Link href="Privacy and Policy"><li></li></Link>
        </ul>
    </div>
  )
}

export default Footer;