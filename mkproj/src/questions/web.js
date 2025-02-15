import prompts from 'prompts'

export default async function web() {
  const { framework } = await prompts({
    type: 'select',
    name: 'framework',
    message: 'What frame work do you want to use?',
    choices: [{ title: 'React', value: 'react' }],
  })

  const { tools } = await prompts({
    type: 'select',
    name: 'framework',
    message: 'What tools do you want to use?',
    choices:
      framework === 'react'
        ? [
            { title: 'Next.js', value: 'nextjs' },
            { title: 'astro', value: 'astro' },
            { title: 'vite', value: 'vite' },
          ]
        : [],
  })

  const { useTypescript } = await prompts({
    type: 'confirm',
    name: 'useTypescript',
    message: 'Do you want to use typescript?',
    initial: true,
  })

  const { useEslintPrettier } = await prompts({
    type: 'confirm',
    name: 'useEslintPrettier',
    message: 'Do you want to use eslint and prettier?',
    initial: true,
  })

  const { openVsCode } = await prompts({
    type: 'confirm',
    name: 'openVsCode',
    message: 'Do you want to open the project in VSCode?',
    initial: true,
  })

  return {
    framework,
    tools,
    useTypescript,
    useEslintPrettier,
    openVsCode,
  }
}
