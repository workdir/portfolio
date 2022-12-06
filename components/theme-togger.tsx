import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export const ThemeToggler = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const icon = colorMode === "dark" ? <SunIcon /> : <MoonIcon />;
    return (
        <IconButton
            rounded="full"
            aria-label="theme toggler"
            variant="ghost"
            icon={icon}
            onClick={toggleColorMode}
        />
    );
};
