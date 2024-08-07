// @ts-nocheck
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { messages, articleMessages } from '@/constants'


function Services() {

    const [activeLink, setActiveLink] = useState('importer');

    const handleClick = (link: React.SetStateAction<string>) => {
        setActiveLink(link);
    };
    const paralist = articleMessages[activeLink as ActiveLinkType] || [];

    return (
        <div className='services-div'>
            <h1 className='services-heading'>Services</h1>
            <p className='services-para'>See how simplified, insightful, and intrusive global trade data can help you stay ahead of the competition, stay up-to-date with the worldwide market, and streamline operations. Market Inside offers unique trade data solutions to various sectors and industries.
            </p>
            <div className='mobile-view-service'>

                <nav className="navbar">
                    <a
                        // href="#importer"
                        className={activeLink === 'importer' ? 'active' : ''}
                        onClick={() => handleClick('importer')}
                    >
                        Importer
                    </a>
                    <a
                        // href="#exporter"
                        className={activeLink === 'exporter' ? 'active' : ''}
                        onClick={() => handleClick('exporter')}
                    >
                        Exporter
                    </a>
                    <a
                        // href="#logistics"
                        className={activeLink === 'logistics' ? 'active' : ''}
                        onClick={() => handleClick('logistics')}
                    >
                        Logistics
                    </a>
                    <a
                        // href="#law"
                        className={activeLink === 'law firms' ? 'active' : ''}
                        onClick={() => handleClick('law firms')}
                    >
                        Law Firms
                    </a>
                    <a
                        // href="#corporation"
                        className={activeLink === 'corporation' ? 'active' : ''}
                        onClick={() => handleClick('corporation')}
                    >
                        Corporation
                    </a>
                    <a
                        // href="#insurance"
                        className={activeLink === 'insurance companies' ? 'active' : ''}
                        onClick={() => handleClick('insurance companies')}
                    >
                        Insurance Companies
                    </a>
                    <a
                        // href="#research"
                        className={activeLink === 'research & consulting' ? 'active' : ''}
                        onClick={() => handleClick('research & consulting')}
                    >
                        Research & Consulting
                    </a>
                </nav>
            </div>

            <Row className='services-para-div'>
                <Col>
                    <div>
                        <h2 className='service-subheading'>{activeLink}</h2>
                        <p>
                            {messages[activeLink] || ''}
                        </p>
                        {paralist?.map((paralist, index) => (
                            <article key={index} className="flex gap-2.5">
                                <div className="flex justify-center items-center p-2.5">
                                    <Image loading="lazy" width={25} height={25} src="/rightarrow.png" alt="" />
                                </div>
                                <p className="justify-center self-start text-base leading-7 text-neutral-700">
                                    {paralist}
                                </p>
                            </article>
                        ))}
                    </div>
                </Col>
                <Col className='service-img-div'>
                    <div className='services-img'>
                        <Image src={
                            (activeLink === 'importer' ? '/importer.png' :
                                activeLink === 'exporter' ? '/exporter.png' :
                                    activeLink === 'logistics' ? '/logistics.png' : activeLink === "law firms" ? `/lawfirms.png` : activeLink === 'corporation' ? `/corporation.png` : activeLink === 'insurance companies' ? `/insurancecompanies.png` : activeLink === "research & consulting" ? `/researchconsulting.png` : ``)
                        } width={500} height={500} alt='' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Services