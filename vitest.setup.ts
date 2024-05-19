import '@testing-library/jest-dom';
import { matchers as emotionMatchers } from '@emotion/jest';
import * as axeMatchers from "vitest-axe/matchers";
import { expect, describe, it, test, vi } from 'vitest';
import { fireEvent, render } from "@testing-library/react";
import 'jest-styled-components';

expect.extend({ ...emotionMatchers });
expect.extend(axeMatchers);

global.render = render
global.fireEvent = fireEvent

global.console.warn = (message) => {
    throw message;
};
global.console.error = (message) => {
    throw message;
};
