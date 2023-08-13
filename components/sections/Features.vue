<script setup lang="ts">
import feature1 from "@/assets/images/feature1.png";
import feature2 from "@/assets/images/feature2.png";
import feature3 from "@/assets/images/feature3.png";
import feature4 from "@/assets/images/feature4.png";
import feature5 from "@/assets/images/feature5.png";
</script>

<template>
  <div class="min-h-[500px] py-20">
    <div class="grid grid-cols-2 gap-10 justify-center items-center">
      <div
        class="flex justify-center col-span-2 lg:col-span-1 lg:justify-start"
      >
        <div class="w-[100%] p-10 md:p-0 min-w-[300px] lg:ml-auto lg:w-[80%]">
          <img :src="feature1" />
        </div>
      </div>
      <div
        class="flex col-span-2 justify-center lg:justify-start lg:col-span-1"
      >
        <div class="w-[80%] text-center lg:text-left">
          <div class="font-title text-[22px] font-[600]">
            Sales/Purchase Popup: Skyrocket Your Sales!
          </div>
          <div class="font-text text-[16px] mt-5 leading-7">
            Supercharge your e-commerce sales with our Sales/Purchase Popup!
            Captivate customers with eye-catching designs and customizable
            templates. Watch real-time updates of purchases create a powerful
            sense of social proof. Leverage FOMO (Fear of Missing Out) to build
            trust, credibility, and boost conversions. Don't wait – try our
            popup now and see your revenue take off!
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-10 justify-center items-center mt-24">
      <div
        class="order-2 lg:order-1 flex col-span-2 justify-center lg:justify-start lg:col-span-1"
      >
        <div class="w-[80%] text-center lg:ml-auto lg:text-left">
          <div class="font-title text-[22px] font-[600]">
            Design and Customization: Your Brand, Your Way!
          </div>
          <div class="font-text text-[16px] mt-5 leading-7">
            Make a statement with our Design and Customization options! Create
            popups that reflect your brand's personality and wow your customers.
            Choose from a wide range of stunning templates and customize every
            detail to perfection. Whether it's colors, fonts, or visuals, we've
            got you covered. Don't settle for ordinary – let your creativity
            shine and elevate your e-commerce game! Your brand, your way – with
            our Design and Customization, the possibilities are limitless!
          </div>
        </div>
      </div>
      <div
        class="order-1 lg:order-2 flex justify-center col-span-2 lg:col-span-1 lg:justify-start"
      >
        <div class="w-[100%] p-10 md:p-0 min-w-[300px] lg:w-[80%]">
          <img :src="feature2" />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-10 justify-center items-center mt-24">
      <div
        class="flex justify-center col-span-2 lg:col-span-1 lg:justify-start"
      >
        <div class="w-[100%] p-10 md:p-0 min-w-[300px] lg:ml-auto lg:w-[80%]">
          <img :src="feature3" />
        </div>
      </div>
      <div
        class="flex col-span-2 justify-center lg:justify-start lg:col-span-1"
      >
        <div class="w-[80%] text-center lg:text-left">
          <div class="font-title text-[22px] font-[600]">
            Exit Intent Popup: Wait! Don't Go Yet!
          </div>
          <div class="font-text text-[16px] mt-5 leading-7">
            Don't lose potential customers! Our Exit Intent Popup is your secret
            weapon to retain visitors and boost conversions. Just when they're
            about to leave, our popup swoops in with a last-minute offer they
            can't resist. Keep visitors engaged with captivating messages and
            reduce bounce rates like never before. Turn exits into conversions
            and keep your customers coming back for more! Leverage the power of
            our Exit Intent Popup today and watch your sales skyrocket!
          </div>
          <div class="mt-3 min-w-[100px] w-fit mx-auto lg:mx-0">
            <Badge label="Coming Soon" />
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-10 justify-center items-center mt-24">
      <div
        class="order-2 lg:order-1 flex col-span-2 justify-center lg:justify-start lg:col-span-1"
      >
        <div class="w-[80%] text-center lg:ml-auto lg:text-left">
          <div class="font-title text-[22px] font-[600]">
            Optin Popups: Grow Lists with Exclusive Deals!
          </div>
          <div class="font-text text-[16px] mt-5 leading-7">
            Level up your marketing game with our Optin Popups! Offer exclusive
            discounts to captivate visitors and expand your email and SMS
            marketing lists. Custom designs make your brand shine, while
            valuable incentives entice subscribers. Elevate your reach and
            engagement today!
          </div>
          <div class="mt-3 min-w-[100px] w-fit mx-auto lg:mx-0">
            <Badge label="Coming Soon" />
          </div>
        </div>
      </div>
      <div
        class="order-1 lg:order-2 flex justify-center col-span-2 lg:col-span-1 lg:justify-start"
      >
        <div class="w-[100%] p-10 md:p-0 min-w-[300px] lg:w-[80%]">
          <img :src="feature4" />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-10 justify-center items-center mt-24">
      <div
        class="flex justify-center col-span-2 lg:col-span-1 lg:justify-start"
      >
        <div class="w-[100%] p-10 md:p-0 min-w-[300px] lg:ml-auto lg:w-[80%]">
          <img :src="feature5" />
        </div>
      </div>
      <div
        class="flex col-span-2 justify-center lg:justify-start lg:col-span-1"
      >
        <div class="w-[80%] text-center lg:text-left">
          <div class="font-title text-[22px] font-[600]">
            Announcement Popups: Make an Impactful Statement!
          </div>
          <div class="font-text text-[16px] mt-5 leading-7">
            Take your announcements to new heights with our Announcement Popups!
            Grab visitors' attention and leave a lasting impression with
            eye-catching designs. Use this powerful tool to communicate
            important updates, events, or promotions effectively. Customize the
            look to align with your brand's identity and watch your
            announcements make a significant impact. Elevate engagement and
            seize the opportunity to captivate your audience!
          </div>
          <div class="mt-3 min-w-[100px] w-fit mx-auto lg:mx-0">
            <Badge label="Coming Soon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
