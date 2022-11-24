import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export const ToggleThemeBtn = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const icon = colorMode === "dark" ? <SunIcon /> : <MoonIcon />;
    return (
        <IconButton
            rounded="full"
            aria-label="theme toggler"
            icon={icon}
            onClick={toggleColorMode}
        />
    );
};

export default ToggleThemeBtn;
