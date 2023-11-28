import { Button, Flex } from '@/design-system'
import { useLogin, usePrivy } from '@privy-io/react-auth'
import { useState } from 'react'
import { User, UsernameDialog, AddNew } from '@/client'
import { RiverLogo } from '@/server'

export function Header() {
  const { ready, authenticated } = usePrivy()

  const [open, setOpen] = useState<boolean>(false)

  const { login } = useLogin({
    onComplete: (user, isNewUser) => {
      // Open the `UsernameDialog` if the user is new
      if (isNewUser) {
        setOpen(true)
      }
    },
    onError: (error) => {
      console.log('Error with Privy login:', error)
    },
  })

  // If the `PrivyProvider` is loading, just display the River logo
  if (!ready) {
    return <RiverLogo />
  }

  return (
    <>
      <Flex className="items-center justify-between">
        <RiverLogo />
        <Flex className="gap-4">
          <AddNew />
          {authenticated ? (
            <User />
          ) : (
            <Button variant="link" onClick={login}>
              Login
            </Button>
          )}
        </Flex>
      </Flex>
      <UsernameDialog open={open} setOpen={setOpen} />
    </>
  )
}
