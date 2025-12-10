const Seach = () => {
  return (
    <>
      <div class="globalnav-flyout-content globalnav-submenu-content">
        <form action="/us/search" method="get" class="globalnav-searchfield">
          <div class="globalnav-searchfield-wrapper">
            <input
              placeholder="Search apple.com"
              aria-label="Search apple.com"
              autocorrect="off"
              autocapitalize="off"
              autocomplete="off"
              class="globalnav-searchfield-input"
            />
            <input
              id="globalnav-searchfield-src"
              type="hidden"
              name="src"
              value="globalnav"
            />
            <button
              aria-label="Clear search"
              tabindex="-1"
              type="button"
              class="globalnav-searchfield-reset"
              disabled=""
              aria-hidden="true"
            ></button>
            <button
              aria-label="Submit search"
              tabindex="-1"
              aria-hidden="true"
              type="submit"
              class="globalnav-searchfield-submit"
              disabled=""
            ></button>
          </div>
          <div
            role="status"
            aria-live="polite"
            data-topnav-searchresults-label="total results"
            class="globalnav-searchresults-count"
          ></div>
        </form>
        
      </div>
    </>
  );
};

export default Seach;
