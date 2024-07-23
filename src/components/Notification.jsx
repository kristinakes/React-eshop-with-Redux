const Notification = (props) => {

  return (
    <section className={["bg-white flex gap-4 text-center text-xl font-semibold rounded-md shadow-md  max-h-fit p-5 m-auto justify-center items-center", props.status === "error" ? "text-red-600" : "text-blue"].join(" ")}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
