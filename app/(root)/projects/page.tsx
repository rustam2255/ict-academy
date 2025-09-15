'use client'
import { Projects } from '@/interfaces'
import { useGetProjectsQuery } from '@/service/api'
import React from 'react'
import { ArrowUpRight, Code } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Error from '../_components/error'
import Loading from '../_components/loading'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'

const ProjectsPage = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  const { data, isLoading, isError } = useGetProjectsQuery({ limit: 10, offset: 0, lang }, { refetchOnMountOrArgChange: true })

  const projects: Projects[] = data?.results || []

  if (isLoading) return <Loading />
  if (isError) return <Error />

  return (
    <>
      <Head>
        <title>{t("project.title")}</title>
        <meta name="description" content={t("project.descr")} />
        <meta property="og:title" content={t("project.title")} />
        <meta property="og:description" content={t("project.descr")} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/hero_courses.png" />
        <meta name="keywords" content="ICT Akademiyasi, IT Projects, Dasturlash, Frontend, Backend" />
      </Head>
      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.div
          className="w-screen relative"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/hero_courses.png"
            alt="Courses Hero"
            width={1440}
            height={282}
            className="w-screen h-[282px] object-cover"
          />
          <motion.div
            className="absolute top-1 left-15"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Image src={'/logolight.png'} alt="logo" width={204} height={204} />
          </motion.div>
        </motion.div>

        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header Section */}
          <motion.div
            className="relative mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent ">
              {t("project.title")}
            </h1>

            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {t("project.descr")}
            </p>
          </motion.div>

          {/* Projects Grid */}
          {projects.length === 0 ? (
            <div className="flex items-center justify-center min-h-[40vh]">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-700/50 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-400 text-lg font-medium">No projects found</p>
                <p className="text-slate-500 text-sm mt-2">Check back soon for new projects</p>
              </div>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15, // ketma-ket chiqadi
                  },
                },
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                    <Image
                      src={project.photo}
                      alt={project.name}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm opacity-0 lg:group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 text-center">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                        <Link
                          href={`/projects/${project.id}`}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
                        >
                          <span>{t("project.view")}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Project number */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-emerald-400">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content - Mobile */}
                  <div className="relative p-6 lg:hidden">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 mb-2">
                      {project.name}
                    </h3>
                    <Link
                      href={`/projects/${project.id}`}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>

  )
}

export default ProjectsPage
