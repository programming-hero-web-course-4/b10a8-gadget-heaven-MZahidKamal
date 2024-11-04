const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-9xl font-bold text-blue-500 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-lg mb-6 text-center max-w-md">
                Oops! The page you are looking for does not exist or has been moved.
            </p>
            <a
                href="/"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition duration-300"
            >
                Go Back to Home
            </a>
        </div>
    );
};

export default Error404;
