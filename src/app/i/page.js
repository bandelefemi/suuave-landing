'use client'
import { requestList } from '@/components/data/illustratorData'
import Header from '@/components/illustrator/Header'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {

    const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRequest = currentPage * 10;
  const indexOfFirstRequest = indexOfLastRequest - 10;
  const currentRequests = requestList.slice(indexOfFirstRequest, indexOfLastRequest);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(requestList.length / 10); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
        <div>
            <Header />
        </div>

        <div className="overflow-x-auto mt-10 p-5">
            <table className="min-w-full divide-y divide-gray-400">
                <thead className="bg-gray-100">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                    </th>
                    {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                    </th> */}
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image Samples
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {currentRequests.map((request, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <Image className="h-10 w-10 rounded-full" src={request.img} alt={request.user} width={40} height={40} />
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{request.user}</div>
                        </div>
                        </div>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <Image className="h-10 w-10 rounded-full" src={request.img} alt={request.user} width={40} height={40} />
                        </div>
                        </div>
                    </td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.desc}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex">
                        {request.imgSamples.map((sample, idx) => (
                            <div key={idx} className="mr-2">
                                <p>
                                    {sample}
                                </p>
                            {/* <Image src={sample} alt={`Image Sample ${idx + 1}`} width={40} height={40} /> */}
                            </div>
                        ))}
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="">
                    <div className="space-x-1">
                        {pageNumbers.map((number) => (
                        <a
                            key={number}
                            href="#"
                            className={
                            number === currentPage
                                ? 'bg-indigo-100 border-indigo-500 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800 px-3 py-2 rounded-md text-sm font-medium'
                                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                            }
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Page