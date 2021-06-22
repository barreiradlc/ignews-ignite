import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string
}

function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button
      type="button"
      className={styles.subScribeBUtton}
    > 
      Subscribe now
    </button>
  )
}

export { SubscribeButton }