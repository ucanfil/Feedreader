/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  describe('RSS Feeds', function () {
    /* This test tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('URL defined', function () {
      allFeeds.forEach(function (feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe("");
      });
    });


    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('name defined', function () {
      allFeeds.forEach(function (feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe("");
      });
    });
  });

  describe('The menu', function () {
    const menu = document.querySelector("body");
    /* A test that ensures the menu element is
     * hidden by default.
     */
    it('is hidden', function () {
      expect(menu.classList[0]).toBe("menu-hidden");
    });

    /* A test that ensures the menu changes
     * visibility when the menu icon is clicked.
     */
    it('changes visibility when the menu icon is clicked', function () {
      const menuIcon = document.querySelector(".icon-list");
      let isClicked = false;
      menuIcon.addEventListener('click', function () {
        isClicked = true;
      });
      if (isClicked) {
        expect(menu.classList[0]).toBe("");
      } else {
        expect(menu.classList[0]).toBe("menu-hidden");
      }
    });
  });

  describe('Initial Entries', function () {
    const feeds = document.querySelector(".feed");

    /* A test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    beforeEach(function (done) {
      loadFeed(0, function () {
        done();
      });
    });

    it('there is at least a single entry element within feeds container', function (done) {
      expect(feeds.firstElementChild.firstElementChild.classList[0]).toBe("entry");
      done();
    });
  });

  describe('New Feed Selection', function () {
    const feeds = document.querySelector(".feed"),
      contentBefore = feeds.innerHTML;
    let contentAfter;

    /* A test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */
    beforeEach(function (done) {
      loadFeed(0, function () {
        contentAfter = feeds.innerHTML;
        done();
      });
    });

    it('content actually changes', function (done) {
      expect(contentBefore).not.toEqual(contentAfter);
      done();
    });
  });
}());
