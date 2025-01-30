export function useIP() {
  const { data: ip }: any = useAsyncData("ip", async () => {
    return await $fetch("https://api.ipify.org?format=json");
 
  })
  return {
    ip
  }
}
