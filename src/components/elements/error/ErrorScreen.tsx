import "./ErrorScreen.scss";

function ErrorScreen({ error }: { error: string }) {
  console.error(error);

  return (
    <div className="error-frame">
      <span className="error-frame__light-color">
        Something went wrong: {error}.
      </span>
      <span>Please, try again in a moment.</span>
    </div>
  );
}

export default ErrorScreen;
