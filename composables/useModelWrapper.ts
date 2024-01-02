export function useModelWrapper(props: any, emit: any, key: string) {
  return computed({
    get: () => props[key],
    set: value => emit(`update:${key}`, value),
  })
}
