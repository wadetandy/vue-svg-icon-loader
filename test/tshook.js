require("ts-node").register({
  compilerOptions: {
    module: "commonjs"
  }
})

require('jsdom-global')()

process.on("unhandledRejection", (reason, p) => {
  console.log(`UNHANDLED PROMISE REJECTION: ${reason.stack}`)
})