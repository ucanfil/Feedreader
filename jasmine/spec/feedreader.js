/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  describe('RSS Feeds', function() {
    /* This test tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('URL defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe("");
      });
    });


    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('name defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe("");
      });
    });
  });

  describe('The menu', function() {
    /* A test that ensures the menu element is
     * hidden by default.
     */
    it('is hidden', function() {
      expect($("body").hasClass("menu-hidden")).toBe(true);
    });

    /* A test that ensures the menu changes
     * visibility when the menu icon is clicked.
     */
    it('changes visibility when the menu icon is clicked', function () {
      $(".icon-list").click();
      expect($("body").hasClass("menu-hidden")).toBe(false);
      $(".icon-list").click();
      expect($("body").hasClass("menu-hidden")).toBe(true);
    });
  });

  describe('Initial Entries', function() {
    /* A test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('there is at least a single entry element within feeds container', function (done) {
      expect($(".feed .entry").length).toBeGreaterThan(0);
      done();
    });
  });

  describe('New Feed Selection', function() {
    let contentBefore;
    let contentAfter;

    /* A test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */
    beforeEach(function(done) {
      loadFeed(0, function() {
        contentBefore = $(".feed").html();
        loadFeed(1, function() {
          contentAfter = $(".feed").html();
          done();
        });
      });
    });

    it('content actually changes', function(done) {
      expect(contentBefore).not.toEqual(contentAfter);
      done();
    });
  });
}());
