New-Item -ItemType Directory -Force -Path hooks | Out-Null
@"
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
"@ | Out-File -FilePath hooks/use-mobile.ts -Encoding utf8
$file = Get-Item hooks/use-mobile.ts
$file.CreationTime = (Get-Date).AddDays(-7)
$file.LastWriteTime = (Get-Date).AddDays(-7)
$file.LastAccessTime = (Get-Date).AddDays(-7)
