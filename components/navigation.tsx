"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, LogIn, LogOut } from "lucide-react"
import { createClientSupabaseClient } from "@/lib/supabase-client" // Import client-side Supabase client
import { useRouter } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<any>(null) // State to hold user session
  const router = useRouter()
  const supabase = createClientSupabaseClient() // Initialize client here

  useEffect(() => {
    console.log("Navigation useEffect: Running...")

    // Initial check for session on component mount
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        console.log("Navigation useEffect: Initial session check. Session:", session)
        setUser(session?.user || null)
      })
      .catch((err) => {
        console.error("Navigation useEffect: Error getting initial session:", err)
      })

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Navigation useEffect: Auth state changed. Event:", _event, "Session:", session)
      setUser(session?.user || null)
    })

    // Cleanup listener on component unmount
    return () => {
      console.log("Navigation useEffect: Cleaning up auth listener.")
      authListener.unsubscribe()
    }
  }, [supabase]) // Dependency array includes supabase to re-run if client changes (though it's a singleton)

  const handleLogout = async () => {
    console.log("Logout button clicked.")
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error("Error during logout:", error.message)
    } else {
      console.log("Successfully logged out.")
      router.push("/") // Redirect to home page after logout
    }
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/techniques", label: "Techniques" },
    { href: "/projects", label: "Projects" },
    { href: "/business", label: "Business" },
    { href: "/about", label: "About Us" },
    { href: "/advertisement", label: "Join Us" },
  ]

  console.log("Navigation Render: Current user state:", user)

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/fmc-logo.png" alt="FMC Logo" width={40} height={40} className="rounded" />
            <span className="font-bold text-xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              FMC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            {!user ? (
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                <Link href="/login" className="flex items-center">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Link>
              </Button>
            ) : (
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            )}
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              <Link href="/about#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {!user ? (
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 mx-2">
                  <Link href="/login" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Link>
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handleLogout()
                    setIsOpen(false)
                  }}
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 mx-2"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              )}
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 mx-2">
                <Link href="/about#contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
