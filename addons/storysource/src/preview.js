import addons from '@storybook/addons';
import { EVENT_ID } from './events';

function getLocation(context, locationsMap) {
  return locationsMap[`${context.kind}@${context.name}`] || locationsMap[`@${context.name}`];
}

function setStorySource(context, source, locationsMap) {
  const channel = addons.getChannel();
  const currentLocation = getLocation(context, locationsMap);

  channel.emit(EVENT_ID, {
    source,
    currentLocation,
    locationsMap,
  });
}

export function withStorySource(source, locationsMap = {}) {
  return (storyFn, context) => {
    setStorySource(context, source, locationsMap);
    return storyFn();
  };
}
