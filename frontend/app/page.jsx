import PricingSection from "@/components/PricingSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES, HOW_IT_WORKS_STEPS, SITE_STATS } from "@/lib/data";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, Clock, Flame, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const {has} = await auth();
  const subscriptionTier = has({plan: "pro"}) ? "pro" : "free";
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 text-center md:text-left">
              <Badge variant="outline"
              className="rounded-full border border-[#5F8D75]/30 bg-[#5F8D75]/5 text-[#4C7560] px-4 py-1.5 text-sm font-semibold tracking-wide shadow-sm backdrop-blur-md gap-2 w-fit mx-auto mb-6">
              <Flame className="mr-1"/>
                #1 AI Cooking Assistant
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[0.9] tracking-tight">
                From Fridge <br className="hidden md:block" />
          to <span className="text-[#5F8D75] italic">Feast.</span>
              </h1>

              <p className="text-xl md:text-2xl  text-stone-600 mb-10 max-w-lg mx-auto md:mx-0 font-light">
                Just snap a photo of your ingredients, and let AI handle the rest. Save money and savor every bite.
              </p>
              <Link href={"/dashboard"}>
                <Button 
                  size="xl"
                  variant="primary"
                  className="px-8 py-6 text-lg"
                >
                  Start Cooking Free with AI
                  <ArrowRight className="ml-2 w-5 h-5"/>
                </Button>
              </Link>

              <p>
                {/* If u need to add any stats write it here */}
              </p>
            </div>
            <Card className={'relative aspect-square md:aspect-4/5 border-4 border-stone-900 bg-stone-200 overflow-hidden py-0'}>
              <Image
                src={"/hero.jpg"}
                alt="Food Image"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <Card className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm border-2 border-stone-900 py-0">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">
                      The Garden Harvest Salad
                    </h3>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2 h-2 fill-[#5F8D75] text-[#5F8D75]" />
                      ))}
                    </div>
                  </div>
                    <Badge
                    variant="outline"
                    className="border-2 border-green-700 bg-green-50 text-green-700 font-bold"                    >
                      98% Match
                    </Badge>
                  </div>
                  <div className="flex gap-4 text-xs text-stone-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3"/>15 mins
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3"/>1 serving
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Card>
          </div>
        </div>
        
        
      </section>
      <section className="py-12 border-y-2 border-stone-900 bg-stone-900">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
              {SITE_STATS.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold mb-1 text-stone-50">
                    {stat.val}
                  </div>
                  <Badge
                    variant="secondary"
                    className='bg-transparent text-[#5F8D75] text-sm uppercase tracking-wider font-medium border-none'
                    >
                    {stat.label}
                  </Badge>
                  </div>
              ))}
            </div>
        </section>

        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                  <h2 className="text-5xl md:text-6xl font-bold mb-4">
                    Your Kitchen, Upgraded.
                  </h2>
                  <p className="text-stone-600 text-xl font-light">
                    Experience the future of cooking with AI-powered recipes, personalized to your taste and ingredients. Say goodbye to mealtime stress and hello to culinary creativity.
                  </p>
                </div>
                
                  <div className="grid md:grid-cols-2 gap-6">
                    {FEATURES.map((feature, i) => {
                      const IconComponent = feature.icon;
                      return (
                        <Card key={i} className="border-2 border-stone-200 bg-white hover:border-[#5F8D75] hover:shadow-lg transition-all group py-0">
                        <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-6">
                          <div className="border-2 border-stone-200 bg-green-50 p-3 group-hover:border-[#5F8D75] group-hover:bg-green-100 transition-colors">
                            <IconComponent className="w-6 h-6"/>
                          </div>

                          <Badge variant="secondary" className="text-sm font-mono bg-stone-100 text-stone-600 uppercase tracking-wide border border-stone-200">
                            {feature.limit}
                          </Badge>
                          
                        </div>
                        <h3 className="text-2xl font-bold mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-stone-600 text-lg font-light">
                            {feature.description}
                          </p>
                        </CardContent>
                        </Card>
                      );
                    })}
                  </div>
            </div>
        </section>


     <section className="py-24 px-4 border-y-2 border-stone-200 bg-stone-900 text-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16">
            Cook in 3 Steps
          </h2>

          <div className="space-y-12">
            {HOW_IT_WORKS_STEPS.map((item, i) => (
              <div key={i}>
                <div className="flex gap-6 items-start">
                  <Badge
                    variant="outline"
                    className="text-6xl font-bold text-[#5F8D75]  border-none bg-transparent p-0 h-auto"
                  >
                    {item.step}
                  </Badge>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-lg text-stone-400 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {i < HOW_IT_WORKS_STEPS.length - 1 && (
                  <hr className="my-8 bg-stone-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Now Using Component */}
      <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <PricingSection subscriptionTier={subscriptionTier} />
        </div>
      </section>
    </div>
  );
}
