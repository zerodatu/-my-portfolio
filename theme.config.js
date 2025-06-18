const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Ze;roP（じろぷ） All rights reserved.
      <a href="https://x.com/datui2525" target="_blank" rel="noopener noreferrer">X</a>
      <style jsx>{`
        a {
          float: right;
          margin-left: 1rem;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
