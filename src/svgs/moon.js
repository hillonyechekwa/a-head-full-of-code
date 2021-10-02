import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 25c3.856 0 7.377-1.754 9.71-4.628a.586.586 0 00-.565-.945c-6.064 1.155-11.634-3.495-11.634-9.617a9.787 9.787 0 014.956-8.516.586.586 0 00-.183-1.085A12.604 12.604 0 0012.5 0C5.6 0 0 5.591 0 12.5 0 19.4 5.591 25 12.5 25z"
        fill="#FDF6E7"
      />
    </svg>
  )
}

export default SvgComponent