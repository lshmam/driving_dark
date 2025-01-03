import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-black">
        <div className="flex justify-between w-full">
          <div className="flex justify-start">
            <p className="text-xs text-white">
              © 2025 EasyWay Driving Academy.
            </p>
          </div>
          <div className="flex justify-end items-center">
            <p className="text-xs text-gray-200 flex items-center">
              Made with <Heart className="h-4 w-4 m-1" /> by{" "}
              <a
                href="https://youwiniwin.ca/"
                className="text-blue-500 hover:underline m-1"
              >
                faeth.studio
              </a>
            </p>
          </div>
        </div>
      </footer>
  )
}

