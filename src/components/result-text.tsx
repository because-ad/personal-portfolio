/** 仅强调原文已有的数字，不改变资料或生成新事实。 */
export function ResultText({ text }: { text: string }) {
  const parts = text.split(/((?:约\s*)?\d+\s*(?:小时|万元|天|名|人|场|单|个|元|粉))/g);
  return parts.map((part, index) => index % 2 === 1
    ? <strong key={index}>{part}</strong>
    : part);
}
