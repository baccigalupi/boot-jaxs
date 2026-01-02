type SelfPublisher = () => void

export const onDocumentClick = (publish: SelfPublisher) => {
  const onClickListener = () => {
    publish()
    document.removeEventListener('click', onClickListener)
  }

  document.addEventListener('click', onClickListener)
}
