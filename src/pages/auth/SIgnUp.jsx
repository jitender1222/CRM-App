const SignUp = () => {
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="card bg-cyan-600 text-primary-content w-96">
          <div className="card-body text-white flex-col	justify-around	">
            <span className="card-title text-3xl justify-center mb-4">
              SignUp
            </span>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered input-warning w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="name@gmail.com"
              className="input input-bordered input-warning w-full max-w-xs"
            />

            <input
              type="password"
              placeholder="password"
              className="input input-bordered input-warning w-full max-w-xs"
            />
            <div className="relative">
            <div className="absolute dropdown dropdown-right">
              <div tabIndex={0} role="button" className="btn m-1">
                Click
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Customer</a>
                </li>
                <li>
                  <a>Engineer</a>
                </li>
              </ul>
            </div>
            </div>
            <button className="btn mt-14 btn-warning">Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
