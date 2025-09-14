'use client'
import { News } from '@/interfaces'
import { useGetNewsQuery } from '@/service/api'
import { ArrowUpRight, Code } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Loading from '../_components/loading'
import Error from '../_components/error'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'

const NewsPage = () => {
  const { i18n, t } = useTranslation()
  const lang = i18n.language;
  const { data, isLoading, isError } = useGetNewsQuery({ limit: 10, offset: 0, lang })

  const news: News[] = data?.results || []

  if (isLoading) return <Loading />
  if (isError) return <Error />

  return (
    <>
      <Head>
        <title>ICT Akademiyasi - {t('news.title')}</title>
        <meta name="description" content={t('news.descr')} />
        <meta property="og:title" content={`ICT Akademiyasi - ${t('news.title')}`} />
        <meta property="og:description" content={t('news.descr')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ictacademy.uz/news" />
        <meta property="og:image" content={news[0]?.image || '/logo.png'} />
        <meta name="keywords" content="ICT Akademiyasi, yangiliklar, IT, kurslar, o'zbek tilida, dasturlash" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-emerald-400/5 to-cyan-500/5 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-gradient-to-r from-purple-400/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Hero Section */}
        <div className="w-full relative overflow-hidden">
          {news[2] && (
            <Image
              src={news[2].image}
              alt="News Hero"
              width={1440}
              height={282}
              className="w-full h-[200px] xs:h-[250px] sm:h-[282px] object-cover animate-fade-in"
            />
          )}
          {/* Logo */}
          <div className="absolute top-4 left-4 xs:top-6 xs:left-6 sm:left-8 z-20 animate-slide-in-left">
            <Image
              src={'/logolight.png'}
              alt="logo"
              width={180}
              height={180}
              className="w-[120px] h-[120px] xs:w-[150px] xs:h-[150px] sm:w-[180px] sm:h-[180px] drop-shadow-2xl animate-scale-in"
            />
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent mb-6">
              {t("news.title")}
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {t("news.descr")}
            </p>
          </div>

          {/* News Grid */}
          {news.length === 0 ? (
            <div className="flex items-center justify-center min-h-[40vh] animate-fade-in">
              <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 sm:p-12 animate-scale-up">
                <div className="w-16 h-16 xs:w-20 xs:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-slate-600/30 to-slate-700/30 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 xs:w-10 xs:h-10 text-slate-400" />
                </div>
                <h3 className="text-slate-300 text-lg xs:text-xl sm:text-2xl font-bold mb-2 animate-fade-in-delayed">
                  {t("news.notfound")}
                </h3>
                <p className="text-slate-500 text-sm xs:text-base animate-fade-in-delayed">
                  {t("news.message")}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {news.map((article, index) => (
                <div
                  key={article.id}
                  className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl border border-green-700/30 rounded-xl overflow-hidden hover:border-green-500/40 transition-all duration-700 hover:shadow-2xl hover:shadow-green-500/10 hover:transform hover:-translate-y-2 animate-card-reveal"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                    <Image
                      src={article.image || '/logo.png'}
                      alt={article.name}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 ease-out"></div>
                    <div className="absolute top-3 left-3 xs:top-4 xs:left-4 animate-fade-in">
                      <span className="bg-gradient-to-r from-green-900 to-emerald-500 text-white px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-semibold backdrop-blur-sm">
                        {t("news.rating")}
                      </span>
                    </div>
                  </div>
                  <div className="relative p-4 xs:p-5 sm:p-6">
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white group-hover:text-green-500 transition-all duration-300 mb-2 xs:mb-3 leading-tight">
                      {article.name}
                    </h3>
                    {article.description && (
                      <p className="text-slate-400 text-sm xs:text-base line-clamp-3 group-hover:text-slate-300 transition-colors duration-300">
                        {article.description}
                      </p>
                    )}
                    <div className="mt-3 xs:mt-4 pt-3 xs:pt-4 border-t border-slate-700/50">
                      <Link
                        href={`/news/${article.id}`}
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 font-medium text-sm xs:text-base transition-colors duration-300 group-hover:translate-x-1"
                      >
                        {t("news.full")}
                        <ArrowUpRight className="w-4 h-4 xs:w-5 xs:h-5 transition-transform group-hover:rotate-45" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(1deg); }
            66% { transform: translateY(5px) rotate(-1deg); }
          }

          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(8px) rotate(-1deg); }
            66% { transform: translateY(-12px) rotate(1deg); }
          }

          @keyframes fade-in {
            0% { opacity: 

  0; }
            100% { opacity: 1; }
          }

          @keyframes fade-in-delayed {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes slide-in-left {
            0% { opacity: 0; transform: translateX(-20px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes scale-in {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes scale-up {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes card-reveal {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-float {
            animation: float 8s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-delayed 10s ease-in-out infinite;
            animation-delay: -2s;
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          .animate-fade-in-delayed {
            animation: fade-in-delayed 1s ease-out forwards 0.3s;
          }

          .animate-slide-in-left {
            animation: slide-in-left 0.8s ease-out forwards;
          }

          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }

          .animate-scale-in {
            animation: scale-in 0.8s ease-out forwards;
          }

          .animate-scale-up {
            animation: scale-up 0.8s ease-out forwards 0.2s;
          }

          .animate-card-reveal {
            animation: card-reveal 0.6s ease-out forwards;
          }
        `}</style>
      </div>
    </>


  )
}

export default NewsPage