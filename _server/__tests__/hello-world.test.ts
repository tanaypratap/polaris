import hello from "../api/hello-world";

const send = jest.fn();
const res = {
    send,
};

test('Should call res.send() with Hello World!', () => {
    hello({} as any, res as any);
    expect(send.mock.calls).toHaveLength(1);
    expect(send.mock.calls[0][0]).toBe('Hello World!');
});