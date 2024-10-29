import { useState } from 'react';

const FormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getFormData = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex items-start justify-center h-full py-8"> {/* Adjusted here */}
        <div className="bg-white p-8 rounded shadow-md w-full sm:max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Sign In</h2>
          <form onSubmit={getFormData} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary-600 text-black rounded-md hover:bg-primary-700 focus:outline-none focus:bg-primary-700"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormComponent;
