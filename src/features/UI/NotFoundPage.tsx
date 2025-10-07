import { Link } from "react-router-dom";
import illustration404 from "../../assets/illustration_404.svg";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

        {/* Текстовый блок */}
        <div className="text-center lg:max-w-md mt-10">
          <div className="mb-6">
            <span className="text-base sm:text-lg font-semibold text-blue-500 bg-white px-3 py-1 rounded-full shadow-sm">
              404 Ошибка
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-3">
            Упс!
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-5">
            Страница не найдена
          </h2>

          <div className="block lg:hidden mb-6">
            <img
              src={illustration404}
              alt="404 - Страница не найдена"
              className="w-2/3 sm:w-1/2 mx-auto drop-shadow-2xl"
            />
          </div>

          <p className="bg-white px-4 py-3 rounded-xl border border-gray-800 text-base text-left text-gray-800 mb-8 leading-relaxed shadow-sm">
            Произошла ошибка. Эта страница не существует или она была удалена.
            Будем рады увидеть вас на главной 💙
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-400 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Вернуться на главную
            </Link>
          </div>

          <div className="mt-4 mb-8 text-sm text-gray-500">
            <p>
              Нужна помощь?{" "}
              <Link
                to="/"
                className="text-blue-500 hover:text-blue-600"
              >
                Свяжитесь с поддержкой
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden lg:flex relative justify-center w-full lg:max-w-lg">
          <div className="relative z-10 w-3/4 sm:w-2/3 md:w-1/2 lg:w-full">
            <img
              src={illustration404}
              alt="404 - Страница не найдена"
              className="w-full h-auto drop-shadow-2xl mx-auto"
            />
          </div>

          <div className="absolute -top-6 -right-6 w-20 h-20 sm:w-28 sm:h-28 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>

      {/* Волна внизу */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 text-white"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
