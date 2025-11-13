"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Star, Menu, Award, Users, MessageCircle, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Coffee", id: "products" },
            { name: "Menu", id: "pricing" },
            { name: "Reviews", id: "testimonials" }
          ]}
          brandName="Brew & Bean"
          button={{
            text: "Visit Us",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Coffee Experience in NYC"
          description="Discover handcrafted coffee blends, artisan pastries, and the perfect atmosphere for work, meetings, or relaxation in the heart of New York City"
          tag="Est. 2018"
          tagIcon={Coffee}
          buttons={[
            { text: "Order Now", href: "pricing" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc="https://pixabay.com/get/gfd866f0882ee2b50a6386f87293e8bc4836d836918d4ad74c2b2fe2787a48bb585fd98285d1bb220c8fc2f323e29ec98206721fc9f14cfc42fb2d8ec2d4809fe_1280.jpg"
          imageAlt="Premium coffee shop interior"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Brew & Bean, we're passionate about sourcing the finest coffee beans from around the world and creating an exceptional coffee experience. Every cup tells a story of craftsmanship, quality, and dedication to the art of coffee making."
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Coffee Selection"
          description="Discover our carefully curated collection of premium coffee varieties"
          tag="Signature Blends"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "espresso",
              name: "House Espresso",
              price: "$4.50",
              imageSrc: "https://pixabay.com/get/g2ff69a1da3d1ac868bf950cfd6c824529bd81af10e16da08f945561c3e4f766feb5e18175ee648959decef75b6eb08537f4c9be056e4d7292fe1450f14946633_1280.jpg",
              imageAlt: "Premium espresso"
            },
            {
              id: "cappuccino",
              name: "Artisan Cappuccino",
              price: "$5.75",
              imageSrc: "https://pixabay.com/get/gd6a96a85acfa328177594a54690e0e637af71b5e7f78acd17e456fa8d7d549f2d5182c6fcd5fb7b9f9f6e3920efaac8252fe57ecc023ca515a33d8cfece03aef_1280.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "cold-brew",
              name: "Cold Brew Special",
              price: "$4.25",
              imageSrc: "https://pixabay.com/get/gc7a8a66e371df706b72db13b726210c7b9396f92b0618a55e81232e03fb6daae73d9ac8dfb030864f53192086b98b50f68a9993254b4197c5c3d94c19daaf931_1280.jpg",
              imageAlt: "Cold brew coffee"
            },
            {
              id: "specialty",
              name: "Specialty Blend",
              price: "$6.00",
              imageSrc: "https://pixabay.com/get/g08f8e1ba48f22ca05660038a4807a2ed04a46dafc767980ebf91f97ed38332e27298013f221ac5452e847b19cc1637d28e09afc3d3dc4ea0fa11e741d60fbd1f_1280.jpg",
              imageAlt: "Specialty coffee blend"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Coffee Menu & Pricing"
          description="Choose from our carefully crafted selection of beverages and treats"
          tag="Daily Menu"
          tagIcon={Menu}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "essentials",
              price: "$3.50 - $4.50",
              name: "Coffee Essentials",
              buttons: [
                { text: "Order Now", href: "contact" },
                { text: "View Details", href: "products" }
              ],
              features: [
                "House Blend Coffee",
                "Americano",
                "Fresh Brewed Tea",
                "Hot Chocolate"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$5.00 - $6.50",
              name: "Premium Selections",
              buttons: [
                { text: "Order Now", href: "contact" },
                { text: "View Details", href: "products" }
              ],
              features: [
                "Espresso & Cappuccino",
                "Latte with Art",
                "Specialty Blends",
                "Seasonal Favorites",
                "Fresh Pastries"
              ]
            },
            {
              id: "artisan",
              price: "$7.00 - $9.00",
              name: "Artisan Collection",
              buttons: [
                { text: "Order Now", href: "contact" },
                { text: "View Details", href: "products" }
              ],
              features: [
                "Single Origin Pour-over",
                "Cold Brew Specialties",
                "Signature Drinks",
                "Gourmet Desserts"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Why New Yorkers Choose Us"
          description="Our commitment to quality and community has made us a favorite destination"
          tag="Our Impact"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "5000+",
              title: "Happy Customers",
              description: "Coffee lovers who trust our quality",
              icon: Users
            },
            {
              id: "2",
              value: "50+",
              title: "Coffee Varieties",
              description: "Carefully sourced from around the world",
              icon: Coffee
            },
            {
              id: "3",
              value: "6",
              title: "Years of Excellence",
              description: "Serving premium coffee since 2018",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real experiences from our valued coffee community"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              testimonial: "The best coffee in NYC! The atmosphere is perfect for meetings and the quality is consistently excellent. My team and I come here every week.",
              imageSrc: "https://pixabay.com/get/ga688ceb472b94aafe525cce782b62f1b8573991ca3611d680d247b17bc4b028870165bf5069a9df2e48d4b7046b805107c8aa634c2243cc56e149196dc3529e3_1280.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Software Developer",
              testimonial: "This place has become my second office. Great wifi, amazing coffee, and the staff always remembers my order. Couldn't ask for more!",
              imageSrc: "https://pixabay.com/get/gca1ca9016f507a34f0873dc25f87b9da0bd843216de2902483e8b6cfa2189c3ca009d6f7bfed68b24a797bd341d07e256e68b1ff829ae5805be41b2ac39b2667_1280.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Graduate Student",
              testimonial: "I've tried every coffee shop in the neighborhood, but nothing compares to Brew & Bean. The cold brew is perfection and the study atmosphere is unmatched.",
              imageSrc: "https://pixabay.com/get/gf6c3843f4114ef171ee3e16b49966cc31923313bc8ad3ebf96f5b42e51d2e921ea71ed33023468d50a97ce740d16b4892c72676edb148c3c4b6f2300b4cf81b1_1280.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Financial Analyst",
              testimonial: "From the moment you walk in, you can smell the quality. Their specialty blends are worth every penny, and the service is always friendly and fast.",
              imageSrc: "https://pixabay.com/get/g8cc3a89e43d69d05c12f8961d3aa24148fcfa43f1aea99fa5403662c656941bbf84e6475c2e3fd8ba076ba6b6cc4b8ab5684a46f617be2237322cc2b1881ecd0_1280.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Join Our Coffee Community"
          description="Get the latest updates on new blends, events, and exclusive offers delivered to your inbox"
          tagIcon={Mail}
          imageSrc="https://pixabay.com/get/g0c4749b5f38ea061ab2939a1f446c59e7a3d0ab5a605893cbc817e611065bcfc1be0db83d13fd2fa1e7d01dd782fef7a9cf4e9ec71b40f1b48240c5f81205767_1280.jpg"
          imageAlt="Coffee beans background"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our newsletter. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Brew & Bean"
          copyrightText="© 2025 | Brew & Bean NYC"
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee Selection", href: "products" },
                { label: "Pricing", href: "pricing" },
                { label: "Seasonal Specials", href: "products" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Quality Promise", href: "about" },
                { label: "Reviews", href: "testimonials" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Contact Us", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}