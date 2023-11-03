const sidebarState = ref<boolean>(false)

export const useSidebar = () => {

  const toggleSidebar = () => { sidebarState.value = !sidebarState.value }
  return {
    sidebarState,
    toggleSidebar
  }
}