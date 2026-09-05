'use client'

import { Download } from 'lucide-react'

export function ProfileDownload() {
  return <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-4 py-2.5 text-sm font-bold text-white"><Download className="size-4" /> Download / print profile</button>
}
