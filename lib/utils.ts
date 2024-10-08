export * from "./formatDate"
export * from "./formatNumber"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// import { PHONE_NUMBER, NEXT_PUBLIC_PHONE_NUMBER } from "@/lib/config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WhatsAppUrlBaseUrl = 'https://wa.me/5493624125046'

export const WhatsAppUrl = ({ text }: { text?: string } = {}) => {
  const url = new URL(WhatsAppUrlBaseUrl)
  if (text) {
    url.searchParams.set('text', text)
  }
  return url.toString()
}

export function formatGradualSpacingText(text: string) {
  return text.replace(/\s/g, " | ")
}