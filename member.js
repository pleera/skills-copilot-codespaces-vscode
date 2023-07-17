function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    templateUrl: 'app/components/skills/member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true
  };
}