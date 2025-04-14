import PaymentCard from "./PaynentCard";

export default function App() {
  return (
    <>
      <h1>Payments</h1>
      <PaymentCard amount={100} />
      <PaymentCard amount={400} />
      <PaymentCard amount={3900} />
    </>
  );
}
