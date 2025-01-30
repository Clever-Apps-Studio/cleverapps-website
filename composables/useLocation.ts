export function useLocation() {
  const { ip } = useIP();
    const { data: location } = useAsyncData("location", async () => {

    if (!ip.value?.ip) return null;
    const data = await $fetch(`https://ipapi.co/${ip.value?.ip}/json/`);
    const details = useTransformLocation(data);
    return details;
  }, {
    watch: [ip],
  });
  return {
    location,
  };
}
