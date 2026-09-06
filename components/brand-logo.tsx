import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  /** Compact height for scrolled navbar */
  compact?: boolean
  /** Show wordmark next to the mark (default true) */
  showWordmark?: boolean
}

export function BrandLogo({ className, compact = false, showWordmark = true }: BrandLogoProps) {
  const markSize = compact ? 30 : 40

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 font-sans font-bold text-foreground transition-all duration-300",
        compact ? "text-base" : "text-xl",
        className,
      )}
      aria-label="The Monkeys — início"
    >
      <Image
        src="/mark-monkey.png"
        alt=""
        width={markSize}
        height={markSize}
        className={cn(
          "shrink-0 object-contain transition-all duration-300",
          // marca branca → preta no tema claro; branca no escuro
          "brightness-0 dark:brightness-100",
          compact ? "size-7" : "size-9",
        )}
        priority
      />
      {showWordmark ? (
        <span>
          The<span className="text-primary">Monkeys</span>
        </span>
      ) : null}
    </Link>
  )
}
