export const useBlogs = () => {
  const blogList = ref([
    {
      slug: "unlocking-the-power-of-fomo",
      title: "Unlocking the Power of FOMO",
      description:
        "Learn how to harness FOMO to skyrocket your Shopify store's conversions with our definitive guide.",
      image:
        "https://cdn.trustpulse.com/wp-content/uploads/2020/09/Social-featured-image-FOMO-marketing-examples.jpg",
    },
  ]);

  return {
    blogList,
  };
};
