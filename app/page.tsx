"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Database,
  Globe,
  Calendar,
  Building,
  Send,
  ChevronDown,
  Cloud,
  FileCode,
  Zap,
  Users,
  Target,
  BookOpen,
  Briefcase,
  Moon,
  Sun,
  AlertTriangle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [theme, setTheme] = useState("light")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Refs for project images scrolling effect
  const projectCardsRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Parallax effect for project cards
      projectCardsRefs.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

          if (isVisible) {
            const scrollFactor = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
            const translateY = Math.max(0, Math.min(20, scrollFactor * 20))
            const scale = 1 + Math.min(0.05, scrollFactor * 0.05)
            card.style.transform = `translateY(${-translateY}px) scale(${scale})`
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Logo components for skills
  const PythonLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="#3776AB"
          d="M11.93,2C8.68,2,9.04,3.5,9.04,3.5l0.01,1.53h2.94v0.4H6.92c0,0-2.02-0.23-2.02,2.95c0,3.18,1.76,3.07,1.76,3.07h1.05v-1.48c0,0-0.06-1.76,1.73-1.76h2.97c0,0,1.67,0.03,1.67-1.61V4.28C14.09,4.28,14.38,2,11.93,2z M9.92,3.01 c0.29,0,0.53,0.24,0.53,0.53c0,0.29-0.24,0.53-0.53,0.53c-0.29,0-0.53-0.24-0.53-0.53C9.39,3.25,9.63,3.01,9.92,3.01z"
        />
        <path
          fill="#3776AB"
          d="M12.07,22c3.25,0,2.89-1.5,2.89-1.5l-0.01-1.53h-2.94v-0.4h5.07c0,0,2.02,0.23,2.02-2.95 c0-3.18-1.76-3.07-1.76-3.07h-1.05v1.48c0,0,0.06,1.76-1.73,1.76h-2.97c0,0-1.67-0.03-1.67,1.61v2.71 C9.91,19.72,9.62,22,12.07,22z M14.08,20.99c-0.29,0-0.53-0.24-0.53-0.53c0-0.29,0.24-0.53,0.53-0.53 c0.29,0,0.53,0.24,0.53,0.53C14.61,20.75,14.37,20.99,14.08,20.99z"
        />
      </svg>
    </div>
  )

  const JavaLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="#007396"
          d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"
        />
      </svg>
    </div>
  )

  const JavaScriptLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="#F7DF1E"
          d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
        />
      </svg>
    </div>
  )

  const CLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="#A8B9CC"
          d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"
        />
      </svg>
    </div>
  )

  const HTMLLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="#E34F26"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
        />
      </svg>
    </div>
  )

  const CSSLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="#1572B6"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"
        />
      </svg>
    </div>
  )

  const ReactLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="#61DAFB"
          d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zm12.675 7.305l-.133-.469a23.357 23.357 0 00-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 01-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 00-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 00-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 013.233-.501 24.847 24.847 0 012.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 002.421-2.968l.135-.193.234-.02a23.63 23.63 0 003.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 01-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 01-3.234.501 24.674 24.674 0 01-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 00-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 00-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0114.75 7.24zM7.206 22.677A2.38 2.38 0 016 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 002.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 01-2.052-2.545 24.976 24.976 0 01-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 01-1.35-2.122 30.354 30.354 0 01-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 011.166-2.228c.414-.749.885-1.446 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 015.033 0l.234.02.134.193a30.006 30.006 0 012.517 4.35l.101.213-.101.213a29.6 29.6 0 01-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 002.196-3.798 28.585 28.585 0 00-2.197-3.798 29.031 29.031 0 00-4.394 0 28.477 28.477 0 00-2.197 3.798 29.114 29.114 0 002.197 3.798z"
        />
      </svg>
    </div>
  )

  const NextJSLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill={theme === "light" ? "#000000" : "#FFFFFF"}
          d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0187 3.509 0 3.3802-.0093 3.5162-.0963 3.596-.0474.0424-.1124.0827-.1973.1231-.1124.0507-.1973.0694-.3248.0694h-.1973l-.1124-.0507c-.1317-.0694-.1691-.1231-.1691-.233l.001-10.3102.0093-.0955c.0245-.2274.1156-.3178.3345-.3411.1692-.0176.2085-.0094.3636.0751.104.0558 5.877 8.2641 6.7577 9.5335.011.0176 1.4787-2.1757 3.2623-4.8667 1.7835-2.691 3.2493-4.8901 3.2585-4.8987.0372-.0372.0877-.0558.1692-.0558.0887 0 .1224.0094.1973.0445.1156.0507.1529.1288.1529.3003v10.3009c0 .1101-.0329.1972-.0982.2634-.0653.0694-.1529.1101-.2745.1101-.1205 0-.2647-.0407-.3296-.0955-.0573-.0481-.0796-.1056-.0796-.2323v-8.4946c0-.0437-.0187-.0437-.0467.0094-.0746.1288-5.4338 8.2755-5.5968 8.5042-.0963.1337-.1642.1783-.2948.1783-.1154 0-.1903-.0446-.2856-.1783-.0746-.1101-5.4805-8.2921-5.5504-8.4289-.0187-.0437-.0467-.0437-.0467 0v8.4946c0 .1267-.0329.1972-.0982.2323-.0653.0481-.209.0955-.3296.0955-.1217 0-.2092-.0407-.2745-.1101-.0653-.0662-.0982-.1533-.0982-.2634V4.8758c0-.1719.0372-.2511.1529-.3003.0749-.0351.1086-.0445.1973-.0445.0815 0 .132.0186.1692.0558.0093.0086 1.4647 2.2082 3.2482 4.8987 1.7835 2.691 3.2585 4.8843 3.2678 4.8843.0092 0 .0187-.0176.0187-.0176 0-.0093 1.4927-2.1782 3.3184-4.8192C17.7558 6.0507 19.2671 3.8521 19.2671 3.8521c.0467-.0662.1317-.1337.2159-.1524.0841-.0186.2554-.0176.3306 0 .1317.0351.2135.1056.2554.2168.0187.0481.0281.4097.0281 4.0375 0 2.1782-.0094 3.9924-.0187 4.0315-.0467.2087-.2135.3642-.4376.3922-.0841.0094-.2554.0094-.3306 0-.2241-.0289-.3901-.1835-.4376-.3922-.0093-.0391-.0187-1.8533-.0187-4.0315 0-4.4189 0-3.9566-.0654-4.0198-.0373-.0355-.0933-.0445-.1504-.024-.0654.0214-5.5504 8.2921-5.5968 8.4102-.0467.1101-.1224.1719-.2554.1972-.0841.0176-.2554.0176-.3306 0-.1317-.0253-.2135-.0871-.2554-.1972-.0467-.1181-5.5314-8.3888-5.5968-8.4102-.0571-.0214-.113-.0115-.1504.024-.0654.0632-.0654-.4007-.0654 4.0198 0 2.1782-.0093 3.9924-.0187 4.0315-.0466.2087-.2135.3642-.4376.3922-.0841.0094-.2554.0094-.3306 0-.2241-.028-.3901-.1835-.4376-.3922-.0093-.0391-.0187-1.8533-.0187-4.0315 0-3.6278.0094-3.9894.0281-4.0375.0419-.1112.1237-.1817.2554-.2168.0752-.0176.2465-.0186.3306 0 .0842.0187.1692.0862.2159.1524 0 0 1.5113 2.1986 3.3371 4.8758 1.8257 2.6771 3.3184 4.8758 3.3184 4.8758.0093 0 .0187-.0176.0187-.0176 0-.0093 1.4834-2.2082 3.2585-4.8843 1.7835-2.6905 3.2389-4.8901 3.2482-4.8987.0372-.0372.0877-.0558.1692-.0558.0887 0 .1224.0094.1973.0445.1156.0492.1529.1284.1529.3003v10.3009c0 .1101-.0329.1972-.0982.2634-.0653.0694-.1529.1101-.2745.1101-.1205 0-.2647-.0407-.3296-.0955-.0573-.0481-.0796-.1056-.0796-.2323v-8.4946c0-.0437-.0187-.0437-.0467.0094-.0746.1288-5.4338 8.2755-5.5968 8.5042-.0963.1337-.1642.1783-.2948.1783-.1154 0-.1903-.0446-.2856-.1783-.0746-.1101-5.4805-8.2921-5.5504-8.4289-.0187-.0437-.0467-.0437-.0467 0v8.4946c0 .1267-.0329.1972-.0982.2323-.0653.0481-.209.0955-.3296.0955-.1217 0-.2092-.0407-.2745-.1101-.0653-.0662-.0982-.1533-.0982-.2634V4.8758c0-.1719.0372-.2511.1529-.3003.0749-.0351.1086-.0445.1973-.0445.0815 0 .132.0186.1692.0558.0093.0086 1.4647 2.2082 3.2482 4.8987 1.7835 2.691 3.2585 4.8843 3.2678 4.8843.0092 0 .0187-.0176.0187-.0176 0-.0093 1.4927-2.1782 3.3184-4.8192C17.7558 6.0507 19.2671 3.8521 19.2671 3.8521c.0467-.0662.1317-.1337.2159-.1524.0841-.0186.2554-.0176.3306 0 .1317.0351.2135.1056.2554.2168.0187.0481.0281.4097.0281 4.0375 0 2.1782-.0094 3.9924-.0187 4.0315-.0467.2087-.2135.3642-.4376.3922-.0841.0094-.2554.0094-.3306 0-.2241-.0289-.3901-.1835-.4376-.3922-.0093-.0391-.0187-1.8533-.0187-4.0315 0-4.4189 0-3.9566-.0654-4.0198-.0373-.0355-.0933-.0445-.1504-.024-.0654.0214-5.5504 8.2921-5.5968 8.4102-.0467.1101-.1224.1719-.2554.1972-.0841.0176-.2554.0176-.3306 0-.1317-.0253-.2135-.0871-.2554-.1972-.0467-.1181-5.5314-8.3888-5.5968-8.4102-.0571-.0214-.113-.0115-.1504.024-.0654.0632-.0654-.4007-.0654 4.0198 0 2.1782-.0093 3.9924-.0187 4.0315-.0466.2087-.2135.3642-.4376.3922-.0841.0094-.2554.0094-.3306 0-.2241-.028-.3901-.1835-.4376-.3922-.0093-.0391-.0187-1.8533-.0187-4.0315 0-3.6278.0094-3.9894.0281-4.0375.0419-.1112.1237-.1817.2554-.2168.0752-.0176.2465-.0186.3306 0 .0842.0187.1692.0862.2159.1524 0 0 1.5113 2.1986 3.3371 4.8758 1.8257 2.6771 3.3184 4.8758 3.3184 4.8758.0093 0 .0187-.0176.0187-.0176 0-.0093 1.4834-2.2082 3.2585-4.8843 1.7835-2.6905 3.2389-4.8901 3.2482-4.8987.0372-.0372.0877-.0558.1692-.0558.0887 0 .1224.0094.1973.0445.1156.0492.1529.1284.1529.3003v10.3009c0 .1101-.0329.1972-.0982.2634-.0653.0694-.1529.1101-.2745.1101-.1205 0-.2647-.0407-.3296-.0955-.0573-.0481-.0796-.1056-.0796-.2323v-8.4946c0-.0437-.0187-.0437-.0467.0094-.0746.1288-5.4338 8.2755-5.5968 8.5042-.0963.1337-.1642.1783-.2948.1783-.1154 0-.1903-.0446-.2856-.1783-.0746-.1101-5.4805-8.2921-5.5504-8.4289-.0187-.0437-.0467-.0437-.0467 0v8.4946c0 .1267-.0329.1972-.0982.2323-.0653.0481-.209.0955-.3296.0955-.1217 0-.2092-.0407-.2745-.1101-.0653-.0662-.0982-.1533-.0982-.2634V4.8758c0-.1719.0372-.2511.1529-.3003.0749-.0351.1086-.0445.1973-.0445.0815 0 .132.0186.1692.0558.0093.0086 1.4647 2.2082 3.2482 4.8987 1.7835 2.691 3.2585 4.8843 3.2678 4.8843.0092 0 .0187-.0176.0187-.0176 0-.0093 1.4927-2.1782 3.3184-4.8192C17.7558 6.0507 19.2671 3.8521 19.2671 3.8521c.0467-.0662.1317-.1337.2159-.1524.0841-.0186.2554-.0176.3306 0 .1317.0351.2135.1056.2554.2168.0187.0481.0281.4097.0281 4.0375 0 2.1782-.0094 3.9924-.0187 4.0315-.0467.2087-.2135.3642-.4376.3922-.0841.0094-.2554.0094-.3306 0-.2241-.0289-.3901-.1835-.4376-.3922-.0093-.0391-.0187-1.8533-.0187-4.0315 0-4.4189 0-3.9566-.0654-4.0198-.0373-.0355-.0933-.0445-.1504-.024-.0654.0214-5.5504 8.2921-5.5968 8.4102-.0467.1101-.1224.1719-.2554.1972-.0841.0176-.2554.0176-.3306 0-.1317-.0253-.2135-.0871-.2554-.1972-.0467-.1181-5.5314-8.3888-5.5968-8.4102-.0571-.0214-.113-.0115-.1504.024-.0654.0632-.0654-.4007-.0654 4.0198 0 2.1782-.0093 3.9924-.0187 4.0315-.0466.2087-.2135.3642-.4376.3922-.0841.0094-.2554.0094-.3306 0-.2241-.028-.3901-.1835-.4376-.3922-.0093-.0391-.0187-1.8533-.0187-4.0315 0-3.6278.0094-3.9894.0281-4.0375.0419-.1112.1237-.1817.2554-.2168.0752-.0176.2465-.0186.3306 0 .0842.0187.1692.0862.2159.1524 0 0 1.5113 2.1986 3.3371 4.8758 1.8257 2.6771 3.3184 4.8758 3.3184 4.8758.0093 0 .0187-.0176.0187-.0176 0-.0093 1.4834-2.2082 3.2585-4.8843 1.7835-2.6905 3.2389-4.8901 3.2482-4.8987.0372-.0372.0877-.0558.1692-.0558.0887 0 .1224.0094.1973.0445.1156.0492.1529.1284.1529.3003v10.3009c0 .1101-.0329.1972-.0982.2634-.0653.0694-.1529.1101-.2745.1101-.1205 0-.2647-.0407-.3296-.0955-.0573-.0481-.0796-.1056-.0796-.2323v-8.4946c0-.0437-.0187-.0437-.0467.0094-.0746.1288-5.4338 8.2755-5.5968 8.5042-.0963.1337-.1642.1783-.2948.1783-.1154 0-.1903-.0446-.2856-.1783-.0746-.1101-5.4805-8.2921-5.5504-8.4289-.0187-.0437-.0467-.0437-.0467 0v8.4946c0 .1267-.0329.1972-.0982.2323-.0653.0481-.209.0955-.3296.0955-.1217 0-.2092-.0407-.2745-.1101-.0653-.0662-.0982-.1533-.0982-.2634V4.8758c0-.1719.0372-.2511.1529-.3003.0749-.0351.1086-.0445.1973-.0445.0815 0 .132.0186.1692.0558.0093.0086 1.4647 2.2082 3.2482 4.8987 1.7835 2.691 3.2585 4.8843 3.2678 4.8843.0092 0 .0187-.0176.0187-.0176 0-.0093 1.4927-2.1782 3.3184-4.8192C17.7558 6.0507 19.2671 3.8521 19.2671 3.8521"
        />
      </svg>
    </div>
  )

  const NodeJSLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="#339933"
          d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
        />
      </svg>
    </div>
  )

  const TailwindLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="#06B6D4"
          d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        />
      </svg>
    </div>
  )

  const MongoDBLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="#47A248"
          d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
        />
      </svg>
    </div>
  )

  const AzureLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <Image src="/azure-logo.png" alt="Microsoft Azure" width={24} height={24} className="w-6 h-6 object-contain" />
    </div>
  )

  const AWSLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <Image src="/aws-logo.png" alt="AWS" width={24} height={24} className="w-6 h-6 object-contain" />
    </div>
  )

  const GoogleLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <Image src="/google-logo.png" alt="Google" width={24} height={24} className="w-6 h-6 object-contain" />
    </div>
  )

  const CiscoLogo = () => (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 p-1">
      <Image src="/cisco-logo.png" alt="Cisco" width={24} height={24} className="w-6 h-6 object-contain" />
    </div>
  )

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", logo: <PythonLogo /> },
        { name: "Java", logo: <JavaLogo /> },
        { name: "JavaScript (ES6+)", logo: <JavaScriptLogo /> },
        { name: "C", logo: <CLogo /> },
        { name: "HTML5", logo: <HTMLLogo /> },
        { name: "CSS3", logo: <CSSLogo /> },
      ],
      gradient: "from-primary-800 to-primary-600",
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React.js", logo: <ReactLogo /> },
        { name: "Next.js", logo: <NextJSLogo /> },
        { name: "Node.js", logo: <NodeJSLogo /> },
        { name: "RESTful APIs", logo: <Code className="w-6 h-6" /> },
        { name: "Responsive Design", logo: <Globe className="w-6 h-6" /> },
        { name: "Tailwind CSS", logo: <TailwindLogo /> },
      ],
      gradient: "from-primary-700 to-primary-500",
    },
    {
      title: "Cloud Technologies",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Microsoft Azure", logo: <AzureLogo /> },
        { name: "Azure Data Services", logo: <AzureLogo /> },
        { name: "AWS Cloud Foundations", logo: <AWSLogo /> },
      ],
      gradient: "from-primary-600 to-primary-400",
    },
    {
      title: "Development Tools",
      icon: <FileCode className="w-6 h-6" />,
      skills: [
        { name: "Git", logo: <FileCode className="w-6 h-6" /> },
        { name: "GitHub", logo: <Github className="w-6 h-6" /> },
        { name: "VS Code", logo: <Code className="w-6 h-6" /> },
        { name: "RDP", logo: <FileCode className="w-6 h-6" /> },
      ],
      gradient: "from-primary-500 to-primary-300",
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", logo: <MongoDBLogo /> },
        { name: "MongoDB Atlas", logo: <MongoDBLogo /> },
        { name: "Azure SQL Database", logo: <AzureLogo /> },
      ],
      gradient: "from-primary-400 to-primary-200",
    },
    {
      title: "Methodologies",
      icon: <Target className="w-6 h-6" />,
      skills: [
        { name: "SDLC", logo: <Target className="w-6 h-6" /> },
        { name: "Agile Development", logo: <Zap className="w-6 h-6" /> },
        { name: "Component Architecture", logo: <Code className="w-6 h-6" /> },
        { name: "AI-Assisted Development", logo: <Zap className="w-6 h-6" /> },
      ],
      gradient: "from-primary-300 to-primary-100",
    },
  ]

  const projects = [
    {
      title: "Food Waste Management System",
      description:
        "A comprehensive full-stack web application following SDLC phases with secure user authentication, data analytics, and cloud database integration for waste pattern analysis.",
      image: "/food-waste-app.png",
      technologies: ["React.js", "Node.js", "MongoDB Atlas", "JavaScript", "RESTful APIs"],
      github: "https://github.com/nithin-2707",
      live: "#",
      year: "2024",
      category: "Full-Stack Application",
      status: "Under Development", // Added status indicator
    },
    {
      title: "Portfolio Website",
      description:
        "Modern responsive web application demonstrating software development best practices with React component lifecycle management and optimized performance.",
      image: "/portfolio-website.png",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com/nithin-2707",
      live: "#",
      year: "2024",
      category: "Web Application",
      status: "Deployed", // Added status indicator
    },
  ]

  const experiences = [
    {
      title: "Cloud Data Solutions Experience",
      company: "Microsoft Azure",
      period: "2024",
      description:
        "Gained expertise in Azure data services including Azure SQL Database, Azure Cosmos DB, and Azure Data Factory. Understanding of cloud data storage solutions and data processing pipelines relevant to web application development.",
      technologies: ["Azure SQL Database", "Azure Cosmos DB", "Azure Data Factory", "Cloud Security"],
      logo: <AzureLogo />,
    },
    {
      title: "Full-Stack Development Projects",
      company: "Personal Projects",
      period: "2024",
      description:
        "Developed comprehensive web applications following SDLC phases from requirement analysis to development and testing. Applied software engineering principles for maintainable and scalable code architecture.",
      technologies: ["React.js", "Node.js", "MongoDB", "Git", "GitHub"],
      logo: <Code className="w-6 h-6" />,
    },
  ]

  const certifications = [
    {
      title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
      issuer: "Microsoft",
      date: "Jul 2024",
      credentialId: "DP-900",
      logo: <AzureLogo />,
      color: "from-primary-800 to-primary-600",
    },
    {
      title: "AWS Academy Graduate - Cloud Architecting",
      issuer: "Amazon Web Services",
      date: "Nov 2024",
      credentialId: "AWS-ARCH-2024",
      logo: <AWSLogo />,
      color: "from-primary-700 to-primary-500",
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "Sep 2024",
      credentialId: "AWS-FOUND-2024",
      logo: <AWSLogo />,
      color: "from-primary-600 to-primary-400",
    },
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "Dec 2023",
      credentialId: "CISCO-JS-2023",
      logo: <CiscoLogo />,
      color: "from-primary-500 to-primary-300",
    },
    {
      title: "Java 11 Essentials",
      issuer: "Infosys SpringBoard",
      date: "Jun 2023",
      credentialId: "INFOSYS-JAVA-2023",
      logo: <JavaLogo />,
      color: "from-primary-400 to-primary-200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 dark:from-slate-900 dark:via-primary-950 dark:to-slate-800 transition-all duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl z-50 border-b border-primary-200/50 dark:border-primary-800/50 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-800 via-primary-600 to-primary-500">
              Nithin Gandrathi
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "skills", "experience", "projects", "certifications", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-primary-600 hover:scale-105 ${
                    activeSection === item ? "text-primary-600 font-semibold" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {item}
                </button>
              ))}

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-700 transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-primary-700 dark:text-primary-300" />
                ) : (
                  <Sun className="w-5 h-5 text-primary-700 dark:text-primary-300" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-primary-200 dark:border-primary-700 animate-fade-in">
              {["home", "about", "skills", "experience", "projects", "certifications", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 capitalize text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-800 rounded-lg transition-all duration-200"
                >
                  {item}
                </button>
              ))}

              {/* Mobile Theme Toggle */}
              <div className="pt-4 border-t border-primary-200 dark:border-primary-700 mt-4">
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-3 w-full py-3 text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-800 rounded-lg transition-all duration-200"
                >
                  {theme === "light" ? (
                    <>
                      <Moon className="w-5 h-5" />
                      <span>Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-5 h-5" />
                      <span>Light Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-primary-500/10 to-primary-400/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary-800 via-primary-600 to-primary-400 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl hover:scale-110 transition-transform duration-500">
                NG
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-800 via-primary-600 to-primary-400">
              Nithin Gandrathi
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto">
              Software Development Engineer (Web)
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg text-slate-500 dark:text-slate-400 mb-8">
              <MapPin className="w-5 h-5" />
              <span>Hanamkonda, Telangana, India</span>
            </div>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Dedicated Software Development Engineer with hands-on experience in full-stack web development and strong
              foundation in SDLC. Available for Remote Work — Immediate Start Available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-700 to-primary-500 hover:from-primary-800 hover:to-primary-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white"
                onClick={() => scrollToSection("projects")}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-600 text-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900 transform hover:scale-105 transition-all duration-300 border-2"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://github.com/nithin-2707"
                className="text-slate-600 hover:text-primary-600 transform hover:scale-125 transition-all duration-300"
              >
                <Github className="w-8 h-8" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nithin-gandrathi-8627a6272/"
                className="text-slate-600 hover:text-primary-600 transform hover:scale-125 transition-all duration-300"
              >
                <Linkedin className="w-8 h-8" />
              </Link>
              <Link
                href="mailto:nithingandrathi2707@gmail.com"
                className="text-slate-600 hover:text-primary-600 transform hover:scale-125 transition-all duration-300"
              >
                <Mail className="w-8 h-8" />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-primary-500">
              About Me
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Passionate about creating innovative web solutions with modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a dedicated Software Development Engineer with hands-on experience in full-stack web development and
                a strong foundation in Software Development Life Cycle (SDLC). Currently pursuing my Bachelor of
                Technology in Computer Science and Engineering at VIT-AP University, Amaravati.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Proficient in Java, Python, and JavaScript with expertise in building scalable web applications using
                modern frameworks like React.js and Next.js. Certified in Microsoft Azure Data Fundamentals with
                experience in cloud-based data solutions and AWS cloud services.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Experienced in remote development practices and collaborative workflows using Git and GitHub. Available
                for immediate start and committed to delivering high-quality solutions in fast-paced development
                environments.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl border border-primary-200 dark:border-primary-700">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                  <div className="text-slate-600 dark:text-slate-300">Certifications</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800/20 dark:to-primary-700/20 rounded-xl border border-primary-300 dark:border-primary-600">
                  <div className="text-3xl font-bold text-primary-600 mb-2">2+</div>
                  <div className="text-slate-600 dark:text-slate-300">Major Projects</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-800 via-primary-600 to-primary-400 rounded-2xl p-8 text-white shadow-2xl hover:scale-105 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <BookOpen className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-bold">Education</h3>
                      <p className="text-primary-100">B.Tech CSE, VIT-AP University</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Users className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-bold">Availability</h3>
                      <p className="text-primary-100">Remote Work Ready</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Zap className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-bold">Start Date</h3>
                      <p className="text-primary-100">Immediate Start Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-primary-50/80 dark:bg-slate-900/80 backdrop-blur-sm transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-primary-500">
              Skills & Technologies
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive technical expertise across the full development stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-primary-200 dark:border-primary-700 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 bg-gradient-to-r ${category.gradient} rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
                      >
                        <span className="text-lg">{skill.logo}</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-primary-500">
              Experience & Expertise
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Professional experience and technical achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-primary-200 dark:border-primary-700"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{exp.logo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">{exp.title}</h3>
                        <div className="flex items-center text-primary-600 mb-2">
                          <Building className="w-5 h-5 mr-2" />
                          <span className="text-lg font-semibold">{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-300">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 dark:from-primary-900/30 dark:to-primary-800/30 dark:text-primary-200 px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-primary-50/80 dark:bg-slate-900/80 backdrop-blur-sm transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-primary-500">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Showcase of full-stack web applications and development projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                ref={(el) => (projectCardsRefs.current[index] = el)}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-primary-200 dark:border-primary-700 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-800/60 via-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={project.github}
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg hover:scale-110 transform duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      href={project.live}
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg hover:scale-110 transform duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-white/90 text-slate-800 font-medium">
                      {project.year} • {project.category}
                    </Badge>
                  </div>
                  {/* Status indicator */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        project.status === "Under Development"
                          ? "bg-yellow-500/90 text-yellow-900 dark:bg-yellow-600/90 dark:text-yellow-100"
                          : "bg-green-500/90 text-green-900 dark:bg-green-600/90 dark:text-green-100"
                      } font-medium flex items-center space-x-1`}
                    >
                      {project.status === "Under Development" && <AlertTriangle className="w-3 h-3" />}
                      <span>{project.status}</span>
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-200">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary-300 text-primary-600 dark:border-primary-600 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-primary-500">
              Certifications & Achievements
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Professional certifications from leading technology companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-primary-200 dark:border-primary-700 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div
                      className={`p-4 bg-gradient-to-r ${cert.color} rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {cert.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">{cert.issuer}</p>
                      <div className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 bg-primary-50 dark:bg-primary-900/20 p-2 rounded">
                    Credential ID: {cert.credentialId}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-primary-50/80 dark:bg-slate-900/80 backdrop-blur-sm transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-primary-500">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Available for immediate start • Remote work ready • Let's discuss your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 group">
                <div className="p-4 bg-gradient-to-r from-primary-700 to-primary-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Email</h3>
                  <p className="text-slate-600 dark:text-slate-300">nithingandrathi2707@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-4 bg-gradient-to-r from-primary-600 to-primary-400 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Location</h3>
                  <p className="text-slate-600 dark:text-slate-300">Hanamkonda, Telangana, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-4 bg-gradient-to-r from-primary-500 to-primary-300 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Availability</h3>
                  <p className="text-slate-600 dark:text-slate-300">Remote Work • Immediate Start</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/nithin-2707"
                    className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary-200 dark:border-primary-700"
                  >
                    <Github className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/nithin-gandrathi-8627a6272/"
                    className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary-200 dark:border-primary-700"
                  >
                    <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                  </Link>
                  <Link
                    href="mailto:nithingandrathi2707@gmail.com"
                    className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary-200 dark:border-primary-700"
                  >
                    <Mail className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 p-6 rounded-xl border border-primary-300 dark:border-primary-600">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Key Strengths</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Strong foundation in SDLC with practical application</li>
                  <li>• Certified expertise in Microsoft Azure and AWS</li>
                  <li>• Experience with remote development environments</li>
                  <li>• Quick learner with excellent communication skills</li>
                </ul>
              </div>
            </div>

            <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-primary-200 dark:border-primary-700 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        First Name
                      </label>
                      <Input
                        placeholder="John"
                        className="border-primary-300 dark:border-primary-600 focus:border-primary-500 focus:ring-primary-500 bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        placeholder="Doe"
                        className="border-primary-300 dark:border-primary-600 focus:border-primary-500 focus:ring-primary-500 bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="border-primary-300 dark:border-primary-600 focus:border-primary-500 focus:ring-primary-500 bg-white/50 dark:bg-slate-700/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                    <Input
                      placeholder="Project Discussion"
                      className="border-primary-300 dark:border-primary-600 focus:border-primary-500 focus:ring-primary-500 bg-white/50 dark:bg-slate-700/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="border-primary-300 dark:border-primary-600 focus:border-primary-500 focus:ring-primary-500 bg-white/50 dark:bg-slate-700/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-700 to-primary-500 hover:from-primary-800 hover:to-primary-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-100 mb-4">
              Nithin Gandrathi
            </div>
            <p className="text-primary-200 mb-6">Software Development Engineer (Web) • Available for Remote Work</p>
            <div className="flex justify-center space-x-6 mb-8">
              <Link
                href="https://github.com/nithin-2707"
                className="text-primary-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nithin-gandrathi-8627a6272/"
                className="text-primary-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:nithingandrathi2707@gmail.com"
                className="text-primary-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
            <div className="border-t border-primary-600 pt-8">
              <p className="text-primary-300 text-sm">
                © {new Date().getFullYear()} Nithin Gandrathi. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
