import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string
}

function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [ session ] = useSession()
  const { push } = useRouter()

  async function handleSubscribe() {
    if(!session){
      signIn('github')
      return;
    }

    if(session.activeSubscription){
      push("/posts")
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