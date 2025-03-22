import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prinsi Pujara. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-2 sm:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-primary" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

