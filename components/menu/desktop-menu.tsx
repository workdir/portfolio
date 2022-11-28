import { useRouter } from "next/router";
import type { Route } from "./types/route";
import Link from "next/link";
import { Stack, Box, Button, type StackProps } from "@chakra-ui/react";

interface Props extends StackProps {
    routes: Route[];
}

const MenuItem = (route: Route) => {
    const router = useRouter();
    const isActive = router.asPath === route.slug;
    const activeColor = isActive ? "gray.600" : undefined;
    // const activeBackground = isActive ? "gray.100" : undefined;

    return (
        <Box as={"li"} key={route.slug}>
            <Link href={route.slug}>
                <Button
                    //              bg={activeBackground}
                    color={activeColor}
                    leftIcon={route.icon}
                    variant={"ghost"}
                >
                    {route.text}
                </Button>
            </Link>
        </Box>
    );
};

const DesktopMenu = ({ routes, ...props }: Props) => {
    const items = routes.map((props) => (
        <MenuItem key={props.slug} {...props} />
    ));
    return (
        <Stack
            as={"ul"}
            direction={["row"]}
            spacing={3}
            sx={{ listStyle: "none" }}
            {...props}
        >
            {items}
        </Stack>
    );
};
export default DesktopMenu;
