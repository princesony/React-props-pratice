// const PageLink = ({ link, itemClass }) => {
//   return (
//     <li key={link.id}>
//       <a href={link.href} className={itemClass}>
//         {link.text}
//       </a>
//     </li>
//   )
// }
const PageLink = ({ href,text, itemClass }) => {
  return (
    <li >
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  )
}
export default PageLink
