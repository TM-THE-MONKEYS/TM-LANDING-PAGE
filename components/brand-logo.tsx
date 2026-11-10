import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  /** Compact height for scrolled navbar */
  compact?: boolean
  /** Show wordmark next to the mark (default true) */
  showWordmark?: boolean
  /** Use full lockup (logo with text) instead of icon mark */
  variant?: "mark" | "full"
}

export function BrandLogo({
  className,
  compact = false,
  showWordmark = true,
  variant = "mark",
}: BrandLogoProps) {
  const markSize = compact ? 36 : 48
  const isFull = variant === "full"

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
      {isFull ? (
        <Image
          src="/logo-oficial.png"
          alt="The Monkeys Digital Solutions"
          width={compact ? 160 : 200}
          height={compact ? 160 : 200}
          className={cn(
            "shrink-0 object-contain transition-all duration-300",
            compact ? "h-14 w-auto" : "h-16 w-auto",
          )}
          priority
        />
      ) : (
        <>
          <Image
            src="/mark-oficial.png"
            alt=""
            width={markSize}
            height={markSize}
            className={cn(
              "shrink-0 object-contain transition-all duration-300",
              compact ? "size-9" : "size-11",
            )}
            priority
          />
          {showWordmark ? (
            <span>
              The<span className="text-primary">Monkeys</span>
            </span>
          ) : null}
        </>
      )}
    </Link>
  )
}
