import NuxtSelector from 'testcafe-nuxt-selectors'

fixture
  .only('Navbar')
  .page(`${process.env.BASE_TEST_URL}/`)
  .beforeEach(async () => await NuxtSelector())

test('navbar is present', async cafe => {
  const navBar = NuxtSelector('nav-bar')
  await cafe.expect(navBar.exists).ok()
})

test('navbar has a logo', async cafe => {
  const appLogo = NuxtSelector('nav-bar app-logo')
  const image = appLogo.child(0)
  await cafe
    .expect(appLogo.getAttribute('href'))
    .contains('/')
    .expect(image.getAttribute('src'))
    .contains('logo')
})

test('navbar has three tabs', async cafe => {
  const navTabs = NuxtSelector('nav-bar nav-tab')
  const count = await navTabs.count

  await cafe.expect(count).eql(3)
})

test('navbar first tab is feed', async cafe => {
  const navTab = NuxtSelector('nav-bar nav-tab').nth(0)
  const image = navTab.child(0)

  await cafe
    .expect(navTab.innerText)
    .contains('Feed')
    .expect(navTab.getAttribute('href'))
    .contains('/feed')
    .expect(image.getAttribute('src'))
    .contains('/header-feed-bird.svg')
})

test('navbar second tab is explore', async cafe => {
  const navTab = NuxtSelector('nav-bar nav-tab').nth(1)
  const image = navTab.child(0)

  await cafe
    .expect(navTab.innerText)
    .contains('Explore')
    .expect(navTab.getAttribute('href'))
    .contains('/')
    .expect(image.getAttribute('src'))
    .contains('/header-explore-whale.svg')
})

test('navbar third tab is collabs', async cafe => {
  const navTab = NuxtSelector('nav-bar nav-tab').nth(2)
  const image = navTab.child(0)

  await cafe
    .expect(navTab.innerText)
    .contains('Collabs')
    .expect(navTab.getAttribute('href'))
    .contains('/collabs')
    .expect(image.getAttribute('src'))
    .contains('/header-collabs-octopus.svg')
})

test('navbar has a login button', async cafe => {
  const navTab = NuxtSelector('nav-bar button-login')
  const span = navTab.find('span')

  await cafe
    .expect(navTab.getAttribute('href'))
    .contains('/login')
    .expect(span.innerText)
    .contains('Join Us')
})
