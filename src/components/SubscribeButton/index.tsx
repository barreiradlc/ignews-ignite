import { signIn, useSession } from "next-auth/client";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string
}

function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [ session ] = useSession()

  async function handleSubscribe() {
    if(!session){
      signIn('github')
      return;
    }

    try {
      const { data } = await api.post('subscribe')

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId: data.sessionId})
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <button
      type="button"
      className={styles.subScribeBUtton}
      onClick={handleSubscribe}
    > 
      Subscribe now
    </button>
  )
}

export { SubscribeButton }