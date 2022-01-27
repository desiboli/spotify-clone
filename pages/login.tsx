import { GetServerSideProps } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import React from 'react'

type Props = {
  providers: {
    provider: {
      id: string
      name: string
    }
  }
}

const Login = ({ providers }: Props) => {
  console.log('THE PROVIDERS WHERE ARE YOU ?', providers)
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <img className="mb-5 w-52" src="https://links.papareact.com/9xl" alt="" />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="rounded-full bg-[#18D860] p-5 text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
