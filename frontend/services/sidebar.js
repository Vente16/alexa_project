app.factory('SideBarservice', SideBarservice);

function SideBarservice() {
  var toogleSidebar = false;

  var toogle = function () {
      toogleSidebar = !toogleSidebar;
  };

  var getToogle = function () {
      return toogleSidebar;
  };

  return {
    toogle: toogle,
    getToogle: getToogle,
  };
}
