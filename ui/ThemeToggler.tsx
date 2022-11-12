import { useColorMode } from '@chakra-ui/react'

export default function ThemeToggler() {
    const { toggleColorMode } = useColorMode()

    return (
        <div>
            <button onClick={toggleColorMode}>
                Toggle Theme
            </button>
        </div>
    )
}