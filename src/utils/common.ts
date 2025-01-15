export function handleCursorCopyPosition(
  e: MouseEvent,
  parent: HTMLButtonElement,
  targetEl: HTMLParagraphElement | HTMLParagraphElement[]
) {
  const { x, y } = parent.getBoundingClientRect();
  const { clientY, clientX } = e;

  if (Array.isArray(targetEl)) {
    targetEl.forEach(
      (el: HTMLParagraphElement | any) =>
        (el.style.transform = `translate3d(${clientX - x}px, ${
          clientY - y
        }px, 0px)`)
    );
  } else {
    targetEl.style.transform = `translate3d(${clientX - x}px, ${
      clientY - y
    }px, 0px)`;
  }
}

export function getSlideCounterString(slide: {
  realIndex: number;
  slides: any[];
}) {
  return `${slide.realIndex + 1}/${slide.slides.length}`;
}
