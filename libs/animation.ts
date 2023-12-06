export const animateScaleInZoom = {
  initial: 'hidden',
  whileInView: 'visible',
  variants: {
    hidden:{ scale: .8, opacity: 0},
    visible: { scale: 1, opacity: 1, transition: {delay: .4, delayChildren: 0.3, staggerChildren: 0.2}} }
}
export const animateVariantItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}