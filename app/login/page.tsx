import LoginForm from '../(components)/login-form';

export default function LoginPage() {
  return (
    // RootLayout으로 변경 되어야 함
    <div className="flex justify-center p-36">
      <LoginForm />
    </div>
  );
}
