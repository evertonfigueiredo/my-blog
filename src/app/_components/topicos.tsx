import { Badge } from '@/components/ui/badge'

export function Topicos() {
  return (
    <div className="py-4 space-y-3">
      <div className="hover:text-gray-800">
        <a href="" className="cursor-pointer  flex justify-between">
          <h3 className="font-extrabold text-lg">Everton Figueiredo</h3>
          <Badge variant="outline">N artigos</Badge>
        </a>
      </div>
      <div className="hover:text-gray-800">
        <a href="" className="cursor-pointer  flex justify-between">
          <h3 className="font-extrabold text-lg">Everton Figueiredo</h3>
          <Badge variant="outline">N artigos</Badge>
        </a>
      </div>
    </div>
  )
}
