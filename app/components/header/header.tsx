import React, { ReactNode } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const Header = (): ReactNode => {
    return (
	<NavigationMenu.Root>
		<NavigationMenu.List>
			<NavigationMenu.Item>
				Item 1
				<NavigationMenu.Trigger />
				<NavigationMenu.Content>
					Content 1
					<NavigationMenu.Link />
				</NavigationMenu.Content>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
				Item 2
				<NavigationMenu.Link />
			</NavigationMenu.Item>

			<NavigationMenu.Item>
				Item 3
				<NavigationMenu.Trigger />
				<NavigationMenu.Content>
					<NavigationMenu.Sub>
						<NavigationMenu.List />
						<NavigationMenu.Viewport />
					</NavigationMenu.Sub>
				</NavigationMenu.Content>
			</NavigationMenu.Item>

			<NavigationMenu.Indicator />
		</NavigationMenu.List>

		<NavigationMenu.Viewport />
	</NavigationMenu.Root>
    )
}

export default Header;