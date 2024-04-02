import { FunctionComponent, SVGAttributes } from 'react'

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.svg' {
  const content: FunctionComponent<SVGAttributes<SVGElement>>
  export default content
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
