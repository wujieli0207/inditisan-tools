import { ICatagory } from '@/types/data'

export function handleSearch(data: ICatagory[], search: string) {
  let result = []

  const newData: ICatagory[] = JSON.parse(JSON.stringify(data))
  if (search === '') {
    return data
  }

  // 目前仅支持二级菜单搜索
  result = newData
    .map((item) => {
      if (item.children) {
        item.children = item.children.filter((child) =>
          child.title.toLowerCase().includes(search)
        )
      }
      return item
    })
    .filter((item) => item.children?.length !== 0)

  return result
}
