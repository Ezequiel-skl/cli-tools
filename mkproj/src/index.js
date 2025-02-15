import prompts from 'prompts'
import web from './questions/web.js'

async function main() {
  const { type } = await prompts({
    type: 'select',
    name: 'type',
    message: 'What type of project do you want to create?',
    choices: [{ title: 'Web', value: 'web' }],
  })

  if (type === 'web') {
    const { framework, tools, useTypescript, useEslintPrettier, openVsCode } =
      await web()

    console.log([
      type,
      framework,
      tools,
      useTypescript,
      useEslintPrettier,
      openVsCode,
    ])
  }
}

main()
