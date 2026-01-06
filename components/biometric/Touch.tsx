import { Fingerprint } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const Touch = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">

                  <Fingerprint className="h-4 w-4" /> Touch ID
                </Button>
  )
}

export default Touch