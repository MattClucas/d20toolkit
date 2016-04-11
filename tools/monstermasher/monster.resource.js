(function () {
    // Handles the ACTUAL calls to ____ database for Monster Core Types
    myApp.factory('MonsterResource', function ($resource, config) {

        var r = $resource('pathfinderdb.php', {}, {
            getMonsters: { method: 'GET', isArray: true }
        });

        return r;
    });
})();