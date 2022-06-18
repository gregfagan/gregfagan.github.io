const PAGES = ['index', 'resume']
const OUT = 'build'

export default {
  [`${OUT}/%.html`]: {
    deps: ['src/%.js'],
    exec: `npx babel-node src/static $< > $@`,
  },

  out: {
    deps: ['outdir', ...PAGES.map((p) => `${OUT}/${p}.html`)],
  },

  outdir: {
    exec: `mkdir -p ${OUT}`,
  },
}
