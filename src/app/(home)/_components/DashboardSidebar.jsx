"use client"


import { ChartLine, CirclePlus, Library, MessageSquareMore } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../../../components/ui/button"
import { Progress } from "../../../components/ui/progress"

const DashboardSidebar = () => {
  const sidebarItems = [
    {
      id: 1,
      title: "My forms",
      href: "/dashboard",
      icon: Library,
    },
    {
      id: 2,
      title: "Responses",
      href: "/responses",
      icon: MessageSquareMore,
    },
    {
      id: 3,
      title: "Analytics",
      href: "/analytics",
      icon: ChartLine,
    },
    {
      id: 4,
      title: "Upgrade",
      href: "/upgrade",
      icon: CirclePlus,
    },
  ]

  const pathName = usePathname()
  return (
    <div className="h-[calc(100vh-7.2vh)] shadow-md border w-64 flex flex-col gap-3 py-6 px-3 rounded-r-md">
      {sidebarItems.map(({ id, title, href, icon: Icon }) => (
        <Link
          key={id}
          href={href}
          className={`flex items-center gap-2 hover:bg-blue-600 hover:text-white p-2 rounded-md ${
            pathName?.startsWith(href) && "bg-blue-600 text-white"
          }`}
        >
          <Icon size={24} />
          <span className="ml-2 ">{title}</span>
        </Link>
      ))}

      <div className="fixed bottom-20 w-56 ">
        <Button className="w-full">+ Create Form</Button>
        <div className="my-5 flex flex-col gap-2">
          <Progress value={33} />
          <h2>2 out of 5 files created</h2>
          <h2 className="text-sm">Upgrade your plan to access more</h2>
        </div>
      </div>
    </div>
  )
}
export default DashboardSidebar
