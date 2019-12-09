## Installation instructions
- I used node 10.15.3, I think any similar-ish version should work great
- To install, `yarn`
- To run `yarn start`
- To test `yarn test`
 
## Tools Used
- React, Redux, TypeScript
- Create React App : to get a quick + easy skeleton for SPA
- Material UI : layout / input components that look great out of the box with little styling, and still offer deep customization

## Improvements-to-make
- Split my react components into a container/component heirarchy
- Come up with some tests for my react components.
- I ended up not using typescript as much as I'd like, I think there's a good amount of type safety that would improve future development. A lot of `any` types, which are sometimes worse than no type at all
- While I tried to use a redux implementation, I did end up with some classes plain-react pitfalls with some prop-drilling that I'd probably refactor if I were doing this again.
- The typing indicator isn't quite right in terms of when it stops showing
- Track, format, and show the time a message was sent
- Some concepts, like my util folder, are a little over-engineered at the moment. I believe that as this app continued to be built, these would fill in and become more valuable.