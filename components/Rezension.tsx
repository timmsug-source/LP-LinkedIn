interface RezensionData {
  text?: string
  author?: string
  role?: string
  stars?: number
}

const defaults: RezensionData = {
  text: 'Timm ist individuell auf mich eingegangen und hat mir mit meiner Homepage super geholfen. Danke dir und kann ich nur weiterempfehlen.',
  author: 'Markus',
  role: 'Verified Client',
  stars: 5,
}

export default function Rezension({ data }: { data?: Record<string, unknown> }) {
  const d: RezensionData = { ...defaults, ...(data as RezensionData) }
  const stars = d.stars ?? 5

  return (
    <section id="rezension">
      <div className="wrap">
        <div className="review-card fu">
          <span className="review-quote">&ldquo;</span>
          <p className="review-text">{d.text}</p>
          <div className="review-stars">
            {Array.from({ length: stars }).map((_, i) => <span key={i}>★</span>)}
          </div>
          <div className="review-author">
            <div>
              <div className="review-name">{d.author}</div>
              <div className="review-role">{d.role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
