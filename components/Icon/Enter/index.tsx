import { FC } from 'react'

interface IProps {
  className?: string
}

const EnterIcon: FC<IProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="4792"
      width="200"
      height="200"
    >
      <path
        d="M900 386.016v-192q0-16.992-11.488-28.512t-28-11.488-28.512 11.488-12 28.512v192q0 92-64.992 156.992T598.016 608H258.016l112.992-112q11.008-12 11.008-28.512t-11.488-28-28-11.488-28.512 12L136 618.016q-12 12-12 28.512t12 28.512l183.008 183.008q12 12 28.512 12t28.512-11.488 12-28-12-28.512l-114.016-114.016h336q124.992 0 213.504-88.512t88.512-213.504z"
        p-id="4793"
        fill="#bfbfbf"
      ></path>
    </svg>
  )
}

export default EnterIcon
