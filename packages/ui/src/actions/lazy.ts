export function lazy(node: HTMLImageElement): { destroy: () => void } {
  if (node.tagName === 'IMG' && !node.hasAttribute('loading')) {
    node.setAttribute('loading', 'lazy')
  }
  return {
    destroy() {
      /* nothing to cleanup */
    }
  }
}