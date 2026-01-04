function Hello({ userName, career }: { userName: string; career: string }) {
  return (
    <div>
      <h1>Hello {userName}</h1>
      <p>This is for your career, good look studying {career}</p>
    </div>
  );
}

export default Hello;
