"use client"

import "../styles/hero.css";
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar(){
    return (
        <div className="navbar">
        <ul>
            <li><Link href = "/">Home</Link></li>
            <li><Link href = "/about">About</Link></li>
            <li><Link href = "/team">Team</Link></li>
            <li><Link href = "/session">Iteration 1.0</Link></li>
            <li><Link href = "/getinvolved">Get Involved</Link></li>
            <li><Link href = "/contact">Contact</Link></li>
        </ul>

    </div>

    )
}