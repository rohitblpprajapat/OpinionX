import React from 'react'

type Props = {
    condition: boolean
    childern : React.ReactNode;
}

export default function If({condition , childern}: Props) {
  return condition ? childern : null
}