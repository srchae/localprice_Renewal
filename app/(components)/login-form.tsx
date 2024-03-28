import { Button, ColorButton } from './button';

export default function LoginForm() {
  return (
    <form className="space-y-3">
      <div className="w-[340px] flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 flex justify-center text-2xl">로그인</h1>
        <div className="w-full">
          <div>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="아이디를 입력해주세요"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <p>아이디 찾기 | 비밀번호 찾기</p>
        </div>
        <LoginButton />
        <JoinButton />
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

export function LoginButton() {
  return (
    <ColorButton className="mt-2 flex w-full justify-center">
      로그인
    </ColorButton>
  );
}

export function JoinButton() {
  return <Button className="mt-2 flex w-full justify-center">회원가입</Button>;
}
