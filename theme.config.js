const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Ze;roP（じろぷ） All rights reserved.
      <a
        href="https://x.com/datui2525"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X（旧Twitter）プロフィールへ"
      >
        X
      </a>
      <style jsx>{`
        a {
          float: right;
          margin-left: 1rem;
        }
      `}</style>
    </small>
  )
}
