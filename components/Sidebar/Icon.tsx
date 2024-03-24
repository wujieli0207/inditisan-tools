import React, { FC, ReactNode } from 'react'
import {
  IconLadder,
  IconPalette,
  IconAppWindow,
  IconServer,
  IconDeviceDesktopAnalytics,
  IconCloud,
} from '@tabler/icons-react'

const components = {
  IconLadder,
  IconPalette,
  IconAppWindow,
  IconServer,
  IconDeviceDesktopAnalytics,
  IconCloud,
}

interface IProps {
  componentName: string
}

const DynamicComponent: FC<IProps> = ({ componentName }) => {
  // @ts-ignore
  const Component = components[componentName]
  return Component ? <Component size={20} stroke={2} /> : null
}

export default DynamicComponent
