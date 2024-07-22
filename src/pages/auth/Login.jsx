const Login = () => {
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="card bg-cyan-600 text-primary-content w-96 h-[50%]">
          <div className="card-body text-white flex-col	justify-around	">
          <span className="card-title text-3xl justify-center">Login</span>
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
            <button className="btn  btn-warning">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
