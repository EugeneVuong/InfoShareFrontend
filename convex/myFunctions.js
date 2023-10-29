import { query } from "./_generated/server";
import { v } from "convex/values";

export const getTask = query({
  args: { id: v.id("firstName"), id: v.id("lastName"), id: v.id("phoneNumber"), id: v.id("collegeMajor")},
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});


 export const getQR = query({
    args: {id: v.id("data")},
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id)
    }
 })


// 