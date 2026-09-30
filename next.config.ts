import type { NextConfig } from 'next'

/**
 * Weiterleitungen für Seiten, die beim Umbau im September 2026 ins Archiv
 * (archiv/) gewandert sind. Die drei Leistungs- und Referenzseiten waren
 * indexiert – mit 301 gehen Rankings und Backlinks auf die neuen Seiten über
 * statt verloren. Die früheren Testadressen (/test…) leiten auf die Seiten
 * weiter, die daraus geworden sind.
 *
 * Kunden- und Demoseiten (coach-eddy, fabian-coaching …) sind bewusst nicht
 * dabei: Sie liefern jetzt 404.
 */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/seo-freelancer', destination: '/seo-freelancer-langenfeld', statusCode: 301 },
      { source: '/geo-agentur-langenfeld', destination: '/seo-freelancer-langenfeld', statusCode: 301 },
      { source: '/referenzen/hundeshop', destination: '/', statusCode: 301 },
      { source: '/test', destination: '/', statusCode: 301 },
      { source: '/test/seo-freelancer-langenfeld', destination: '/seo-freelancer-langenfeld', statusCode: 301 },
      { source: '/test/blog', destination: '/blog', statusCode: 301 },
    ]
  },
}

export default nextConfig
