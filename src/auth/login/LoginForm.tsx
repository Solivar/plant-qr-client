function LoginForm() {
  return (
    <form className="mx-auto flex w-full max-w-sm flex-col gap-4 rounded border border-gray-200 p-6">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          className="rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-900"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          className="rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-900"
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
        />
      </div>

      <button
        className="rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        type="submit"
      >
        Log in
      </button>
    </form>
  );
}

export default LoginForm;
