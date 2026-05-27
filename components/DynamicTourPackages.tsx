'use client'
import { useState, useEffect } from 'react'
import TourPackages from '@/components/TourPackages'

interface DynamicTourPackagesProps {
  packages?: any
}

export default function DynamicTourPackages({ packages }: DynamicTourPackagesProps) {
  return <TourPackages packages={packages} />
}