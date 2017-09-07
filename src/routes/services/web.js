async function main(ctx) {
  await ctx.render('index', { title: 'Boilerplate' });
}

async function custom(ctx) {
  await ctx.render('index', { title: ctx.params.customThing });
}

module.exports = { main, custom };
