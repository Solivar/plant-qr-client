import LoginForm from './LoginForm';

function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">PlantQR</h1>

      <LoginForm />
    </main>
  );
}

export default LoginPage;
