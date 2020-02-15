import { NavigationInternal, NavigationLabels } from "../interfaces/navigation";

export const NavigationParser = (jsonData: JSON): NavigationLabels => {
  const parsedObjects: NavigationLabels | any = [];

  jsonData[0].node.navigationLabels.map((e: NavigationInternal): number =>
    parsedObjects.push(JSON.parse(e.internal.content))
  );

  return parsedObjects;
};
