"use client";

import { motion } from "framer-motion";

const steps = [
{
number: "01",
title: "Tell us about your space",
description:
"We learn what you want to change, how you use the garden and what you're hoping to achieve.",
},
{
number: "02",
title: "Plan the project",
description:
"We discuss the layout, materials and practical requirements before work begins.",
},
{
number: "03",
title: "Build it properly",
description:
"Our team brings the plan to life with careful preparation, construction and finishing.",
},
{
number: "04",
title: "Enjoy the result",
description:
"You get an outdoor space designed to look good, feel right and work for everyday life.",
},
];

export default function Process() {
return ( <section className="bg-white"> <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"> <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"> <div className="flex items-start"> <div className="flex items-center gap-3"> <span
             className="h-px w-8 bg-neutral-900"
             aria-hidden="true"
           /> <p className="text-xs font-semibold tracking-[0.18em] text-neutral-600">
HOW IT WORKS </p> </div> </div>

```
      <div>
        <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-950 sm:text-5xl">
          From idea to finished garden.
        </h2>
      </div>
    </div>

    <div className="mt-16 border-t border-neutral-200 lg:mt-24">
      <div className="grid md:grid-cols-2">
        {steps.map((step, index) => (
          <motion.article
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.06,
              ease: "easeOut",
            }}
            className={`border-b border-neutral-200 py-10 md:px-8 md:py-12 ${
              index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
            } ${index >= 2 ? "md:border-b-0" : ""}`}
          >
            <div className="flex gap-6 sm:gap-8">
              <span className="shrink-0 pt-1 text-xs font-semibold tracking-[0.12em] text-neutral-400">
                {step.number}
              </span>

              <div className="max-w-md">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950 sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-neutral-600">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>

    <div className="mt-10 flex items-center gap-3 text-sm text-neutral-500">
      <span
        className="h-px w-8 bg-neutral-300"
        aria-hidden="true"
      />
      <p>A straightforward process from first conversation to completion.</p>
    </div>
  </div>
</section>

);
}
