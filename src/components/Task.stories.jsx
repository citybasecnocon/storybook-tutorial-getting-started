import Task from './Task';
import { fn } from '@storybook/test';

/** 
 * To tell Storybook about the component we are documenting and testing, we 
 * create a default export that contains:
 * 
 * component -- the component itself
 * title -- how to group or categorize the component in the Storybook sidebar
 * tags -- to automatically generate documentation for our components 
 */
export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
};

export const Default = {
  /**
   * Arguments or args for short, allow us to live-edit our components with the 
   * controls addon without restarting Storybook. Once an args value changes, so 
   * does the component.
   */
  args: {
    /**
     * When creating a story, we use a base task arg to build out the shape of 
     * the task the component expects. Typically modeled from what the actual 
     * data looks like. Again, export-ing this shape will enable us to reuse 
     * it in later stories, as we'll see.
     */
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    },
    onPinTask: fn(),
    onArchiveTask: fn()
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    },
    onPinTask: fn(),
    onArchiveTask: fn()
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    },
    onPinTask: fn(),
    onArchiveTask: fn()
  }
};