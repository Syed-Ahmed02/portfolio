import React from 'react'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className='w-full py-20'>
      <main className="container bg-background pt-8 pb-16 lg:pt-16 lg:pb-24   antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm  dark:text-white">
                  <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"/>
                    <div>
                      <a href="#" rel="author" className="text-xl font-bold text-neutral dark:text-white">Jese Leos</a>
                      <p className="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                      <p className="text-base text-gray-500 dark:text-gray-400"><time title="February 8th, 2022">Feb. 8, 2022</time></p>
                    </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text- lg:mb-6 lg:text-4xl dark:text-white">Best practices for successful prototypes</h1>
            </header>
          </article>
        </div>
        </main>
    </div>
  )
}

