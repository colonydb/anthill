const mockAction = (name: string) => () => console.log(name);

const mockAsyncAction = (name: string) => async () => mockAction(name)();

export default mockAction;
export { mockAction, mockAsyncAction };
