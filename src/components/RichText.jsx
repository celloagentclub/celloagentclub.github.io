import { Fragment } from 'react'

/**
 * 极简行内富文本：把 **加粗** 渲染为 <b>，其余原样输出。
 * 用于承载案例文档里带强调的业务描述。
 */
export default function RichText({ text, className }) {
  if (text == null) return null
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g)
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.length > 4 && part.startsWith('**') && part.endsWith('**')) {
          return <b key={i}>{part.slice(2, -2)}</b>
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </span>
  )
}
