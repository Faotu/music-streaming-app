import Stripe from "stripe";

export interface UserDetials {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url: string;
  billing_address?: Stripe.Address;
  payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}

export interface Subscription {
  id: string;
  user_id: string;
  status?: Stripe.Subscription.Status;
}
